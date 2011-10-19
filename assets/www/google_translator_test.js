$(document).ready(function(){
  test("inverse a language", function(){
    equals(inverseLang("ja"), "en",
           "inverseLang should return en if ja is given");
    equals(inverseLang("en"), "ja",
           "inverseLang should return ja if en is given");
  });

  asyncTest("tanslate text", function(){
    $().translate({
      text: "私は今翻訳するためのページを作っています。",
      from: "ja", to: "en"
    });

    setTimeout(function(){
      start();
      if(result.responseStatus == "200"){
        equals(result.responseData.translatedText, "I have now created a page to translate.",
               "'私は今翻訳するためのページを作っています。' should be translated to 'I have now created a page to translate.'.");
      } else {
        ok(true, 'HTTP Error:'+result.responseDetails);
      }
    },1000);
  });
});
