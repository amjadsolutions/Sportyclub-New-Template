<html lang="en">

<head>
    <style>
        .blink_me {
            animation: blinker 1s linear infinite;
        }

        @keyframes blinker {
            100% {
                opacity: 0;
                color: red
            }
        }

        /* Custom, iPhone Retina */
        @media only screen and (min-width: 320px) {
            .desktop-version {
                display: none;
            }
        }

        /* Extra Small Devices, Phones */
        @media only screen and (min-width: 480px) {
            .desktop-version {
                display: none;
            }
        }
    </style>
        <!-- Google Tag Manager -->
        <script>
            (function(w, d, s, l, i) {
                w[l] = w[l] || [];
                w[l].push({
                    'gtm.start': new Date().getTime(),
                    event: 'gtm.js'
                });
                var f = d.getElementsByTagName(s)[0],
                    j = d.createElement(s),
                    dl = l != 'dataLayer' ? '&l=' + l : '';
                j.async = true;
                j.src =
                    'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
                f.parentNode.insertBefore(j, f);
            })(window, document, 'script', 'dataLayer', 'GTM-W6QSS5CP');
        </script>
        <!-- End Google Tag Manager -->
    
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-S3FGXBLQYP"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
    
            function gtag() {
                dataLayer.push(arguments);
            }
            gtag('js', new Date());
    
            gtag('config', 'G-S3FGXBLQYP');
        </script>
        {{-- Business Verification --}}
        <meta name="facebook-domain-verification" content="t0cfz3neokmxvvbbxqaz4s87tpu88e" />
         {{-- google adsense code --}}
    <meta name="google-adsense-account" content="ca-pub-2329470303526565">
    {{-- begin::meta --}}
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-title" content="Sportyclub Live">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="viewport" content="width=device-width, user-scalable=no">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="robots" content="index, follow">
    <meta name="googlebot" content="index,follow">
    <meta property="og:site_name" content="Sportyclub Live">
    <meta name="theme-color" content="#03a9f4">
    {{-- end::meta --}}
    {{-- begin::favicon --}}
    <link rel="apple-touch-icon" sizes="57x57" href="{{ asset('img/favicons/apple-icon-57x57.png') }}">
    <link rel="apple-touch-icon" sizes="60x60" href="{{ asset('img/favicons/apple-icon-60x60.png') }}">
    <link rel="apple-touch-icon" sizes="72x72" href="{{ asset('img/favicons/apple-icon-72x72.png') }}">
    <link rel="apple-touch-icon" sizes="76x76" href=" {{ asset('img/favicons/apple-icon-76x76.png') }}">
    <link rel="apple-touch-icon" sizes="114x114" href="{{ asset('img/favicons/apple-icon-114x114.png') }}">
    <link rel="apple-touch-icon" sizes="120x120" href="{{ asset('img/favicons/apple-icon-120x120.png') }}">
    <link rel="apple-touch-icon" sizes="144x144" href="{{ asset('img/favicons/apple-icon-144x144.png') }}">
    <link rel="apple-touch-icon" sizes="152x152" href="{{ asset('img/favicons/apple-icon-152x152.png') }}">
    <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('img/favicons/apple-icon-180x180.png') }}">
    <link rel="icon" type="image/png" sizes="192x192" href="{{ asset('img/favicons/android-icon-192x192.png') }}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('img/favicons/favicon-32x32.png') }}">
    <link rel="icon" type="image/png" sizes="96x96" href="{{ asset('img/favicons/favicon-96x96.png') }}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('img/favicons/favicon-16x16.png') }}">
    <link rel="manifest" href="{{ asset('img/favicons/manifest.json') }}">
    <meta name="msapplication-TileColor" content=" {{ asset('img/favicons/#ffffff') }}">
    <meta name="msapplication-TileImage" content="{{ asset('img/favicons/ms-icon-144x144.png') }}">
    <meta name="theme-color" content="{{ asset('img/favicons/#ffffff') }}">
    {{-- end::favicon --}}
    {{-- imported page styles --}}
    @yield('page-styles')
    {{-- begin:: styles --}}
    <link href="{{ asset('newTemplate/css/bootstrap.min.css') }}?v=<?= time() ?>" rel="stylesheet">
    <link rel="stylesheet" type="text/css"
        href="{{ asset('newTemplate/css/font-awsome-all.min.css') }}?v=<?= time() ?>">
    <link href="{{ asset('newTemplate/css/all.min.css') }}?v=<?= time() ?>" rel="stylesheet">
    <link href="{{ asset('newTemplate/css/style.css') }}?v=<?= time() ?>" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('newTemplate/css/owl.carousel.min.css') }}?v=<?= time() ?>">
    <link rel="stylesheet" href="{{ asset('newTemplate/css/owl.theme.default.min.css') }}?v=<?= time() ?>">
    <link rel="stylesheet" href="{{ asset('newTemplate/css/jquery.dataTables.min.css') }}?v=<?= time() ?>">
    <link rel="stylesheet" type="text/css"
        href="{{ asset('newTemplate/css/jquery.fancybox.min.css') }}?v=<?= time() ?>">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
    {{-- end::styles --}}

</head>

<body data-aos-easing="ease" data-aos-duration="800" data-aos-delay="0" id="app">
      <!-- Google Tag Manager (noscript) -->
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W6QSS5CP" height="0" width="0"
        style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
    {{-- imported header --}}
    @include('partials.commons.header.header')
    <br>
    <br>
    {{-- imported top header hot news --}}
    <section class="body-part-total float-start w-100">
        {{-- imported hot news --}}
        @include('category.cricket.news.hot-news')
        @yield('content')
    </section>
    {{-- begin::scripts --}}
    <script src="{{ asset('newTemplate/js/bootstrap.bundle.min.js') }}?v=<?= time() ?>"></script>
    <script src="{{ asset('newTemplate/js/jquery.min.js') }}?v=<?= time() ?>"></script>
    <script src="{{ asset('newTemplate/js/custom.js') }}?v=<?= time() ?>"></script>
    <script src="{{ asset('newTemplate/js/aos.js') }}?v=<?= time() ?>"></script>
    <script src="{{ asset('newTemplate/js/owl.carousel.min.js') }}?v=<?= time() ?>"></script>
    <script src="{{ asset('newTemplate/js/jquery.dataTables.min.js') }}?v=<?= time() ?>"></script>
    <script src="{{ asset('newTemplate/js/jquery.fancybox.min.js') }}?v=<?= time() ?>"></script>
    <script src="{{ asset('frontend/js/core.min.js') }}?v=<?= time() ?>"></script>
    <script src="{{ asset('frontend/js/script.js') }}?v=<?= time() ?>"></script>
    <script src="{{ asset('js/app.js') }}?v=<?= time() ?> "></script>
    <script src="{{ asset('js/owl-carousel/owl-carousel.min.js') }}?v=<?= time() ?>"></script>
    {{-- end::scripts --}}
</body>

</html>
