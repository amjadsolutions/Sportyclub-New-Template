{{-- begin::landing page scripts --}}
<script src="{{asset('js/owl-carousel/owl-carousel.min.js')}}"></script>
<script>
    var routeName = 'home';
    var matchType = '';

    $('.owl-carousel.banner-header').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        margin: 10,
        autoplayHoverPause: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            }
        }
    });
</script>
