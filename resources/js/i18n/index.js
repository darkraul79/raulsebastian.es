import { createI18n } from 'vue-i18n';
import es from './es.json';
import en from './en.json';

const savedLocale = typeof localStorage !== 'undefined'
    ? (localStorage.getItem('locale') ?? 'es')
    : 'es';

export const i18n = createI18n({
    legacy: false,
    locale: savedLocale,
    fallbackLocale: 'es',
    messages: { es, en },
});
