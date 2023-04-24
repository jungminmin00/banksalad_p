import $ from "jquery";
$(function(){
    // header nav
    $('header nav').on('mouseenter', function(){
        $('header ul>li>ul').css('display', 'inline-block');
        $('#headerWrap').css('height', '380px');
    });
    $('#headerWrap').on('mouseleave', function(){
    $('#headerWrap').css('height', 'auto');
        $('header ul>li>ul').css('display', 'none');
    });  
    $('header nav>ul>li>a').on('click', function(){   
        // console.log('막기 성공');
        return false;
    });


    // box01 - gallery
    
})