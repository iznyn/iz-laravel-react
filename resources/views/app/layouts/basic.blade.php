<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- <link rel="shortcut icon" href="assets/ico/favicon.png"> -->

    <title>{{ $siteTitle }}</title>
    <meta name="description" content="{{ $siteDesc }}">

    <!-- Main styles for this application -->
    <link href="{{ asset('public/css/app.css').'?v=0.0.1' }}" rel="stylesheet">

    <!--call google font-->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">

    <!--favicon-->
    <link rel="shortcut icon" type="image/png" href="{{ asset('public/images/favicon.ico') }}"/>


    <!-- scripts -->
    <script>
        var API_BASE_URL = "{{ URL::to('/') }}/api/";
        var ASSETS_BASE_URL = "{{ asset('public') }}/";
        var IMG_BASE_URL = "{{ asset('public/images') }}/";

        @if (Auth::user())
            var IS_LOGIN = true;
            var USER_ID = {{ Auth::user()->id }};
        @else
            var IS_LOGIN = false;
            var USER_ID = 0;
        @endif
    </script>

    @if (app()->environment('production'))
        <!-- Global site tag (gtag.js) - Google Analytics -->
        <!-- <script async src="https://www.googletagmanager.com/gtag/js?id=UA-177858342-1"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-177858342-1');
        </script> -->
    @endif
</head>

<body class="{{ $bodyClass }}">
    <div class="root">
        <!-- header -->
        @include('app.includes.header')

        <!-- main -->
        <main class="main">
            @yield('content')
        </main>

        <!-- footer -->
        @include('app.includes.footer')
    </div>

    <!-- Main scripts -->
    <script src="{{ asset('public/js/app.js').'?v=0.0.1' }}"></script>

</body>

</html>
