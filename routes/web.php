<?php

use App\Http\Controllers\PortfolioController;
use Illuminate\Support\Facades\Route;

Route::get('/', [PortfolioController::class, 'index'])->name('home');
Route::get('/cv', [PortfolioController::class, 'cv'])->name('cv');

Route::middleware('throttle:20,1')->group(function () {
    Route::get('/cv/preview', [PortfolioController::class, 'previewCv'])->name('cv.preview');
    Route::get('/cv/download', [PortfolioController::class, 'downloadCv'])->name('cv.download');
});

Route::get('/proyectos/acip', function () {
    return redirect('/proyectos/ACIP/Presentacion-Cliente.html');
})->name('proyectos.acip');
Route::get('/proyectos/acipv3-2', function () {
    return redirect('/proyectos/ACIPv3-2/ACIP - Norm v3.html');
})->name('proyectos.acipv3');
Route::get('/proyectos/acipv4', function () {
    return redirect('/proyectos/ACIPv4/ACIP - Norm v4.html');
})->name('proyectos.acipv4');
