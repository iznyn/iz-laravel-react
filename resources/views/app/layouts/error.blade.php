<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- <link rel="shortcut icon" href="assets/ico/favicon.png"> -->

    <title>Error Server</title>
    <meta name="description" content="Error Server">

    <!-- Main styles for this application -->
    <link href="{{ asset('assets/css/app.css') }}" rel="stylesheet">

    <!-- scripts -->
    <script>
        var API_BASE_URL = "{{ URL::to('/') }}";
    </script>
</head>

<body class="error">
    <div class="root">

        @include('main.includes.header')

        <main class="main">
            @yield('content')
        </div>

        @include('main.includes.footer')

    </div>

    <!-- Main scripts -->
    <script src="{{ asset('assets/js/app.js') }}"></script>

</body>

</html>
