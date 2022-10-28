<template>
    <div class="box">
        <div class="classHtml" v-html="productTitle.HTML_SRC"
         v-if="$i18n.locale === 'en'">
        </div>
        <div  :class="{ HebrewT: $i18n.locale === 'he' }" class="classHtml" 
        v-else v-html="productTitle.HTML_SRCHe" ></div>
    </div>
    
</template>

<script>
export default {
    props: [
        'productTitle'
    ]
}
</script>

<style lang="scss" scoped>
.box {
    min-height: 750px;
    max-height: 750;
    display: flex;
    flex-direction: column;
    background-color: #f6f6f8;
.classHtml{
    align-content: center;
}
    @media (max-width: 750px) {
        min-height: 750px;
        max-height: 750;
        flex-direction: row;
        background-color: #f6f6f8;
    }
}
</style>