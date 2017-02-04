function pauseAdsInAdGroup() {
  var adGroupIterator = AdWordsApp.adGroups()
      .withCondition('Name = "INSERT_ADGROUP_NAME_HERE"')
      .get();
  if (adGroupIterator.hasNext()) {
    var adGroup = adGroupIterator.next();
    var adsIterator = adGroup.ads().get();
    while (adsIterator.hasNext()) {
      var ad = adsIterator.next();
      ad.pause();
    }
  }
}