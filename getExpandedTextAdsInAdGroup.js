function getExpandedTextAdsInAdGroup() {
  var adGroupIterator = AdWordsApp.adGroups()
      .withCondition('Name = "INSERT_ADGROUP_NAME_HERE"')
      .get();
  if (adGroupIterator.hasNext()) {
    var adGroup = adGroupIterator.next();
    var adsIterator = adGroup.ads()
      .withCondition('Type=EXPANDED_TEXT_AD')
      .get();
    while (adsIterator.hasNext()) {
      var ad = adsIterator.next().asType().expandedTextAd();
      logExpandedTextAd(ad);
    }
  }
}

function logExpandedTextAd(expandedTextAd) {
  Logger.log('Headline part 1 : ' + expandedTextAd.getHeadlinePart1());
  Logger.log('Headline part 2 : ' + expandedTextAd.getHeadlinePart2());
  Logger.log('Description : ' + expandedTextAd.getDescription());
  Logger.log('Path 1 : ' + expandedTextAd.getPath1());
  Logger.log('Path 2 : ' + expandedTextAd.getPath2());
  Logger.log('Final URL : ' + expandedTextAd.urls().getFinalUrl());
  Logger.log('Mobile final URL : ' + expandedTextAd.urls().getFinalUrl());
  Logger.log('Final URL : ' + expandedTextAd.urls().getMobileFinalUrl());
  Logger.log('Tracking template : ' +
      expandedTextAd.urls().getTrackingTemplate());
  Logger.log('Custom parameters : ' +
      expandedTextAd.urls().getCustomParameters());
  Logger.log('Approval Status : ' +
      expandedTextAd.getApprovalStatus());
  Logger.log('Enabled : ' + expandedTextAd.isEnabled());
}