function addExpandedTextAd() {


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
  if (adGroupIterator.hasNext()) {
    var adGroup = adGroupIterator.next();
    adGroup.newAd().expandedTextAdBuilder()
        .withHeadlinePart1('First headline of ad')
        .withHeadlinePart2('Second headline of ad')
        .withDescription('Ad description')
        .withPath1('path1')
        .withPath2('path2')
        .withFinalUrl('http://www.example.com')
        .build();
    // ExpandedTextAdBuilder has additional options.
    // For more details, see
    // https://developers.google.com/adwords/scripts/docs/reference/adwordsapp/adwordsapp_expandedtextadbuilder
  }
}