<?php

use Illuminate\Testing\TestResponse;

it('returns 200 on the home route', function (): void {
    /** @var TestResponse $response */
    $response = $this->get('/');

    $response->assertOk();
});

it('renders the Inertia Home component', function (): void {
    /** @var TestResponse $response */
    $response = $this->get('/');

    $response->assertInertia(fn ($page) => $page->component('Home'));
});

it('passes a projects array as an Inertia prop', function (): void {
    /** @var TestResponse $response */
    $response = $this->get('/');

    $response->assertInertia(
        fn ($page) => $page
            ->component('Home')
            ->has('projects')
            ->where('projects', fn ($projects) => is_array($projects->toArray()))
    );
});
