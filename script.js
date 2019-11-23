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