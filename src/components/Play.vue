<script setup>
import { getGroup } from '../services/services.js';
import RoundButton from './UI/RoundButton.vue';
import Experience from '../Experience/Experience.js';
import Side from './Side.vue';
</script>

<template>
    <div v-if="group.content">
        <div class="audio-visualizer">
            <div class="visualizer-header">
                <img class="visualizer-group-img" :src="'../' + group.img" :alt="group.url + 'image'">
                <h2>{{ group.name }} - {{ group.song }} - {{ group.year }}</h2>
                <RoundButton @click="openSide">Learn more</RoundButton>
            </div>
            <div v-if="!clicked" @click="startExperience" id="play-btn"></div>
            <canvas class="webgl"></canvas>
        </div>
        <Side @close="sideAnimation(state)" :group="group" />
    </div>
    <div v-else>Error</div>
</template>

<script>
export default {
    name: 'Play',
    components: {
        RoundButton,
        Side,
    },
    data() {
        return {
            group: {},
            experience: null,
            clicked: false,
            audio: "",
            open: false,
        }
    },
    created() {
        this.group = getGroup(this.$route.params.group);
    },
    mounted() {
        this.audio = "../audio/" + this.group.audio;
        this.moveRecordPlayer();
        this.changeRecordPlayerGlow();
        this.experience = new Experience(document.querySelector('canvas.webgl'), this.audio);
        this.$router.afterEach((to, from) => {
            location.reload();
        })
        if (this.experience.audio) {
            this.experience.audio.on('audioEnded', () => {
                this.clicked = false;
            })
        }
        let side = document.querySelector('.side-container');
        side.style.display = "none";
    },
    unmounted() {
        this.removeRecordPlayerGlow();
        this.experience.destroy();
    },
    methods: {
        changeRecordPlayerGlow() {
            const recordPlayer = document.querySelector('.record-player');
            recordPlayer.classList.toggle(`${this.group.url}`);
        },
        removeRecordPlayerGlow() {
            const recordPlayer = document.querySelector('.record-player');
            recordPlayer.classList.remove(`${this.group.url}`);
        },
        moveRecordPlayer() {
            console.log('moveRecordPlayer')
            let visualizerHeader = document.querySelector('.visualizer-header')
            let visualizerHeaderHeight = visualizerHeader.offsetHeight
            document.documentElement.style.setProperty('--visualizer-header-height', `${visualizerHeaderHeight}px`)
            let header = document.querySelector('header')
            let headerHeight = header.offsetHeight
            document.documentElement.style.setProperty('--header-height', `${headerHeight}px`)
            headerHeight = headerHeight + visualizerHeaderHeight
            let recordPlayer = document.querySelector('.record-player')
            recordPlayer.style.top = `${headerHeight}px`
        },
        startExperience() {
            this.experience.interface.onClickBtn();
            this.clicked = true;
        },
        openSide() {
            this.open = true;
            this.sideAnimation(this.open);
        },
        sideAnimation(open) {
            let side = document.querySelector('.side-container');
            if (open) {
                side.classList.toggle('side-open');
                side.style.display = "block";
            } else {
                side.classList.remove('side-open');
            }
        }
    }
}
</script>

<style scoped lang="scss">
@use '../assets/main.scss' as *;

div.audio-visualizer {
    div.visualizer-header {
        display: flex;
        justify-content: flex-start;
        gap: 35px;
        align-items: center;
        padding: 2% 0%;

        h2 {
            font-size: 30px;
            font-weight: 900;
        }

        img.visualizer-group-img {
            width: 200px;
        }
    }

    #play-btn {
        position: absolute;
        bottom: calc(-45% + 100px);
        left: 40%;
        z-index: 9999999999;
        background-image: url('/listen-now.svg');
        background-size: cover;
        height: 150px;
        width: 150px;
        cursor: pointer;
    }

    canvas.webgl {
        width: 100% !important;
        height: 100% !important;
        margin: 0% !important;
    }
}
</style>
