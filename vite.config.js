import {defineConfig} from 'vite'
import laravel from 'vite-plugin-laravel'
import vue from '@vitejs/plugin-vue'
import tailwindcss from "tailwindcss"
import autoprefixer from "autoprefixer"
import inertia from './resources/scripts/vite/inertia-layout'
const { resolve } = require('path')

export default defineConfig(({command, mode}) => {
    console.log(command)
    return{
        plugins: [
            inertia(),
            vue(),
            laravel({
                postcss: [
                    tailwindcss(),
                    autoprefixer(),
                ]
            })
        ]
    }
})
