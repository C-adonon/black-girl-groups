<script setup>
import GroupItem from './GroupItem.vue';
import { getAllGroups } from '../services/services';
</script>

<template>
    <div class="groups">
        <ul class="group-list">
            <li v-for="(group, id) in groups" :key="id" class="group-item" :id="group.id">
                <GroupItem :group="group" />
            </li>
        </ul>
    </div>
</template>


<script>
export default {
    name: 'Home',
    components: {
        GroupItem
    },
    data() {
        return {
            groups: [],
        }
    },
    mounted() {
        this.groups = getAllGroups();
    },
}

</script>

<style scoped lang="scss">
@use '../assets/main.scss' as *;
div.groups {
    margin: 4% 0%;
    overflow-x: scroll;

    &::-webkit-scrollbar {
        display: none;
    }

    ul.group-list {
        display: flex;
        gap: 100px;
        padding: 0px;
        margin: 0px;
        list-style: none;

        li.group-item {
            width: fit-content;
            padding: 24px;
            backdrop-filter: blur(0.5rem);
            border: solid 1px $white;
            border-radius: 5px;

            &:hover {
                cursor: url('/pointer-100px.png') 0 0, pointer;
            }
        }

    }

}
</style>


