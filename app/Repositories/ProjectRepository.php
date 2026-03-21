<?php

namespace App\Repositories;

use Illuminate\Support\Collection;
use League\CommonMark\CommonMarkConverter;
use Spatie\YamlFrontMatter\YamlFrontMatter;

class ProjectRepository
{
    private CommonMarkConverter $converter;

    public function __construct()
    {
        $this->converter = new CommonMarkConverter([
            'html_input' => 'strip',
            'allow_unsafe_links' => false,
        ]);
    }

    /** @return Collection<int, array<string, mixed>> */
    public function all(): Collection
    {
        $path = resource_path('content/projects');

        if (! is_dir($path)) {
            return collect();
        }

        return collect(glob("{$path}/*.md"))
            ->map(fn (string $file) => $this->parse($file))
            ->filter()
            ->sortByDesc(fn (array $project) => $project['order'] ?? 0)
            ->values();
    }

    /** @return array<string, mixed>|null */
    private function parse(string $file): ?array
    {
        $raw = file_get_contents($file);

        if ($raw === false) {
            return null;
        }

        $document = YamlFrontMatter::parse($raw);
        $matter = $document->matter();

        if (empty($matter['title'])) {
            return null;
        }

        return [
            'slug' => basename($file, '.md'),
            'title' => $matter['title'],
            'description' => $matter['description'] ?? '',
            'description_en' => $matter['description_en'] ?? $matter['description'] ?? '',
            'tags' => $matter['tags'] ?? [],
            'url' => $matter['url'] ?? null,
            'github' => $matter['github'] ?? null,
            'images' => $this->resolveImages($matter['images'] ?? []),
            'featured' => (bool) ($matter['featured'] ?? false),
            'order' => (int) ($matter['order'] ?? 0),
            'content' => $this->converter->convert($document->body())->getContent(),
        ];
    }

    /** @param array<int, string> $images
     * @return array<int, string>
     */
    private function resolveImages(array $images): array
    {
        return array_values(array_filter(
            array_map(fn (string $img) => asset("images/projects/{$img}"), $images),
        ));
    }
}
