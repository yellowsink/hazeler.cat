import { defineConfig, presetWind4, presetWebFonts } from 'unocss'

export default defineConfig({
	presets: [
		presetWind4(),
		presetWebFonts({
			fonts: {
				sans: [
					//'Signika'
					'Balsamiq Sans'
				]
			}
		})
	]
})