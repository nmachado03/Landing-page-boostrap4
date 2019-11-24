(function(){
    $('ul.filters > li').on('click', function(e){
        e.preventDefault();
        $('ul.filters > li').removeClass('active');
        $(this).addClass('active');
    });

    $('.card').mauseenter(function(){

        $('.card-overlay').css({'top': '-100%'});
        $('.card-hover').css({'top': '0'});
    
    }).mauseleave(function(){
        $('.card-overlay').css({'top': '0'});
        $('.card-hover').css({'top': '100%'});
    });
});
$(function () {
        
    let filterList = {
    
        init: function () {
        
            // MixItUp plugin
            // http://mixitup.io
            $('#portfoliolist').mixItUp({
                selectors: {
              target: '.portfolio',
              filter: '.filter' 
          },
          load: {
              filter: '.app' // show app tab on first load
            }     
            });                             
        
        }

    };
    
    // Run the show!
    filterList.init();
    
}); 