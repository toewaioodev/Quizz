<?php

use Illuminate\Support\Facades\Redis;

require __DIR__.'/vendor/autoload.php';

$app = require_once __DIR__.'/bootstrap/app.php';

$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

try {
    $matches = Redis::zrange('pending_matches_elo', 0, -1, ['withscores' => true]);
    echo "Current pending_matches_elo (with scores):\n";
    print_r($matches);
    
    $count = Redis::zcard('pending_matches_elo');
    echo "Total count: $count\n";

} catch (\Exception $e) {
    echo "Error: " . $e->getMessage() . "\n";
}
