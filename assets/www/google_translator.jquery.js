// this is for testing.
var result = "";

function translate(text, from, to){
  $.mobile.showPageLoadingMsg();
  text = encodeURIComponent((text || $('#text_to_translate').val()));
  from = encodeURIComponent((from || $("#from_lang").val()));
  to = encodeURIComponent((to || $("#to_lang").val()));
  $.getJSON("https://ajax.googleapis.com/ajax/services/language/translate", "v=1.0&q="+text+"&langpair="+from+"%7C"+to+"&callback=?", function(data){
    result = data.responseData.translatedText;
    $("#translated_text").html(result);
    $.mobile.hidePageLoadingMsg();
  });
  return result;
};

function inverseLang(lang){
  return (lang == "ja" ? "en" : "ja");
};

(function(jQuery){

  jQuery.fn.inverseLanguage = function(selector){
    this.each(function(){
      $(selector).val(inverseLang($(this).val()));
    });

    return this;
  };

})(jQuery);
