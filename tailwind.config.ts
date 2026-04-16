import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        /* Primary */
        primary: 'hsl(var(--color-primary))',
        'primary-dark': 'hsl(var(--color-primary-dark))',
        navy: 'hsl(var(--color-navy))',
        
        /* Secondary */
        'gray-light': 'hsl(var(--color-gray-light))',
        'gray-border': 'hsl(var(--color-gray-border))',
        'gray-text': 'hsl(var(--color-gray-text))',
        
        /* Accent */
        blue: 'hsl(var(--color-blue))',
        orange: 'hsl(var(--color-orange))',
        red: 'hsl(var(--color-red))',
        
        /* Semantic */
        background: 'hsl(var(--color-background))',
        foreground: 'hsl(var(--color-foreground))',
        border: 'hsl(var(--color-border))',
        muted: 'hsl(var(--color-muted))',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        display: ['var(--font-display)'],
      },
      spacing: {
        xs: 'var(--spacing-xs)',
        sm: 'var(--spacing-sm)',
        md: 'var(--spacing-md)',
        lg: 'var(--spacing-lg)',
        xl: 'var(--spacing-xl)',
        '2xl': 'var(--spacing-2xl)',
        '3xl': 'var(--spacing-3xl)',
        '4xl': 'var(--spacing-4xl)',
        '5xl': 'var(--spacing-5xl)',
      },
      fontSize: {
        xs: '12px',
        sm: '14px',
        base: '16px',
        lg: '18px',
        xl: '20px',
        '2xl': '22px',
        '3xl': '28px',
        '4xl': '36px',
        '5xl': '42px',
      },
      lineHeight: {
        tight: '1.2',
        normal: '1.6',
        relaxed: '1.8',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        base: '0 4px 20px rgba(0, 0, 0, 0.05)',
        md: '0 10px 25px rgba(0, 0, 0, 0.1)',
        lg: '0 20px 40px rgba(0, 0, 0, 0.15)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
      },
    },
  },
  plugins: [],
}

export default config
