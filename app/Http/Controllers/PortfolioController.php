<?php

namespace App\Http\Controllers;

use App\Repositories\ProjectRepository;
use Illuminate\Contracts\Support\Responsable;
use Illuminate\Http\Response;
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
            'projectsBatchSize' => config('portfolio.projects_batch_size'),
        ]);
    }

    public function cv(): InertiaResponse
    {
        return Inertia::render('Cv');
    }

    public function previewCv(): Response
    {
        $lang = in_array(request('lang'), ['es', 'en']) ? request('lang') : 'es';

        return response()->view('pdf.cv', ['lang' => $lang]);
    }

    public function downloadCv(): Responsable
    {
        $lang = in_array(request('lang'), ['es', 'en']) ? request('lang') : 'es';

        return Pdf::view('pdf.cv', ['lang' => $lang])
            ->format('a4')
            ->name('raul-sebastian-cv.pdf')
            ->download();
    }
}
