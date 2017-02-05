function getTextAdsInAdGroup() {
  var adGroupIterator = AdWordsApp.adGroups()
      .withCondition('Name = "INSERT_ADGROUP_NAME_HERE"')
      .get();
  if (adGroupIterator.hasNext()) {
    var adGroup = adGroupIterator.next();
    // You can filter for ads of a particular type, using the AdType selector.
    // See https://developers.google.com/adwords/scripts/docs/reference/adwordsapp/adwordsapp_adselector#withCondition_1
    // for possible values.

    var adsIterator = adGroup.ads().withCondition('Type=TEXT_AD').get();
    while (adsIterator.hasNext()) {
      var ad = adsIterator.next();
      logAd(ad);
    }
  }
}

function logAd(ad) {
  Logger.log('Headline : ' + ad.getHeadline());
  Logger.log('Line1 : ' + ad.getDescription1());
  Logger.log('Line2 : ' + ad.getDescription2());
  Logger.log('Final URL : ' + ad.urls().getFinalUrl());
  Logger.log('Display URL : ' + ad.getDisplayUrl());
  Logger.log('Approval Status : ' + ad.getApprovalStatus());
  Logger.log('Mobile preferred : ' + ad.isMobilePreferred());
  Logger.log('Enabled : ' + ad.isEnabled());
}