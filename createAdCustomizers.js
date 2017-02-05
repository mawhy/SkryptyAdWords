function createAdCustomizers() {
  var source = AdWordsApp.newAdCustomizerSourceBuilder()
      .withName('Flowers')
      .addAttribute('flower', 'text')
      .addAttribute('price', 'price')
      .build()
      .getResult();
  source.adCustomizerItemBuilder()
      .withAttributeValue('flower', 'roses')
      .withAttributeValue('price', '$29.99')
      .withTargetKeyword('roses')
      .build();
}