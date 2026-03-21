<?php

use Illuminate\Testing\TestResponse;

it('renders the CV preview as HTML', function (): void {
    /** @var TestResponse $response */
    $response = $this->get('/cv/preview');

    $response->assertOk();
    $response->assertHeader('Content-Type', 'text/html; charset=UTF-8');
    $response->assertSee('Raúl Sebastián');
});

it('renders the CV preview in English when lang=en', function (): void {
    /** @var TestResponse $response */
    $response = $this->get('/cv/preview?lang=en');

    $response->assertOk();
    $response->assertSee('Experience');
    $response->assertDontSee('Experiencia');
});
