import { createSSRApp, h } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import createServer from '@inertiajs/server'
import { importPageComponent } from '@/scripts/vite/import-page-component'

// ...

createServer((page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => importPageComponent(name, import.meta.globEager('../views/pages/**/*.vue')),
    setup: ({ app, props, plugin: inertia }) => {
        return createSSRApp({ render: () => h(app, props) })
            .use(inertia)
    }
}))
