<?php

return [

    /*
     * Número de proyectos visibles inicialmente en la sección de proyectos.
     * Al pulsar "Ver más" se cargan otros tantos.
     * También configurable via .env: PROJECTS_BATCH_SIZE=3
     */
    'projects_batch_size' => (int) env('PROJECTS_BATCH_SIZE', 3),

];
