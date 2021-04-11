<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- <link rel="shortcut icon" href="assets/ico/favicon.png"> -->

    <title>Error 404 - Page Not Found</title>
    <meta name="description" content="Error 404 - Page Not Found">

    <!-- Main styles for this application -->
    <link href="{{ asset('public/assets/css/app.css') }}" rel="stylesheet">

    <!-- scripts -->
    <script>
        var API_BASE_URL = "{{ URL::to('/') }}";
    </script>
</head>

<body class="e-404">
    <div class="root">

        @include('app.includes.header')

        <main class="main">
            @yield('content')
        </main>

        @include('app.includes.footer')

    </div>

    <!-- Main scripts -->
    <script src="{{ asset('public/assets/js/app.js') }}"></script>

</body>

</html>
