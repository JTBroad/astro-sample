import { defineConfig, transform } from 'windicss/helpers'

export default defineConfig({
    safelist:'data-theme',
    plugins:[
        transform('daisyui')
    ]
})