jQuery(document).ready(function() {

    var Site = {
        init: function() {
            this.initEvents();
            this.setHeight();
            this.initWow();
        },
        initEvents: function() {
            $("a[href='#']").on('click', function(ev) {
                ev.preventDefault();
            });

            var menuopened = false;
            $(".menu-line").on("click", function() {
                $("#menu-ul").slideToggle();
                if (!menuopened) {
                    $('body').addClass("open");
                    menuopened = true;
                } else {
                    $('body').removeClass("open");
                    menuopened = false;
                }

            });

            $("#menu-ul a").on("click", function() {
                if ($(".menu-line").is(":visible")) {
                    $("#menu-ul").slideToggle();
                }
                $('body').removeClass("open");
            });
        },
        setHeight: function() {
            var windowHeight = $(window).height();
            var windowWidth = $(window).width();
            var headerHeight = $('#header').outerHeight();
            var footerHeight = $('#footer').outerHeight();

            $('#section-head').css('padding-top', $("#header").outerHeight());
            if (!$(".menu-line").is(":visible")) {
                $("#menu-ul").show();
                $('body').removeClass("open");
            } else {
                $("#menu-ul").hide();
            }
        },
        initWow: function() {
            var wow = new WOW({
                boxClass: 'wow',
                animateClass: 'animated',
                offset: 0,
                mobile: true,
                live: true,
                scrollContainer: null
            });
            wow.init();
        },
        checkScroll: function() {
            if ($(window).scrollTop() >= 50) {
                $('body').addClass('menu-bg');
            } else {
                $('body').removeClass('menu-bg');
            }
        }
    }




    Site.init();

    $(window).on('resize', function() {
        Site.setHeight();
    });

    var scrollTimer = null;
    $(window).scroll(function() {
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(Site.checkScroll, 100);
    });

});
