// JavaScript Document
function quick_search(){
	/* Quik search in header on click function */
	var quikSearch = jQuery("#quik-search-btn");
	var quikSearchRemove = jQuery("#quik-search-remove");
	
	quikSearch.on('click',function() {
		jQuery('.rdx-quik-search').animate({'width': '100%' });
		jQuery('.rdx-quik-search').delay(500).css({'left': '0'  });
    });
    
	quikSearchRemove.on('click',function() {
        jQuery('.rdx-quik-search').animate({'width': '0%' ,  'right': '0'  });
		jQuery('.rdx-quik-search').css({'left': 'auto'  });
    });	
	/* Quik search in header on click function End*/
}

function magnific_popup()
{
	/* magnificPopup function */
    jQuery('.mfp-gallery').magnificPopup({
		delegate: '.mfp-link',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
    });
	/* magnificPopup function end */
	
	/* magnificPopup for paly video function */		
	jQuery('.video').magnificPopup({
		type: 'iframe',
		iframe: {
			markup: '<div class="mfp-iframe-scaler">'+
					 '<div class="mfp-close"></div>'+
					 '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
					 '<div class="mfp-title">Some caption</div>'+
			  		 '</div>'
		},
		callbacks: {
			markupParse: function(template, values, item) {
				values.title = item.el.attr('title');
			}
		}
	});
	/* magnificPopup for paly video function end*/
	
}

function scroll_top(){
	'use strict';
	var scrollTop = jQuery("button.scroltop");
	/* page scroll top on click function */	
    scrollTop.on('click',function() {
		jQuery("html, body").animate({
            scrollTop: 0
        }, 1000);
        return false;
    })

	jQuery(window).bind("scroll", function() {
		var scroll = jQuery(window).scrollTop();
        if (scroll > 900) {
            jQuery("button.scroltop").fadeIn(1000);
        } else {
            jQuery("button.scroltop").fadeOut(1000);
        }
    });
	/* page scroll top on click function end*/
}

/* accordian open close icon change */	 	
function toggleChevron(e) {
	jQuery(e.target)
		 .prev('.panel-heading')
		 .find("i.indicator")
		 .toggleClass('glyphicon-minus glyphicon-plus');
}

function accordian_icon()
{
	/* accodin open close icon change */	 	
	jQuery('#accordion').on('hidden.bs.collapse', toggleChevron);
	jQuery('#accordion').on('shown.bs.collapse', toggleChevron);
	/* accodin open close icon change end */
}
/* accodin open close icon change end*/	 	

/* Input Placeholder  */
function placeholderSupport()
{
	/* input placeholder for ie9 & ie8 & ie7 */
    jQuery.support.placeholder = ('placeholder' in document.createElement('input'));
	/* input placeholder for ie9 & ie8 & ie7 end*/
	
	/*fix for IE7 and IE8  */
	if (!jQuery.support.placeholder) {
		jQuery("[placeholder]").focus(function () {
			if (jQuery(this).val() == jQuery(this).attr("placeholder")) jQuery(this).val("");
		}).blur(function () {
			if (jQuery(this).val() == "") jQuery(this).val(jQuery(this).attr("placeholder"));
		}).blur();

		jQuery("[placeholder]").parents("form").submit(function () {
			jQuery(this).find('[placeholder]').each(function() {
				if (jQuery(this).val() == jQuery(this).attr("placeholder")) {
					 jQuery(this).val("");
				}
			});
		});
	}
	/*fix for IE7 and IE8 end */
}
/* Input Placeholder End */
	 
/* equal height box */	 
function equalheight(container) {

	var currentTallest = 0, 
		currentRowStart = 0, 
		rowDivs = new Array(), 
		$el, topPosition = 0;
		
	$(container).each(function() {
		$el = $(this);
		$($el).height('auto')
		topPostion = $el.position().top;

		if (currentRowStart != topPostion) {
			for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
				rowDivs[currentDiv].height(currentTallest);
			}
			rowDivs.length = 0; // empty the array
			currentRowStart = topPostion;
			currentTallest = $el.height();
			rowDivs.push($el);
		} else {
			rowDivs.push($el);
			currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
		}
		for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
			rowDivs[currentDiv].height(currentTallest);
		}
	});
}
/* equal height box */

/* footer fixed bottom function custom */	
function footerAlign() {
  jQuery('.site-footer').css('display', 'block');
  jQuery('.site-footer').css('height', 'auto');
  var footerHeight = jQuery('.site-footer').outerHeight();
  jQuery('.footer-fixed > .page-wraper').css('padding-bottom', footerHeight);
  jQuery('.site-footer').css('height', footerHeight);
}
/* footer fixed bottom function custom end */

/* Vertically center Bootstrap 3 modals so they aren't always stuck at the top function custom */
function reposition() {
	var modal = jQuery(this),
	dialog = modal.find('.modal-dialog');
	modal.css('display', 'block');
	
	/* Dividing by two centers the modal exactly, but dividing by three 
	 or four works better for larger screens.  */
	dialog.css("margin-top", Math.max(0, (jQuery(window).height() - dialog.height()) / 2));
}
/* Vertically center Bootstrap 3 modals so they aren't always stuck at the top function custom end*/

function appoinmentForm()
{
	'use strict';
	jQuery("#appointment_form").submit(function(e)
	{
		jQuery('#show_appoinment_msg').show();
		jQuery('#show_appoinment_msg').html('<div class="gen alert alert-success">Submiting..</div>');
		var appoinment_firstname = $('#appoinment_firstname').val();
		var appoinment_lastname = $('#appoinment_lastname').val();
		var appoinment_date = $('#appoinment_date').val();
		var appoinment_service = $('#appoinment_service').val();
		var appoinment_detail= $('#appoinment_detail').val();
		var todo = jQuery('#todo').val();
		var formURL = jQuery(this).attr("action");
		var data = {
			appoinment_firstname:appoinment_firstname,
			appoinment_lastname:appoinment_lastname,
			appoinment_date:appoinment_date,
			appoinment_service:appoinment_service,
			appoinment_detail:appoinment_detail,
			todo:todo,
		}
		jQuery.ajax(
		{
			url : formURL,
			type: "POST",
			data : data,
			success: function (res) {
					if(res=='1'){
						jQuery('#show_appoinment_msg').html('<div class="gen alert alert-success">Thank you very much, We will notify you when we launch.</div>');
					}
					if(res=='99'){
						jQuery('#show_appoinment_msg').html('<div class="err alert alert-danger">Please enter a valid email address</div>');
					}
				}
		});
		e.preventDefault();	//STOP default action
	});	
}



function file_input()
{
	/* Input type file jQuery */	 	 
	jQuery(document).on('change', '.btn-file :file', function() {
		var input = jQuery(this);
		var	numFiles = input.get(0).files ? input.get(0).files.length : 1;
		var	label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
		input.trigger('fileselect', [numFiles, label]);
	});
	
	jQuery('.btn-file :file').on('fileselect', function(event, numFiles, label) {
		input = jQuery(this).parents('.input-group').find(':text');
		var log = numFiles > 10 ? numFiles + ' files selected' : label;
	
		if (input.length) {
			input.val(log);
		} else {
			if (log) alert(log);
		}
	});
	/* Input type file jQuery end*/
	
}

function header_fix()
{
	/* Main navigation fixed on top  when scroll down function custom */	
	if(jQuery('.sticky-header').length)	
	{
		jQuery(window).bind('scroll', function () {
			var menu = jQuery('.sticky-header');
			if ($(window).scrollTop() > menu.offset().top) {
				menu.addClass('is-fixed');
			} else {
				menu.removeClass('is-fixed');
			}
		});
		
		
	}
	
	/* Main navigation fixed on top  when scroll down function custom end*/
	
}

function masonryBox()
{
	/* masonry by  = bootstrap-select.min.js */ 
	var self = $("#masonry");
	self.imagesLoaded(function () {
		self.masonry({
			gutterWidth: 15,
			isAnimated: true,
			itemSelector: ".card-container"
		});
	});

	jQuery(".filters").on('click','li',function(e) {
		e.preventDefault();
		var filter = $(this).attr("data-filter");
		self.masonryFilter({
			filter: function () {
				if (!filter) return true;
				return $(this).attr("data-filter") == filter;
			}
		});
	});
	/* masonry by  = bootstrap-select.min.js end */
}

function setDivHeight()
{	
	var allHeights = [];
	jQuery('.dzseth div').each(function(e){
		allHeights.push(jQuery(this).height());
	})

	jQuery('.dzseth div').each(function(e){
		maxHeight = Math.max.apply(Math,allHeights);
		jQuery(this).css('height',maxHeight);
	})
	var allHeights = [];
	/* Removice */
	screenWidth = $( window ).width();
	if(screenWidth < 991)
	{
		jQuery('.dzseth div').each(function(e){
			jQuery(this).css('height','');
		})
	}	
}	

/* For Home Page 8-9 */
function onePageLayout(){
	
	// Add scrollspy to <body>
	$('body').scrollspy({target: ".navbar", offset: 50});   
	// Add smooth scrolling on all links inside the navbar
	$("#myNavbar a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
	if (this.hash !== "") {
		// Prevent default anchor click behavior
		event.preventDefault();

		// Store hash
		var hash = this.hash;
		// Using jQuery's animate() method to add smooth page scroll
		// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		$('html, body').animate({
		scrollTop: $(hash).offset().top
		}, 800, function(){
		// Add hash (#) to URL when done scrolling (default click behavior)
		window.location.hash = hash;
		});
	}  // End if
  });
}

function openNav() {
    document.getElementById("mySidenav").style.width = "280px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
/* For Home Page 8-9 */

/* counterUp one function by = counterup-min.js */
function counter(){
	jQuery('.counter').counterUp({
		delay: 10,
		time: 1000
	});
}

// function([string1, string2],target id,[color1,color2])
    function dezText(words, id) {
		'use strict';
        var visible = true;
        var letterCount = 1;
        var x = 1;
        var waiting = false;
        var target = document.getElementById(id);
        window.setInterval(function() {

            if (letterCount === 0 && waiting === false) {
                waiting = true;
                target.innerHTML = words[0].substring(0, letterCount);
                window.setTimeout(function() {
                    var usedWord = words.shift();
                    words.push(usedWord);
                    x = 1;
                    letterCount += x;
                    waiting = false;
                }, 500)
            } else if (letterCount === words[0].length + 1 && waiting === false) {
                waiting = true;
                window.setTimeout(function() {
                    x = -1;
                    letterCount += x;
                    waiting = false;
                }, 1000)
            } else if (waiting === false) {
                target.innerHTML = words[0].substring(0, letterCount);
                letterCount += x;
            }
        }, 70)
    }

/*################	End OF Function List ###################################*/
	
/* Document.ready Start */	

jQuery(document).ready(function() {
    'use strict';
	
	onePageLayout();
	
	setDivHeight();
	
	quick_search();
	
	magnific_popup();
		
		
	header_fix();

	scroll_top();
	
	accordian_icon();
	
	file_input();	
	
	footerAlign();

	placeholderSupport();

	appoinmentForm();

	counter();
	
	jQuery('.tp-bgimg').after("<div class='overlay-row'></div>");
	
	/* Video responsive function */	
	jQuery('iframe[src*="youtube.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
	jQuery('iframe[src*="vimeo.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');	
	/* Video responsive function end*/  
	  
	/* gallery filter activation = jquery.mixitup.min.js */ 
	if (jQuery('#image-gallery-mix').length) {
		jQuery('.gallery-filter').find('li').each(function () {
			$(this).addClass('filter');
		});
		jQuery('#image-gallery-mix').mixItUp();
	};
	if(jQuery('.gallery-filter.masonary').length){
		jQuery('.gallery-filter.masonary').on('click','span', function(){
			var selector = $(this).parent().attr('data-filter');
			jQuery('.gallery-filter.masonary span').parent().removeClass('active');
			jQuery(this).parent().addClass('active');
			jQuery('#image-gallery-isotope').isotope({ filter: selector });
			return false;
		});
	}
	/* gallery filter activation = jquery.mixitup.min.js */

	
	/* Reposition when a modal is shown */
	jQuery('.modal').on('show.bs.modal', reposition);
	/* Reposition when the window is resized */
	jQuery(window).on('resize', function() {
		jQuery('.modal:visible').each(reposition);
	
		equalheight('.equal-wraper .equal-col');
		footerAlign();
	});
	/* Reposition when a modal is shown end*/
	if(jQuery('#text').length)
	{
		dezText(['We Are Coming Soon', 'We Are Coming Soon'], "text");		
	}	

});
/* Document.ready END */



/* Window Load START */
jQuery(window).load(function () {
	'use strict'; 
	
	masonryBox();
	
	/* Bootstrap Select box function by  = bootstrap-select.min.js */ 
	jQuery('select').selectpicker();
	/* Bootstrap Select box function by  = bootstrap-select.min.js end*/
	
	
	/* TouchSpin box function by  = jquery.bootstrap-touchspin.js */ 
	jQuery("input[name='demo_vertical2']").TouchSpin({
      verticalbuttons: true,
      verticalupclass: 'glyphicon glyphicon-plus',
      verticaldownclass: 'glyphicon glyphicon-minus'
    });
	/* TouchSpin box function by  = jquery.bootstrap-touchspin.js end*/
	
	equalheight('.equal-wraper .equal-col');
	
});
/*  Window Load END */

// box height match window height according function custom=================================== //	

	function setHeight() {
		windowHeight = jQuery(window).innerHeight();
		jQuery('.content-admin-wraper , .aon-custo-map-iner , .full-screen-content').css('min-height', windowHeight);
	};
	setHeight();
	
	jQuery(document).ready(function(){
	  setHeight();
	});
	
	jQuery(window).resize(function() {
		setHeight();
	});
	
/* Loading */
	jQuery(window).load(function() {
		setTimeout(function(){
			jQuery('#loading-area').remove();
		}, 0);
	});
/* Loading End */

