<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\admin\DashboardController;
use App\Http\Controllers\admin\ServiceController;
use App\Http\Controllers\admin\ProjectController;
use App\Http\Controllers\admin\ArticleController;
use App\Http\Controllers\admin\TestimonialController;
use App\Http\Controllers\admin\MemberController;
use App\Http\Controllers\front\ServiceController as FrontServiceController;
use App\Http\Controllers\front\ProjectController as FrontProjectController;
use App\Http\Controllers\front\ArticleController as FrontArticleController;
use App\Http\Controllers\front\TestimonialController as FrontTestimonialController;
use App\Http\Controllers\front\MemberController as FrontMemberController;
use App\Http\Controllers\admin\TempImageController;
use App\Http\Controllers\AuthenticationController;

Route::post('authenticate', [AuthenticationController::class, 'authenticate']);
Route::get('get-services', [FrontServiceController::class, 'index']);
Route::get('get-latest-services', [FrontServiceController::class, 'latestServices']);
Route::get('get-service/{id}', [FrontServiceController::class, 'service']);

Route::get('get-projects', [FrontProjectController::class, 'index']);
Route::get('get-latest-projects', [FrontProjectController::class, 'latestProjects']);
Route::get('get-project/{id}', [FrontProjectController::class, 'project']);

Route::get('get-articles', [FrontArticleController::class, 'index']);
Route::get('get-latest-articles', [FrontArticleController::class, 'latestArticles']);
Route::get('get-article/{id}', [FrontArticleController::class, 'article']);


Route::get('get-testimonials', [FrontTestimonialController::class, 'index']);

Route::get('get-members', [FrontMemberController::class, 'index']);



Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('dashboard', [DashboardController::class, 'index']);
    Route::post('logout', [AuthenticationController::class, 'logout']);

    // Service Routes
    Route::post('services', [ServiceController::class, 'store']);
    Route::get('services', [ServiceController::class, 'index']);
    Route::put('services/{id}', [ServiceController::class, 'update']);
    Route::get('services/{id}', [ServiceController::class, 'show']);
    Route::delete('services/{id}', [ServiceController::class, 'destroy']);

    // Project Routes
    Route::post('projects', [ProjectController::class, 'store']);
    Route::get('projects', [ProjectController::class, 'index']);
    Route::put('projects/{id}', [ProjectController::class, 'update']);
    Route::get('projects/{id}', [ProjectController::class, 'show']);
    Route::delete('projects/{id}', [ProjectController::class, 'destroy']);

    // Artcle Routes
    Route::post('articles', [ArticleController::class, 'store']);
    Route::get('articles', [ArticleController::class, 'index']);
    Route::get('articles/{id}', [ArticleController::class, 'show']);
    Route::put('articles/{id}', [ArticleController::class, 'update']);
    Route::delete('articles/{id}', [ArticleController::class, 'destroy']);

    // Testimonial Routes
    Route::post('testimonials', [TestimonialController::class, 'store']);
    Route::get('testimonials', [TestimonialController::class, 'index']);
    Route::get('testimonials/{id}', [TestimonialController::class, 'show']);
    Route::put('testimonials/{id}', [TestimonialController::class, 'update']);
    Route::delete('testimonials/{id}', [TestimonialController::class, 'destroy']);

    // Member Routes
    Route::post('members', [MemberController::class, 'store']);
    Route::get('members', [MemberController::class, 'index']);
    Route::get('members/{id}', [MemberController::class, 'show']);
    Route::put('members/{id}', [MemberController::class, 'update']);
    Route::delete('members/{id}', [MemberController::class, 'destroy']);


    // Temp Image Route
    Route::post('temp-images', [TempImageController::class, 'store']);

});