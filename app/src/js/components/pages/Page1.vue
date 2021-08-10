<template>
    <div>
        <p>ここはページ１です。２あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ</p>
        <div>
            <color-button :color="'red'" class="color-button"></color-button>
        </div>
        <br>
        <router-link to="/page2">Go to page2</router-link>
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
        background: red;
        color: white;
    }
</style>
