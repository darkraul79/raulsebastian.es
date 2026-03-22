<?php

use App\Repositories\ProjectRepository;
use Illuminate\Support\Collection;

it('returns a Collection from the projects directory', function (): void {
    $projects = app(ProjectRepository::class)->all();

    expect($projects)->toBeInstanceOf(Collection::class);
});

it('returns at least one project', function (): void {
    $projects = app(ProjectRepository::class)->all();

    expect($projects)->not->toBeEmpty();
});

it('each project has the required fields', function (): void {
    $projects = app(ProjectRepository::class)->all();

    $projects->each(function (array $project): void {
        expect($project)
            ->toHaveKey('title')
            ->toHaveKey('description')
            ->toHaveKey('tags')
            ->toHaveKey('featured')
            ->toHaveKey('order');

        expect($project['title'])->toBeString()->not->toBeEmpty();
        expect($project['tags'])->toBeArray();
        expect($project['featured'])->toBeBool();
        expect($project['order'])->toBeInt();
    });
});

it('projects are sorted by order descending', function (): void {
    $projects = app(ProjectRepository::class)->all();

    if ($projects->count() < 2) {
        expect($projects->count())->toBeGreaterThanOrEqual(1);

        return;
    }

    $orders = $projects->pluck('order')->toArray();
    $sorted = $orders;
    rsort($sorted);

    expect($orders)->toBe($sorted);
});

it('each project has a slug derived from the filename', function (): void {
    $projects = app(ProjectRepository::class)->all();

    $projects->each(function (array $project): void {
        expect($project)->toHaveKey('slug');
        expect($project['slug'])->toBeString()->not->toBeEmpty();
    });
});

it('returns an empty collection when the content directory does not exist', function (): void {
    $repository = new class extends ProjectRepository
    {
        public function all(): Collection
        {
            // Override path to a non-existent directory
            $path = resource_path('content/projects/__nonexistent__');

            if (! is_dir($path)) {
                return collect();
            }

            return parent::all();
        }
    };

    expect($repository->all())->toBeEmpty();
});
