import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    test: {
        environment: 'jsdom',
        globals: true,
        setupFiles: './src/setupTests.ts',
    },
});

// среда: 'jsdom': Имитирует среду браузера для тестирования.
// globals: true: Позволяет использовать глобальные переменные, такие как describe, it, expect, без их импорта.
// setupFiles: файл для настройки тестовых конфигураций, аналогичный Jest'у setupFilesAfterEnv.