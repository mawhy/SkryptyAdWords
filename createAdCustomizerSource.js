function createAdCustomizerSource() {
  AdWordsApp.newAdCustomizerSourceBuilder()
      .withName('Flowers')
      .addAttribute('flower', 'text')
      .addAttribute('price', 'price')
      .build();
}