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


// box01 - gallery : 자동 슬라이드
    let fullWidth = $('#box01 .all>li').width();
    let str;

    $('#box01 .all>li:last').prependTo('#box01 .all');
    $('#box01 .all').css('margin-left', '-'+fullWidth+'px');
    // 함수명
    timer();

    $('#box01 .all>li').each(function(){
        $(this).on('mouseenter', function(){
        stop();
        });
    });
    $('#box01 .all>li').each(function(){
        $(this).on('mouseleave', function(){
        timer();
        });
    });
    // 타이머 함수
    function timer(){
        str = setInterval(ani, 1500);
    }
    function stop(){
        clearInterval(str);
    }
    // subMenu
    $('.subMenu li').on('mouseenter', function(){
        $(this).css('width', '60px');
    }).on('mouseleave', function(){
        $(this).css('width', '30px');
    });

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

    // 다른 a막기
    
// 
});

// 함수
function ani(){
    let fullWidth = $('#box01 .all>li').width();
    $('#box01 .all').stop().animate({marginLeft: '-='+fullWidth+'px'}, function(e){
      $('#box01 .all>li:first').appendTo('#box01 .all');
      $('#box01 .all').css('margin-left', '-'+fullWidth+'px')
    });
}