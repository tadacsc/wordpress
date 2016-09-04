(function($) {
		    $(function() {
		        var $header = $('.navigation-bar');
		        // Nav Fixed
		        $(window).scroll(function() {
		            if ($(window).scrollTop() > 350) {
		                $header.addClass('fixed');
		            } else {
		                $header.removeClass('fixed');
		            }
		        });
		        // Nav Toggle Button
		        $('.nav-toggle').click(function(){
		        	console.log("ass");
		            $header.toggleClass('open');
		        });
		    });
		})(jQuery);