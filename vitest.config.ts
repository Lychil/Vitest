/// <reference types="vitest" /> // Добавляем поддержку типов Vitest
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()], // Подключаем React-плагин Vite
    test: {
        // Основные настройки Vitest
        environment: 'jsdom', // Окружение для тестов (эмулирует браузер)
        globals: true,        // Глобальные переменные (describe, it, expect без импортов)
        setupFiles: './src/tests/setup.ts', // (опционально) Файл с глобальными настройками
        include: ['**/*.{test,spec}.{ts,tsx}'], // Где искать тесты
        exclude: ['node_modules', 'dist'], // Что исключить
    },
});