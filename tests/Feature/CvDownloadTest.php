<?php

use Illuminate\Testing\TestResponse;

it('downloads the CV as a PDF', function (): void {
    /** @var TestResponse $response */
    $response = $this->get('/cv/download');

    $response->assertOk();
    $response->assertHeader('Content-Type', 'application/pdf');
    $response->assertHeader('Content-Disposition');
    expect($response->headers->get('Content-Disposition'))
        ->toContain('raul-sebastian-cv.pdf');
});
