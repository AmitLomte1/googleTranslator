// this is for testing.
var result = "";

(function(jQuery){

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
      result = data;
      if(data.responseStatus == "200"){
        $(options.show).html(data.responseData.translatedText);
      } else {
        navigator.notification.alert(data.responseDetails, null, 'Error', 'close');
      }
      $.mobile.hidePageLoadingMsg();
    });

    // this.each(function(){});

    return this;
  };

})(jQuery);
