function getAdCustomizerItems() {
  var source = AdWordsApp.adCustomizerSources().get().next();
  var items = source.items().get();
  while (items.hasNext()) {
    var item = items.next();
    Logger.log(item.getAttributeValues());
  }
}