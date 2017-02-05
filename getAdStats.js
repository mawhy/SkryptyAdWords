function getAdStats() {
  var adGroupIterator = AdWordsApp.adGroups()
        .withCondition('Name = "INSERT_ADGROUP_NAME_HERE"')
        .get();
  if (adGroupIterator.hasNext()) {
    var adGroup = adGroupIterator.next();
    // If you want to restrict your search to some ads only, then you could
    // apply a label and retrieve ads as
    //
    //   var label = AdWordsApp.labels()
    //             .withCondition('Name="INSERT_LABEL_NAME_HERE"')
    //             .get()
    //             .next();
    //   var adsIterator = label.ads().get();

    var adsIterator = adGroup.ads().get();
    while (adsIterator.hasNext()) {
      var ad = adsIterator.next();
      // You can also request reports for pre-defined date ranges. See
      // https://developers.google.com/adwords/api/docs/guides/awql,
      // DateRangeLiteral section for possible values.
      var stats = ad.getStatsFor('LAST_MONTH');
      Logger.log(adGroup.getName() + ', ' +
          stats.getClicks() + ', ' + stats.getImpressions());
    }
  }
}