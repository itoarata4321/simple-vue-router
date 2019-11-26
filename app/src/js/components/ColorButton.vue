<template>
    <button type="button" @click="onClick()">{{ label }}</button>
</template>

<script>
    export default {
        props: ['color'],
        computed: {
            colorJp: function () {
                if (this.color == 'red') {
                    return '赤';
                } else if (this.color == 'blue') {
                    return '青';
                }
            },
            label: function () {
                return this.colorJp + 'いボタン';
            },
        },
        methods: {
            onClick() {
                alert(this.label + 'がクリックされました！');
            }
        }
    }
</script>
