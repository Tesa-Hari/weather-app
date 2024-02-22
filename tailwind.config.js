/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    screens: {
			xlmax: { max: "1279px" },
			// => @media (max-width: 1279px) { ... }

			lgmax: { max: "1023px" },
			// => @media (max-width: 1023px) { ... }

			mdmax: { max: "767px" },
			// => @media (max-width: 767px) { ... }

			smmax: { max: "639px" },
			// => @media (max-width: 639px) { ... }
      xl: { min: "1279px" },
			// => @media (max-width: 1279px) { ... }

			lg: { min: "1023px" },
			// => @media (max-width: 1023px) { ... }

			md: { min: "767px" },
			// => @media (max-width: 767px) { ... }

			sm: { min: "639px" },
			// => @media (max-width: 639px) { ... }
   
   
		},
  },
  plugins: [],
}

