import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './', // THÊM DÒNG NÀY: Dấu chấm giúp link file chạy từ thư mục hiện tại
});

