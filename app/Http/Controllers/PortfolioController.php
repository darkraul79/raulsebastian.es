<?php

namespace App\Http\Controllers;

use App\Repositories\ProjectRepository;
use Illuminate\Contracts\Support\Responsable;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;
use Spatie\LaravelPdf\Facades\Pdf;

class PortfolioController extends Controller
{
    public function __construct(private ProjectRepository $projects) {}

    public function index(): InertiaResponse
    {
        return Inertia::render('Home', [
            'projects' => $this->projects->all(),
        ]);
    }

    public function cv(): InertiaResponse
    {
        return Inertia::render('Cv');
    }

    public function downloadCv(): Responsable
    {
        return Pdf::view('pdf.cv')
            ->format('a4')
            ->name('raul-sebastian-cv.pdf')
            ->download();
    }
}
