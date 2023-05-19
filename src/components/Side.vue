<script setup>

</script>

<template>
    <aside v-if="group.content" class="side-container">
        <div class="side-close" @click="closeSide">
            <img src="/close3.svg" alt="close">
        </div>
        <div class="side-header">
            <h2>{{ group.name }} - {{ group.decade }}</h2>
            <h3>{{ group.song }}</h3>
        </div>
        <div class="side-content">
            <p class="description">{{ group.content.description }}</p>
            <p class="about-group">{{ group.content.about_group }}</p>
            <div class="galerie">
                <img v-for="(img, index ) in group.content.img" :key="index" :src="'../' + img" :alt="group.url + 'image'">
            </div>
            <div class="video">
                <p>Music video :</p>
                <iframe width="560" height="415" :src="group.content.video" title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen>
                </iframe>
            </div>
            <p class="credits">
            <p>Credits: </p><em v-for="(credit, index) in group.content.credits" :key="index"> {{ credit }} &nbsp;</em>
            </p>
        </div>
    </aside>
</template>

<script>
export default {
    name: 'Side',
    emits: ['close'],
    props: {
        group: Object,
    },
    data() {
        return {
            state: null,
        }
    },
    methods: {
        closeSide() {
            this.state = false;
            this.$emit('close', this.state);
            console.log('close' + this.open);
        }
    }
}
</script>

<style scoped lang="scss">
@use '../assets/main.scss' as *;

aside.side-container {
    height: 99vh;
    width: 40%;
    border-radius: 5px 0px 0px 5px;
    border: solid 1px $white;
    backdrop-filter: blur(40px);
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    right: -80%;
    z-index: 99999;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
    padding: 4.5%;
    animation: side-close 1s ease-in-out;
    overflow-y: scroll;
    overflow-x: hidden;

    &::-webkit-scrollbar {
        display: none;
    }

    .side-content {
        padding-top: 2%;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 30px;
        align-items: flex-start;


        p {
            font-size: 16px;
        }

        div.galerie {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        div.video {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 30px;
            align-items: flex-start;

            iframe {
                width: 100%;
                height: 300px;
            }
        }

        p.credits {
            font-size: 14px;
            font-weight: 200;
        }
    }



    @keyframes side-close {
        0% {
            right: 0%;
        }

        100% {
            right: -40%;
        }
    }

    &.side-open {
        animation: side-open 1s ease-in-out;
        right: 0%;
    }

    @keyframes side-open {
        0% {
            right: -40%;
        }

        100% {
            right: 0%;
        }
    }

    div.side-close {
        position: absolute;
        top: 4%;
        left: 4%;
        background-color: $white;
        border-radius: 50%;
        height: 35px;
        width: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        img {
            height: 30px;
        }

        &:hover {
            background-color: $black;

            img {
                filter: invert(100%);
            }
        }
    }

    .side-header {
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: flex-start;

        h2 {
            font-size: 35px;
            font-weight: 900;
        }

        h3 {
            font-size: 20px;
            font-weight: 800;
        }
    }

}
</style>