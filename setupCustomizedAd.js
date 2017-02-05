function setupCustomizedAd() {ś
  // If you have multiple ad groups with the same name, this snippet will
  // pick an arbitrary matching ad group each time. In such cases, just
  // filter on the campaign name as well:
  //
  // AdWordsApp.adGroups()
  //      .withCondition('Name = "INSERT_ADGROUP_NAME_HERE"')
  //      .withCondition('CampaignName = "INSERT_CAMPAIGN_NAME_HERE"')
  var adGroupIterator = AdWordsApp.adGroups()
      .withCondition('Name = "INSERT_ADGROUP_NAME_HERE"')
      .get();
  if (adGroupIterator.hasNext()) {
    var adGroup = adGroupIterator.next();

    // This ad will try to fill in the blanks using the 'flower' and 'price'
    // attributes from the 'Flower' data source.
    adGroup.newAd().expandedTextAdBuilder()
        .withHeadlinePart1('Flowers for sale')
        .withHeadlinePart2('Fresh cut {=Flowers.flower}')
        .withDescription('starting at {=Flowers.price}')
        .withFinalUrl('http://example.com/flowers')
        .build();
  }
}