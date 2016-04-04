$(document).ready(function(){

	$('#main-header').wrap("<div id=\"header-wrapper\"></div>");
	var headerHeight = $('#main-header').outerHeight();
		console.log(headerHeight);
	$('#header-wrapper').height(headerHeight);	

	$(window).resize(function(){
		var headerHeight = $('#main-header').outerHeight();
		$('#header-wrapper').height(headerHeight);		
	});	

	//$(".products-submenu").each(function(){
	//	$(this).append("<div class=\"enabled\"></div>");
	//});

	$(".products-submenu").wrap("<div class=\"menu-wrap col-md-3\">&nbsp;</div>");

	$(window).scroll(

		function(){
			var offset_top = 133;
			var win_top = $(window).scrollTop() + offset_top;

			//var nav_top = $(".products-section__overview").offset().top;
			
			$(".products-section").each(function(index){

				var menu_top = $(this).offset().top - win_top;

				console.log(index+ " :" + menu_top);

				// checking if the menu is placed visible part of the page
				
				var $menu = $(this).find('.products-submenu');

				$menu.data("enabled", "false"); // assigning a temporary variable to the selected menu

				if(menu_top > -100 && menu_top < 200) {
					$menu.data("enabled", "true");
				}
				else {			
					$menu.data("enabled", "false");					
				} 

				if($menu.data("enabled") == "true"){
					$menu.fadeIn(200);
				} else if($menu.data("enabled") == "false"){
					$menu.fadeOut(200);
				}

				//console.log(index+":"+$menu.data("enabled")+" "+$menu);
				//$menu.find(".enabled").html($menu.data("enabled"));

			});


			//if(win_top > nav_top) {
			//	$("#products-submenu").addClass('products-submenu-stick');
			//} else if(win_top < nav_top) {
			//	$("#products-submenu").removeClass('products-submenu-stick');
		}
			//}
	);

	//function resetLinks(){
	//	$(".products-submenu ul li a.selected").removeClass('selected');
		//$(".products-submenu").css('border', '1px solid red');
	//}
//

	 $(".products-submenu ul li a").click(function(evn){

	 	//resetLinks();
	 	
	 	//var targetId = $(this).attr('href');
	 	//console.log(targetId);
	 	//$(link).addClass('selected');

        evn.preventDefault();

        $('html,body').scrollTo(this.hash, {duration:800, interrupt:true, 
        	offset: {top:-100}, onAfter:function(){
        	//var current_menu = $(targetId).parent().parent().find('.products-submenu');
        	// deselecting the links
        	//$(current_menu).find("ul li a[href|='"+targetId+"']").addClass('selected');
        }});  

    });

});