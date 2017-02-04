function addGmailMultiProductAd() {
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
  var itemImageMediaIterator = AdWordsApp.adMedia().media()
      .withCondition('Name = "INSERT_ITEM_1_IMAGE_NAME_HERE"')
      .get();
  if (adGroupIterator.hasNext() &&
      logoMediaIterator.hasNext() &&
      itemImageMediaIterator.hasNext()) {
    var adGroup = adGroupIterator.next();
    var logo = logoMediaIterator.next();
    var item1Image = itemImageMediaIterator.next();
    adGroup.newAd().gmailMultiProductAdBuilder()
        .withName('Ad name')
        .withAdvertiser('Advertiser')
        .withSubject('Subject')
        .withDescription('Description')
        .withHeadline('Headline')
        .withLogo(logo)
        .withItemImages([item1Image])
        .withItemTitles(['Item 1 title'])
        .withItemButtonCallsToAction(['Item 1 button text'])
        .withItemButtonFinalUrls(['http://www.example.com/item_1_button'])
        .withFinalUrl('http://www.example.com')
        .withDisplayUrl('http://www.example.com')
        .build();
    // GmailMultiProductAdBuilder has additional options.
    // For more details, see
    // https://developers.google.com/adwords/scripts/docs/reference/adwordsapp/adwordsapp_gmailmultiproductadbuilder
  }
}