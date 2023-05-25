<!-- ./src/App.vue -->

<script setup lang="ts">

    // This starter template is using Vue 3 <script setup> SFCs
    // Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
    
    import BackgroundSvg from './components/BackgroundSvg.vue'
    import VvColorModeButton from './components/vv/buttons/VvColorModeButton.vue'
    import VvScrollUp from './components/vv/buttons/VvScrollUp.vue'

    import type { ValidColorModes } from '@obewds/vueventus'

    // import { loadFull } from 'tsparticles'

    /*
    const particlesInit = async (engine:any) => {
        await loadFull(engine);
    };

    const particlesLoaded = async (container:any) => {
        console.log("Particles container loaded", container);
    };
    */

    const colorMode = localStorage && localStorage.getItem('colorMode') ? localStorage.getItem('colorMode') as ValidColorModes : 'light' as ValidColorModes

    /*
    const particleOptions = {
        // background: {
        //     color: {
        //         value: '#0d47a1'
        //     }
        // },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: 'push'
                },
                onHover: {
                    enable: true,
                    mode: 'repulse'
                },
                resize: true
            },
            modes: {
                bubble: {
                    distance: 400,
                    duration: 2,
                    opacity: 0.8,
                    size: 40
                },
                push: {
                    quantity: 4
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                }
            }
        },
        particles: {
            color: {
                value: '#ffffff'
            },
            links: {
                color: '#ffffff',
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1
            },
            collisions: {
                enable: true
            },
            move: {
                direction: 'none',
                enable: true,
                outMode: 'bounce',
                random: false,
                speed: 6,
                straight: false
            },
            number: {
                density: {
                    enable: true,
                    area: 800
                },
                value: 80
            },
            opacity: {
                value: 0.5
            },
            shape: {
                type: 'circle'
            },
            size: {
                random: true,
                value: 5
            }
        },
        detectRetina: true
    }
    */

</script>

<template>

    <div class="overflow-hidden">

        <div class="fixed top-0 left-0 flex flex-wrap bg-pink-200 text-pink-900 dark:bg-pink-500 dark:text-white overflow-hidden">
            <BackgroundSvg class="opacity-25 w-full sm:w-1/2 lg:w-1/4"/>
            <BackgroundSvg class="opacity-25 w-full sm:w-1/2 lg:w-1/4"/>
            <BackgroundSvg class="opacity-25 w-full sm:w-1/2 lg:w-1/4"/>
            <BackgroundSvg class="opacity-25 w-full sm:w-1/2 lg:w-1/4"/>
            <BackgroundSvg class="opacity-25 w-full sm:w-1/2 lg:w-1/4"/>
            <BackgroundSvg class="opacity-25 w-full sm:w-1/2 lg:w-1/4"/>
            <BackgroundSvg class="opacity-25 w-full sm:w-1/2 lg:w-1/4"/>
            <BackgroundSvg class="opacity-25 w-full sm:w-1/2 lg:w-1/4"/>
            <BackgroundSvg class="opacity-25 w-full sm:w-1/2 lg:w-1/4"/>
            <BackgroundSvg class="opacity-25 w-full sm:w-1/2 lg:w-1/4"/>
            <BackgroundSvg class="opacity-25 w-full sm:w-1/2 lg:w-1/4"/>
            <BackgroundSvg class="opacity-25 w-full sm:w-1/2 lg:w-1/4"/>
            <BackgroundSvg class="opacity-25 w-full sm:w-1/2 lg:w-1/4"/>
            <BackgroundSvg class="opacity-25 w-full sm:w-1/2 lg:w-1/4"/>
            <BackgroundSvg class="opacity-25 w-full sm:w-1/2 lg:w-1/4"/>
            <BackgroundSvg class="opacity-25 w-full sm:w-1/2 lg:w-1/4"/>
        </div>

        <main class="min-h-screen w-full text-center px-6 pt-20">

            <!--<Particles
                id="ts-particles"
                :particlesInit="particlesInit"
                :particlesLoaded="particlesLoaded"
                url="http://foo.bar/particles.json"
            />-->

            <!--<Particles
                id="ts-particles"
                :particlesInit="particlesInit"
                :particlesLoaded="particlesLoaded"
                :options="particleOptions"
            />-->

            <router-view v-slot="{ Component, route }">
                <transition name="page" mode="out-in">
                    <component :is="Component" :key="route.path"/>
                </transition>
            </router-view>

        </main>

        <aside class="fixed bottom-0 right-0 text-right z-40">
            <nav class="relative bottom-0 pb-3 pr-4">
                <div class="flex flex-col justify-end space-y-3">
                    <VvScrollUp/>
                    <VvColorModeButton palette="solid" color="primary" :mode="(colorMode)"/>
                </div>
            </nav>
        </aside>

    </div>

</template>


<style>

    .page-enter-active {
        transition: opacity 0.3s ease-out;
    }

    .page-leave-active {
        transition: opacity 0.3s ease-in;
    }

    .page-enter-from {
        transform: translateY(10px);
        opacity: 0;
    }

    .page-leave-to {
        opacity: 0;
    }

</style>

