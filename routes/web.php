<?php

use App\Http\Controllers\PortfolioController;
use Illuminate\Support\Facades\Route;

Route::get('/', [PortfolioController::class, 'index'])->name('home');
Route::get('/cv', [PortfolioController::class, 'cv'])->name('cv');

Route::middleware('throttle:20,1')->group(function () {
    Route::get('/cv/preview', [PortfolioController::class, 'previewCv'])->name('cv.preview');
    Route::get('/cv/download', [PortfolioController::class, 'downloadCv'])->name('cv.download');
});
