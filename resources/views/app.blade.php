<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        {{-- Social Media Meta Tags --}}
        <meta property="og:title" content="{{ $meta['title'] ?? 'Toewaioo - Real-time Quiz Battles' }}">
        <meta property="og:description" content="{{ $meta['description'] ?? 'Compete in real-time 1v1 quiz battles. Join the arena and test your knowledge!' }}">
        <meta property="og:image" content="{{ $meta['image'] ?? asset('images/og-image.jpg') }}">
        <meta property="og:url" content="{{ url()->current() }}">
        <meta property="og:type" content="website">

        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="{{ $meta['title'] ?? 'Toewaioo - Real-time Quiz Battles' }}">
        <meta name="twitter:description" content="{{ $meta['description'] ?? 'Compete in real-time 1v1 quiz battles. Join the arena and test your knowledge!' }}">
        <meta name="twitter:image" content="{{ $meta['image'] ?? asset('images/og-image.jpg') }}">

        <link rel="icon" href="/favicon.ico" sizes="any">
        <!-- <link rel="icon" href="/favicon.svg" type="image/svg+xml"> -->
        <link rel="apple-touch-icon" href="/apple-touch-icon.png">

        {{-- PWA Manifest & Meta --}}
        <link rel="manifest" href="/build/manifest.webmanifest">
        <meta name="theme-color" content="#020617">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
        <meta name="apple-mobile-web-app-title" content="Toewaioo">

        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />

        @viteReactRefresh
        @vite(['resources/js/app.tsx'])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
