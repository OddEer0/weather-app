/// <reference types="vitest" />
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import * as path from "path"
const pathSrc = path.resolve(__dirname, "./src")

export default defineConfig({
	plugins: [react()],
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
