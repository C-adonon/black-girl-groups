<script setup>
import Button from './UI/Button.vue';
</script>

<template>
    <figure @click="toPlay">
        <figcaption class="year">{{ group.year }}</figcaption>
        <img class="group-img" :src="group.img" :alt="group.name" />
        <figcaption class="group-details">{{ group.name }} - {{ group.song }}</figcaption>
    </figure>
</template>

<script>
export default {
    name: 'GroupItem',
    components: {
        Button,
    },
    props: {
        group: {
            type: Object,
            required: true
        }
    },
    methods: {
        toPlay() {
            this.$router.push({ name: 'play', params: { group: this.group.url } });
        },
    }
}
</script>

<style scoped lang="scss">
figure {

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    figcaption {
        text-align: center;
        font-weight: 900;

        &.year {
            font-size: 70px;
        }

        &.group-details {
            font-size: 30px;
            padding: 10px 0px;
        }

    }

    img.group-img {
        max-width: 50vw;
        object-fit: cover;
    }
}
</style>