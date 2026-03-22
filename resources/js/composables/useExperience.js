import { ref } from 'vue';

const isMobile = typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches;
const fullExperience = ref(!isMobile);

// Auto-enable Full Experience when viewport crosses to desktop
if (typeof window !== 'undefined') {
    const mql = window.matchMedia('(min-width: 901px)');
    mql.addEventListener('change', (e) => {
        if (e.matches) { fullExperience.value = true; }
    });
}

export function useExperience() {
    return { fullExperience };
}
