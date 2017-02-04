function addGmailImageAd() {
  // If you have multiple adGroups with the same name, this snippet will
  // pick an arbitrary matching ad group each time. In such cases, just
  // filter on the campaign name as well:
  //
  // AdWordsApp.adGroups()
  //     .withCondition('Name = "INSERT_ADGROUP_NAME_HERE"')
  //     .withCondition('CampaignName = "INSERT_CAMPAIGN_NAME_HERE"')
  var adGroupIterator = AdWordsApp.adGroups()
      .withCondition('Name = "INSERT_ADGROUP_NAME_HERE"')
      .get();
  var logoMediaIterator = AdWordsApp.adMedia().media()
      .withCondition('Name = "INSERT_LOGO_IMAGE_NAME_HERE"')
      .get();
  var imageMediaIterator = AdWordsApp.adMedia().media()
      .withCondition('Name = "INSERT_IMAGE_NAME_HERE"')
      .get();
  if (adGroupIterator.hasNext() &&
      logoMediaIterator.hasNext() &&
      imageMediaIterator.hasNext()) {
    var adGroup = adGroupIterator.next();
    var logo = logoMediaIterator.next();
    var image = imageMediaIterator.next();
    adGroup.newAd().gmailImageAdBuilder()
        .withName('Ad name')
        .withAdvertiser('Advertiser')
        .withSubject('Subject')
        .withDescription('Description')
        .withLogo(logo)
        .withImage(image)
        .withFinalUrl('http://www.example.com')
        .withDisplayUrl('http://www.example.com')
        .build();
    // GmailImageAdBuilder has additional options.
    // For more details, see
    // https://developers.google.com/adwords/scripts/docs/reference/adwordsapp/adwordsapp_gmailimageadbuilder
  }
}