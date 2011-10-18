// this is for testing.
var result = "";

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

  jQuery.fn.translate = function(options){
    var options = jQuery.extend({
      text: $(this).val(),
      show: "#translated_text",
      from: $("#from_lang").val(),
      to  : $("#to_lang").val()
    }, options);

    $.mobile.showPageLoadingMsg();

    text = encodeURIComponent(options.text);
    from = encodeURIComponent(options.from);
    to = encodeURIComponent(options.to);

    if (text == "") {
      navigator.notification.alert('Please type the text to translate.',
                                   $.mobile.hidePageLoadingMsg(),
                                   'Error', 'close');
      return null;
    }

    $.getJSON("https://ajax.googleapis.com/ajax/services/language/translate", "v=1.0&q="+text+"&langpair="+from+"%7C"+to+"&callback=?", function(data){
      result = data.responseData.translatedText;
      $(options.show).html(result);
      $.mobile.hidePageLoadingMsg();
    });

    // this.each(function(){});

    return this;
  };

})(jQuery);
