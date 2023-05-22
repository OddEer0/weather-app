/// <reference types="vitest" />
import { defineConfig } from "vite"
import { VitePWA } from 'vite-plugin-pwa'
import react from "@vitejs/plugin-react-swc"
import * as path from "path"
const pathSrc = path.resolve(__dirname, "./src")

export default defineConfig({
	plugins: [react(), VitePWA({
		includeAssets: ['favicon.ico'],
		manifest: {
			theme_color: "#3162FF",
			background_color: "#F1F1F1",
			display: "standalone",
			scope: "/",
			start_url: "/",
			name: "Eer0 Weather",
			short_name: "Weather",
			orientation: "portrait",
			icons: [
				{
					src: "/icons/icon-192x192.png",
					sizes: "192x192",
					type: "image/png"
				},
				{
					src: "/icons/icon-256x256.png",
					sizes: "256x256",
					type: "image/png"
				},
				{
					src: "/icons/icon-384x384.png",
					sizes: "384x384",
					type: "image/png"
				},
				{
					src: "/icons/icon-512x512.png",
					sizes: "512x512",
					type: "image/png"
				}
			]
		},
		devOptions: {
			enabled: true,
		}
	})],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src/"),
			public: `${path.resolve(__dirname, "./public/")}`,
			app: `${path.resolve(__dirname, "./src/app/")}`,
			processes: `${path.resolve(__dirname, "./src/processes/")}`,
			pages: `${path.resolve(__dirname, "./src/pages/")}`,
			widgets: `${path.resolve(__dirname, "./src/widgets/")}`,
			features: `${path.resolve(__dirname, "./src/features/")}`,
			entities: `${path.resolve(__dirname, "./src/entities/")}`,
			'@/shared': `${path.resolve(__dirname, "./src/shared/")}`
		}
	},
	css: {
		preprocessorOptions: {
			sass: {
				additionalData: `@import "@/shared/lib/mixins/index.sass"\n`
			}
		}
	}
})
