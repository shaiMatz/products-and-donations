<template>
    <div class="box">
        <div w3-include-html={{}}></div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.box {
    min-height: 750px;
    max-height: 750;
    display: flex;
    flex-direction: column;
    // box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    background-color: #f6f6f8;

    @media (max-width: 750px) {
        min-height: 750px;
        max-height: 750;
        flex-direction: row;
        background-color: #f6f6f8;
    }
}
</style>