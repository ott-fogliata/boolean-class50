<template>
    <div>
        <input v-model="inputValue">
        <button @click="$emit('search', inputValue)">Search</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            inputValue: ''
        }
    }
}
</script>

<style lang="scss" scoped>

</style>