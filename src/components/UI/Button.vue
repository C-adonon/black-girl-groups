<template>
    <button class="primary-btn">
        <slot></slot>
    </button>
</template>

<style scoped lang="scss">
@use '../../assets/main.scss' as *;
 
button.primary-btn {
    background-color: $white;
    color: $black;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 20px;
    font-weight: 900;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
 
    &:hover {
        background-color: $black;
        color: $white;
    }
}
</style>