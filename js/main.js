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


// box01 - gallery : 자동
let fullWidth = $('#box01 .all>li').width();
$('#box01')
setInterval(function(){
    $('#box01 .all').animate({marginLeft:'-='+fullWidth+'px'}, function(){
        $('#box01 .all>li:first').appendTo('#box01 .all');
        $('#box01 .all').css('margin-left', '-'+fullWidth+'px');
    });
}, 3000);

    // box04 - gallery
    // 버튼 클릭시 애니로 돌아가게 만들기
    let liWidth = $('#box04 .all>li').width();
    $('#box04 .all').css('margin-left','-='+liWidth+'px');  // 준비하고 시작해야 함
    $('#box04 .all>li:last').prependTo('#box04 .all');
    $('.prev').on('click', function(){
        $('#box04 .all').animate({marginLeft:'-='+liWidth+'px'}, function(){
            $('#box04 .all>li:first').appendTo('#box04 .all');
            $('#box04 .all').css('margin-left', '-'+liWidth+'px');
        });
    });
    $('.next').on('click', function(){
        $('#box04 .all').animate({marginLeft:'+='+liWidth+'px'}, function(){
            $('#box04 .all>li:last').prependTo('#box04 .all');
            $('#box04 .all').css('margin-left', '-'+liWidth+'px');
        });
    });



// 
});