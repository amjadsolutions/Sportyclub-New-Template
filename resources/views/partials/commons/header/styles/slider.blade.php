    {{-- begin::styles of slider --}}
    <script src="{{ asset('design/js/jquery.bxslider.min.js') }}" type="text/javascript"></script>
    <link rel="stylesheet" href="{{ asset('css/owl-carousel/owl.carousel.min.css') }}">
    <link rel="stylesheet" href="{{ asset('css/owl-carousel/owl.theme.default.min.css') }}">
    <link rel="stylesheet" href="{{ asset('css/index/index.minb50d.css') }}" />
    <link rel="stylesheet" href="{{ asset('css/index/index-responsive.minb99f.css') }}" />


    <script src="{{asset('js/jquery.min.js')}}"></script>
    <script src="{{asset('js/bootstrap.min.js')}}"></script>

    <style>
        .carousel-control.left,
        .carousel-control.right {
            background-image: none;
        }

        .img-responsive {
            width: 50px;
            height: 50px;
        }

        @media (min-width: 992px) {
            .carousel-inner .active.left {
                left: -25%;
            }

            .carousel-inner .next {
                left: 25%;
            }

            .carousel-inner .prev {
                left: -25%;
            }
        }

        @media (min-width: 768px) and (max-width: 991px) {
            .carousel-inner .active.left {
                left: -33.3%;
            }

            .carousel-inner .next {
                left: 33.3%;
            }

            .carousel-inner .prev {
                left: -33.3%;
            }

            .active>div:first-child {
                display: block;
            }

            .active>div:first-child+div {
                display: block;
            }

            .active>div:last-child {
                display: none;
            }
        }

        @media (max-width: 767px) {
            .carousel-inner .active.left {
                left: -100%;
            }

            .carousel-inner .next {
                left: 100%;
            }

            .carousel-inner .prev {
                left: -100%;
            }

            .active>div {
                display: none;
            }

            .active>div:first-child {
                display: block;
            }
        }

        /* Custom, iPhone Retina */
        @media only screen and (min-width: 320px) {
            .mobile-version {
                display: block;
            }

            .desktop-version {
                display: none;
            }
        }

        /* Extra Small Devices, Phones */
        @media only screen and (min-width: 480px) {
            .mobile-version {
                display: block;
            }

            .desktop-version {
                display: none;
            }
        }

        /* Small Devices, Tablets */
        @media only screen and (min-width: 768px) {
            .mobile-version {
                display: none;
            }

            .desktop-version {
                display: block;
            }
        }

        /* Medium Devices, Desktops */
        @media only screen and (min-width: 992px) {
            .mobile-version {
                display: none;
            }

            .desktop-version {
                display: block;
            }
        }

        /* Large Devices, Wide Screens */
        @media only screen and (min-width: 1200px) {
            .mobile-version {
                display: none;
            }

            .desktop-version {
                display: block;
            }
        }
    </style>
    {{-- end::styles of slider --}}
    {{-- end::styles of landing page --}}

    <script>
        $(document).ready(function() {
            $('.owl-carousel').owlCarousel({
                loop: true,
                responsiveClass: true,

                responsive: {
                    0: {
                        items: 2,
                        autoPlay: false,
                    },
                    600: {
                        items: 5,
                        autoPlay: false,
                    },
                    1000: {
                        items: 8,
                        loop: true,
                        autoPlay: true,
                        autoplay: true,
                        autoPlaySpeed: 5000,
                        autoPlayTimeout: 5000,
                        autoplayHoverPause: true,
                    }
                }
            });
            jQuery('.carousel[data-type="multi"] .item').each(function() {
                var next = jQuery(this).next();
                if (!next.length) {
                    next = jQuery(this).siblings(':first');
                }
                next.children(':first-child').clone().appendTo(jQuery(this));

                for (var i = 0; i < 2; i++) {
                    next = next.next();
                    if (!next.length) {
                        next = jQuery(this).siblings(':first');
                    }
                    next.children(':first-child').clone().appendTo($(this));
                }
            });
        });
    </script>