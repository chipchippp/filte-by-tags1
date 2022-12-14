(function() {
    var $imgs = $('#gallery img');
    var $buttons = $ ('#buttons');
    var tagged = {};

 $imgs.each(function(){
    var img = this ;
    var tags = $(this).data('tags');
    if(tags) {
        tags.split(',').forEach(function(tagName){
            if(tagged [tagName] == null) {
                tagged[tagName] = [];
            }
            tagged[tagName].push(img);
        });
    }
  });
  &('<button/>', {
    Text: 'Show All',
    class:'active', 
    click: function(){
        $(this)
        .addClass('active')
        .sibling()
        .removeClass('active');
        $imgs.show();
    }
  }) .appendTo($buttons);
  $.each(tagged, function(tagName){
      $('<button/>', {
        Text: tagName + '(' + tagged[tagName].length + ')' ,
        click: function() {
            $(this)
            .addClass('active')
            .siblings()
            .removeClass('active');
            $imgs 
            .hide()
            .filter(tagged[tagName])
            .show();
        }
      }) .appendTo($buttons);
  });
}());
