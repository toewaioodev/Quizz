<?php

namespace App\Services;

use Ably\AblyRest;
use Exception;

class AblyService
{
    protected $ably;

    public function __construct()
    {
        $key = config('services.ably.key');
        if (!$key) {
             // Fallback or log if key is missing, though strictly should be in .env
             // For now we assume the user will set ABLY_KEY in .env
        }
        $this->ably = new AblyRest($key);
    }

    public function generateToken($clientId)
    {
        return $this->ably->auth->requestToken(['clientId' => (string) $clientId]);
    }

    public function publish($channelName, $eventName, $data)
    {
        try {
            $channel = $this->ably->channels->get($channelName);
            $channel->publish($eventName, $data);
            return true;
        } catch (Exception $e) {
            \Illuminate\Support\Facades\Log::error("Ably Publish Error: " . $e->getMessage());
            return false;
        }
    }
}
