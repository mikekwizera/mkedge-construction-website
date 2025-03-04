<?php

use App\Http\Controllers\admin\HomeController;
use App\Http\Controllers\AuthenticationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('authenticate', [AuthenticationController::class, 'authenticate' ]);


// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

Route::group(['middleware' => ['auth:sanctun']], function(){
    //Protected Routes
    Route::get('dashboard', [HomeController::class, 'index' ]);
    Route::get('logout', [AuthenticationController::class, 'logout' ]);
});