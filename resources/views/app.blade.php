<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"/>
    <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
    <title>Dashboard</title>
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
    <meta name="msapplication-TileColor" content="#206bc4"/>
    <meta name="theme-color" content="#206bc4"/>
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
    <meta name="apple-mobile-web-app-capable" content="yes"/>
    <meta name="mobile-web-app-capable" content="yes"/>
    <meta name="HandheldFriendly" content="True"/>
    <meta name="MobileOptimized" content="320"/>
    <meta name="robots" content="noindex,nofollow,noarchive"/>
    <link rel="icon" href="./favicon.ico" type="image/x-icon"/>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon"/>
    <!-- Libs CSS -->
    <link href='{{asset("assets/libs/jqvmap/dist/jqvmap.min.css?1582373134")}}' rel="stylesheet"/>
    <link href='{{asset("assets/libs/selectize/dist/css/selectize.css?1582373134")}}' rel="stylesheet"/>
    <link href='{{asset("assets/libs/fullcalendar/core/main.min.css?1582373134")}}' rel="stylesheet"/>
    <link href='{{asset("assets/libs/fullcalendar/daygrid/main.min.css?1582373134")}}' rel="stylesheet"/>
    <link href='{{asset("assets/libs/fullcalendar/timegrid/main.min.css?1582373134")}}' rel="stylesheet"/>
    <link href='{{asset("assets/libs/fullcalendar/list/main.min.css?1582373134")}}' rel="stylesheet"/>
    <link href='{{asset("assets/libs/flatpickr/dist/flatpickr.min.css?1582373134")}}' rel="stylesheet"/>
    <link href='{{asset("assets/libs/nouislider/distribute/nouislider.min.css?1582373134")}}' rel="stylesheet"/>
    <link href="https://api.mapbox.com/mapbox-gl-js/v1.8.0/mapbox-gl.css" rel="stylesheet"/>
    <!-- Tabler Core -->
    <link href='{{asset("assets/css/tabler.min.css?1582373134")}}' rel="stylesheet"/>
    <!-- Tabler Plugins -->
    <link href='{{asset("assets/css/tabler-flags.min.css?1582373134")}}' rel="stylesheet"/>
    <link href='{{asset("assets/css/tabler-payments.min.css?1582373134")}}' rel="stylesheet"/>
    <link href='{{asset("assets/css/tabler-buttons.min.css?1582373134")}}' rel="stylesheet"/>
    <link href='{{asset("assets/css/demo.min.css?1582373134")}}' rel="stylesheet"/>
    <link href='{{asset("assets/css/feather.css")}}' rel="stylesheet"/>
    <link href='{{asset("css/nprogress.css")}}' rel="stylesheet"/>    
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet" />
    
    @routes
  </head>
  <body class="">
    
      
      @inertia

      <footer class="footer footer-transparent">
        <div class="container">
          <div class="row text-center align-items-center justify-content-center flex-row-reverse">
            <div class="col-12 col-lg-auto mt-3 mt-lg-0">
              Copyright © 2020 | All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    
    <!-- Libs JS -->
    <script src='{{asset("assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js?1582373134")}}'></script>
    <script src='{{asset("assets/libs/jquery/dist/jquery.slim.min.js?1582373134")}}'></script>
    <script src='{{asset("assets/libs/apexcharts/dist/apexcharts.min.js?1582373134")}}'></script>
    <script src='{{asset("assets/libs/jqvmap/dist/jquery.vmap.min.js?1582373134")}}'></script>
    <script src='{{asset("assets/libs/jqvmap/dist/maps/jquery.vmap.world.js?1582373134")}}'></script>
    <script src='{{asset("assets/libs/jqvmap/dist/maps/jquery.vmap.usa.js?1582373134")}}'></script>
    <script src='{{asset("assets/libs/jqvmap/dist/maps/continents/jquery.vmap.europe.js?1582373134")}}'></script>
    <script src='{{asset("assets/libs/peity/jquery.peity.min.js?1582373134")}}'></script>
    <script src='{{asset("assets/libs/flatpickr/dist/flatpickr.min.js?1582373134")}}'></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootbox.js/5.4.0/bootbox.min.js"></script>
    <!-- Tabler Core -->
    <script src='{{asset("assets/js/tabler.min.js?1582373134")}}'></script>
    <script>
      window.token = document.head.querySelector('meta[name="csrf-token"]').content;
    </script>
    <script src="{{ mix('/js/app.js') }}" defer></script>
    
  </body>
</html>