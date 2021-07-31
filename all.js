$(document).ready(function(){
	$(window).scroll(function(){
        //抓取滾動距離
        scrolledPx = $(this).scrollTop();
        // console.log(scrolledPx);//存取距離上方的值
        if(scrolledPx >= 200){//條件判斷
            $('.navbar').addClass('active');//加上active
        } else {
            $('.navbar').removeClass('active');//移除active
        }
       
	});
	
	//menu開關
	//當menu被按下
	$('.menu').click(function(){
		//如果有.open的class 就幫它移除
		if($('.navbar').hasClass('open')){
			$('.navbar').removeClass('open');
			$(this).attr('src','image/icon/menu_open.png');
		}else{
			//如果沒有，就幫它加上去
			$('.navbar').addClass('open');
			$(this).attr('src','image/icon/menu_close.png');
		}
		
	});

	// slide頁面滑動
	//當nav a被按下
	$('.nav a').click(function(){
		//變數idname是取出這個nav a的屬性 所以就可以抓到每個區塊的位置了
		var idname = $(this).attr('href');
		//變數targetTop是這個位置到上方的位置
		var targetTop = $(idname).position().top;
		//body往上捲出的距離，但不知道要捲多少所以先設變數targetTop 
		$('html,body').animate({scrollTop:targetTop},1000);
	});
	

    // masonry 插件 //
	$('.masonry-row').masonry({
    // options
  		itemSelector: '.masonry-col',
	});

	// isotope 插件 //
	var $allworks = $('.allworks').isotope({
  	// options
  		itemSelector: '.works',
  		layoutMode: 'masonry'
	});
	$(".filter button").on('click', function(){
		var value = $(this).attr("data-filter")
		$allworks.isotope({
			filter: value
		});
	})

	// change is-checked class on buttons
	$('.control-group').each( function( i, controlGroup ) {
	  var $controlGroup = $( controlGroup );
	  $controlGroup.on( 'click', 'button', function() {
	    $controlGroup.find('.is-checked').removeClass('is-checked');
	    $( this ).addClass('is-checked');
	  });
	});

	//wow滾動插件
	new WOW().init();
	wow = new WOW({
        boxClass:     'wow',      // default
        animateClass: 'animate', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
    }
    );
	wow.init();
	
	
	// $('.control-group .btn.btn-2').click(function(){
	// 	var selector = $(this).attr("data-filter");
	// 	$('all-works').isotope({
	// 		filter: selector
	// 	});
	// 	return false
	// });

	
	// //lightbox2
	// lightbox.option({
  //     'resizeDuration': 200,
  //     'wrapAround': true
	// 	});
		
	// // 照片輪播
	// $('.slider').bxSlider({
	// 	mode: 'fade',
	// 	captions: false,
	// 	slideWidth: 750,
	// 	auto: true,
	// });

	
});