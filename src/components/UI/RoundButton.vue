<template>
    <button class="round-btn">
        <slot></slot>
    </button>
</template>

<style scoped lang="scss">
@use '../../assets/main.scss' as *;

button.round-btn {
    background-color: $white;
    opacity: 0.8;
    border: none;
    border-radius: 50%;
    padding: 20px;
    font-size: 25px;
    font-weight: 700;
    color: $black;
    height: 120px;
    width: 120px;
    cursor: pointer;
    text-align: center;
    word-break: break-all;

    &:hover {
        opacity: 1;
        border: 4px solid $black;
    }
}
</style>