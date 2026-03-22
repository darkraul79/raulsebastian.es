<!DOCTYPE html>
<html lang="es" style="background:#070712">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Desarrollador Full-Stack especializado en Laravel, Vue y sistemas a medida.">
    <link rel="icon" type="image/x-icon" href="{{ asset('favicon.ico') }}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('images/icons/icon-32x32.png') }}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('images/icons/icon-16x16.png') }}">
    <style>
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(225,29,72,.3); border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(225,29,72,.6); }
        * { scrollbar-width: thin; scrollbar-color: rgba(225,29,72,.3) transparent; }
    </style>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    @inertiaHead
    <meta name="theme-color" content="#070712">
</head>
<body>
    <div class="retro-horizon" aria-hidden="true"></div>
    @inertia
</body>
</html>
