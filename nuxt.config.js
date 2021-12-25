export default {
    ssr: false,
    target: 'static',
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'HarambApe DAO - The protector of the blockchain',
            htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'HarambApe DAO is the protector of the blockchain. The mission is to list and rank projects based on their legitimacy. HarambApe will also grant budget to projects to become more secure.' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i'
            }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '~/assets/css/animate.css',
        '~/assets/css/bootstrap.min.css',
        '~/assets/css/flaticon.css',
        '~/assets/css/boxicons.min.css',
        '~/assets/css/main.scss',
        '~/assets/css/coming-soon.scss',
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: '~/plugins/vue-carousel', ssr: false },
        { src: '~/plugins/vue-cool-lightbox', ssr: false },
        { src: '~/plugins/vue-backtotop', ssr: false },
        { src: '~/plugins/feather-icons', ssr: false },
        { src: '~/plugins/vue-feather', ssr: false },
        { src: '~/plugins/v-wow', ssr: false },
        { src: '~/plugins/vue-toastification', ssr: false },
    ],

    // Globally configure <nuxt-link> default active class.
    router: {
        linkActiveClass: 'active'
    },

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        [
            '@nuxtjs/fontawesome', {
                icons: {
                    solid: true,
                    brands: true
                }
            }
        ]
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        'bootstrap-vue/nuxt',
    ],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
    }
}