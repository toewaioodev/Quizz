<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request)
    {
        return Inertia::render('Profile/Show', [
            'status' => session('status'),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(Request $request)
    {
        $request->validate([
            'settings' => 'nullable|array',
            'settings.difficulty' => 'nullable|string|in:easy,medium,hard',
        ]);

        $user = $request->user();
        
        if ($request->has('settings')) {
            $settings = $user->settings ?? [];
            $settings = array_merge($settings, $request->input('settings'));
            $user->settings = $settings;
        }

        $user->save();

        return Redirect::route('profile.edit')->with('status', 'profile-updated');
    }
}
