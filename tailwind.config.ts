
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				lemon: {
					DEFAULT: '#F8E71C',
					50: '#FFFEE6',
					100: '#FFF9B3',
					200: '#FFF380',
					300: '#FFEE4D',
					400: '#FFE91A',
					500: '#F8E71C',
					600: '#E6D500',
					700: '#B3A700',
					800: '#807800',
					900: '#4D4800',
					950: '#302D00'
				},
				lime: {
					DEFAULT: '#4CD964',
					50: '#E6F9EA',
					100: '#CCF2D5',
					200: '#99E5AB',
					300: '#66D880',
					400: '#4CD964',
					500: '#33CC4D',
					600: '#29A33E',
					700: '#1F7A2F',
					800: '#14521F',
					900: '#0A2910',
					950: '#051408'
				},
				purple: {
					DEFAULT: '#9B87F5',
					50: '#F4F1FE',
					100: '#E0D9FC',
					200: '#C3B5F9',
					300: '#A590F7',
					400: '#9B87F5',
					500: '#7A5FF1',
					600: '#5632ED',
					700: '#3F1CD3',
					800: '#3016A2',
					900: '#211071',
					950: '#190B56'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				sway: {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' }
				},
				bounce: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				'slide-up': {
					'0%': { transform: 'translateY(100px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'slide-down': {
					'0%': { transform: 'translateY(-100px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(100px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'slide-in-left': {
					'0%': { transform: 'translateX(-100px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				pulse: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'sway': 'sway 6s ease-in-out infinite',
				'bounce': 'bounce 6s ease-in-out infinite',
				'slide-up': 'slide-up 0.6s ease-out',
				'slide-down': 'slide-down 0.6s ease-out',
				'slide-in-right': 'slide-in-right 0.6s ease-out',
				'slide-in-left': 'slide-in-left 0.6s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'pulse': 'pulse 3s ease-in-out infinite'
			},
			fontFamily: {
				'sans': ['Inter', 'sans-serif'],
				'display': ['Lexend', 'sans-serif']
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
