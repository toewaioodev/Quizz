<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\AblyService;

class AblyController extends Controller
{
    public function auth(Request $request, AblyService $ablyService)
    {
        $token = $ablyService->generateToken($request->user()->id);
        return response()->json($token);
    }
}
