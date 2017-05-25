/**
 * Created by Administrator on 2017/4/13.
 */
$(document).ready(function () {
    //轮播
    function shuangxiabiao(box,img,circle,left,right) {
        let flag=true;
        box=$(box);
        img=$(img);
        circle=$(circle);
        let t=setInterval(move,3000);
        let m;
        let now=0;
        let next;
        function move() {
            next=now+1;
            if(next>img.length-1){
                next=0;
            }
            img.eq(next).animate({opacity:1},200);
            img.eq(now).animate({opacity:0},200);
            circle.eq(next).addClass('first');
            circle.eq(now).removeClass('first');
            now=next;
        }
        box.hover(function () {
            clearInterval(t)
        },function () {
            t=setInterval(move,3000)
        });
        circle.mouseover(function () {
            m=setTimeout(()=>{
                    img.eq($(this).index()).animate({opacity:1},200);
            img.eq(now).animate({opacity:0},200);
            circle.eq($(this).index()).addClass('first');
            circle.eq(now).removeClass('first');
            now=$(this).index();
        },200)
        });
        circle.mouseout(function () {
            clearTimeout(m)
        });
        left=$(left);
        right=$(right);
        left.click(function () {
            if (flag){
                flag=false;
                next=now-1;
                if(next<0){
                    next=img.length-1;
                }
                img.eq(next).animate({opacity:1},200);
                img.eq(now).animate({opacity:0},200);
                circle.eq(next).addClass('first');
                circle.eq(now).removeClass('first');
                now=next;
            }
        });
        right.click(function () {
            if(flag){
                flag=false;
                move();
            }
        });
        img.each(function (index,val) {
            val.addEventListener('transitionend',function () {
                flag=true;
            })
        })
        box.mouseover(function () {
            left.css('display','block');
            right.css('display','block');
        })
        box.mouseout(function () {
            left.css('display','none');
            right.css('display','none');
        })
    }
    shuangxiabiao('.bg-box','.bg-box img','.bg-box > code > code','.bg-box .left','.bg-box .right');

//首页更多图片
    $('.more-link').click(function () {
        $('.swiper-box').css('display','block')
        $('html').toggleClass('hidden');
        // $('body').toggleClass('hidden');
    });
    $('.swiper-box').click(function () {
        $('.swiper-box').css('display','none');
        $('html').toggleClass('hidden');
        // $('body').toggleClass('hidden');
    });
    $('.swiper-box .box').click(function (e) {
         e.stopPropagation()
    });
    // <!--// swiper-->
    // var swiper = new Swiper('.swiper-container', {
    //     nextButton: '.swiper-button-next',
    //     prevButton: '.swiper-button-prev',
    //     pagination: '.swiper-pagination',
    //     paginationType: 'fraction',
    //     simulateTouch:false
    // });
    var galleryTop = new Swiper('.gallery-top', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 10,
    });
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true
    });
    galleryTop.params.control = galleryThumbs;
    galleryThumbs.params.control = galleryTop;
    $('.swiper-box').css('display','none');
});
//酒店购票选项卡
$(document).ready(function () {
    let lis=$('.jiudian .left div');
    let boxs=$('.jiudian .right');
    boxs.hide();
    boxs.click(function (e) {
        e.stopPropagation()
    });
    lis.click(function (e) {
        e.stopPropagation();
        lis.removeClass('first');
        $(this).addClass('first');
        boxs.hide();
        boxs.eq($(this).index()).show();
        boxs.animate({width:410},500,function () {
            $('.right div,.right a,.right span,.right input').css('opacity',1)
        });
    });
    $('body').click(function () {
        lis.removeClass('first');
        boxs.animate({width:0},500,function () {
            $('.right div,.right a,.right span,.right input').css('opacity',0)
        });
    });
});