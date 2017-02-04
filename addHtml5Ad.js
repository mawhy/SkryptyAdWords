function addHtml5Ad() {
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
  var mediaIterator = AdWordsApp.adMedia().media()
      .withCondition('Name = "INSERT_MEDIA_BUNDLE_NAME_HERE"')
      .get();
  if (adGroupIterator.hasNext() && mediaIterator.hasNext()) {
    var adGroup = adGroupIterator.next();
    var mediaBundle = mediaIterator.next();
    adGroup.newAd().html5AdBuilder()
        .withName('Ad name')
        .withMediaBundle(mediaBundle)
        .withEntryPoint('someDirectory/index.html')
        .withDimensions('300x250')
        .withDisplayUrl('http://www.example.com')
        .withFinalUrl('http://www.example.com')
        .build();
    // HTML5AdBuilder has additional options.
    // For more details, see
    // https://developers.google.com/adwords/scripts/docs/reference/adwordsapp/adwordsapp_html5adbuilder
  }
}