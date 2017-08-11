/**
 * Created by Administrator on 2017/4/4.
 */
$(function () {
    $(window).resize(function () {
        if($(window).width()<=735){
            $('.bottom ul').css('display','none')
            $('.small-srceen .ul > a').eq(0).off();
            $('.small-srceen .ul > a').eq(0).click(function () {
                $('.small-srceen > ul').slideToggle(1000,function () {
                    $('.small-srceen > ul').clearQueue();
                }).children().toggleClass('active');
                $('html,body').toggleClass('hidden');
                $('.small-srceen .ul > a').eq(2).toggleClass('last').end().eq(0).children().eq(0).toggleClass('rotatex').next().toggleClass('rotatey');
            });
            $('.bottom h4').off();
            $('.bottom h4').click(function () {
                $(this).next().stop(true,true).slideToggle(300);
                $(this).children().toggleClass('rotate');
            })
        }else{
            $('.bottom ul').css('display','block')
            $('.bottom h4').off();
        }
    });
    $(window).triggerHandler('resize');

    //banner轮播
    //banner进度条
    let i=0;
    //banner图
    let now=0,next=0;
    //获取图片
    let img=$('.banner > .img');
    // console.log(img);
    //获取左右箭头
    let left=$('.banner > .left');
    // console.log(left);
    let right=$('.banner > .right');
    let rect=$('.banner > li.rect > div > div');
    rect.eq(i).addClass("actives")
    rect.on('animationend.stop',function () {
        now=i;
        i++;
        if(i>rect.length-1){
            i=0;
        }
        moveLeft();
        rect.removeClass().eq(i).addClass('actives');
    });
    function moveLeft() {
        next=now+1;
        if(next>img.length-1){
            next=0;
        }
        let color=$('.banner > li').eq(now).css('backgroundColor');
        // console.log(color);
        $('.banner').css('backgroundColor',color);
        // console.log($('.banner').css('backgroundColor'));
        img.removeClass('now-out next-in zindex first now-in next-out');
        img.eq(now).addClass('now-out');
        img.eq(next).addClass('next-in zindex');
        now=next;
    }
    function moveRight() {
        next=now-1;
        if(next<0){
            next=img.length-1;
        }
        let color=$('.banner > li').eq(next).css('backgroundColor');
        // console.log(color);
        $('.banner').css('backgroundColor',color);
        img.removeClass('now-in next-out first zindex now-out next-in');
        img.eq(now).addClass('now-in zindex');
        img.eq(next).addClass('next-out');
        now=next;
    }
    //左右点击和点击轮播点时清除动画
    left.click(function () {
        rect.off('animationend.stop');
        moveRight();
        rect.removeClass().eq(next).addClass('vasible');
    });
    right.click(function () {
        rect.off('animationend.stop');
        moveLeft();
        rect.removeClass().eq(next).addClass('vasible');
    });
    // console.log(rect);
    $('.banner > li.rect > div').click(function () {
        rect.off('animationend.stop');
        let index=$(this).index();
        rect.removeClass().eq($(this).index()).addClass('vasible');
        if(index>now){
            img.removeClass('now-out next-in zindex first now-in next-out');
            img.eq(now).addClass('now-out');
            img.eq(index).addClass('next-in zindex');
        }else if(index<now){
            img.removeClass('now-in next-out first zindex now-out next-in');
            img.eq(now).addClass('now-in zindex');
            img.eq(index).addClass('next-out');
        }
        now=index;
    })

});