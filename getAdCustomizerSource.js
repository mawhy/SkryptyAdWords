function getAdCustomizerSource() {
  var sources = AdWordsApp.adCustomizerSources().get();
  while (sources.hasNext()) {
    var source = sources.next();
    if (source.getName() == 'Flowers') {
      Logger.log(source.getName() + ' ' + source.getAttributes());
    }
  }
}

