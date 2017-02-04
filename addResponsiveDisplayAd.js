function addResponsiveDisplayAd() {
  // If you have multiple adGroups or images with the same name, this
  // snippet will pick an arbitrary match each time. In such cases, just
  // filter on the campaign name or media ID as well:
  //
  // AdWordsApp.adGroups()
  //     .withCondition('Name = "INSERT_ADGROUP_NAME_HERE"')
  //     .withCondition('CampaignName = "INSERT_CAMPAIGN_NAME_HERE"')
  var adGroupIterator = AdWordsApp.adGroups()
      .withCondition('Name = "INSERT_ADGROUP_NAME_HERE"')
      .get();
  var mediaIterator = AdWordsApp.adMedia().media()
      .withCondition('Name = "INSERT_MARKETING_IMAGE_NAME_HERE"')
      .get();
  if (adGroupIterator.hasNext() && mediaIterator.hasNext()) {
    var adGroup = adGroupIterator.next();
    var marketingImage = mediaIterator.next();
    adGroup.newAd().responsiveDisplayAdBuilder()
        .withShortHeadline('Short headline')
        .withLongHeadline('Long headline')
        .withDescription('Description')
        .withBusinessName('Business name')
        .withMarketingImage(marketingImage)
        .withFinalUrl('http://www.example.com')
        .build();
    // ResponsiveDisplayAdBuilder has additional options.
    // For more details, see
    // https://developers.google.com/adwords/scripts/docs/reference/adwordsapp/adwordsapp_responsivedisplayadbuilder
  }
}