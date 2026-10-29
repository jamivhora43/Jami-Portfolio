import type { Config } from 'tailwindcss';
export default { content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: { extend: { colors: { ink: '#121416', accent: '#2dd4bf' } } }, plugins: [] } satisfies Config;
