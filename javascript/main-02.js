(function(){


	//menu design and functionality
	$('.left-menu > ul > li').addClass('menuItem');
	$('.left-menu ul ul li a').prepend('<i class="fa fa-chevron-right" aria-hidden="true"></i>');
	$('.left-menu ul ul').hide();
	$('.left-menu > ul > li > a').click(function() {
		$(this).parent().siblings().removeClass('open');
		$(this).parent().toggleClass('open');
		$(this).parent().siblings().children('ul').slideUp(300);
		$(this).parent().children('ul').slideToggle(300);
	});
	$('.left-menu ul ul').parent().addClass('has-children');


	//menu click events
	var menuItemAr = $('.left-menu > ul > li');
	for (var i = 0; i < menuItemAr.length; ++i) {
		var item = menuItemAr[i],
		    subItemAr = $(menuItemAr[i]).children('ul').children('li');

		for (var j = 0; j < subItemAr.length; j++) {
			var subItem = subItemAr[j];
			subItem.addEventListener("click", (function(i,j){
				return function(){
					clickedItem(i,j);
				}
			})(i,j));
		}
	}


	//right section content function
	function clickedItem(i,j){
		//...write code for feching data from database here
		console.log(i,j);
		document.getElementById("test").innerHTML = 'item ' + i + ', subItem ' + j;
	}
})();