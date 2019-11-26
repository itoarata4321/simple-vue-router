<template>
    <div>
        <p>
            ここはページ２です。
        </p>
        <div>
            <color-button :color="'blue'" class="color-button"></color-button>
        </div>
        <br>
        <router-link to="/page1">Go to page1</router-link>
    </div>
</template>

<script>
    import ColorButton from '../ColorButton';

    export default {
        components: {
            ColorButton
        },
    }
</script>

<style scoped>
    .color-button {
        margin-top: 10px;
        margin-bottom: 10px;
        background: blue;
        color: white;
    }
</style>
