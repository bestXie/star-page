<template>
    <div class="components-wrapper">
        <div v-for="item,index in propData" :key="item.id" class="starList-wrapper"  @click="starClick(index,'show')">
            <component v-bind:is="item.type" :propData="item" @starClick="starClick(item)"></component>
            <modify-bar  v-if="item.modifyShow" :propData="item" :index="index" @starClick="modifyBarEvent"></modify-bar>
        </div>
    </div>
</template>

<script>
    import modifyBar from './modifyBar.vue'
    import {modulesBanner, modulesApplication} from '../modules.js'
    export default {
        components: {
            modifyBar,
            modulesBanner,
            modulesApplication
        },
        name: 'modify',
        data: function () {
            return {}
        },
        props: {
            propData: {default: []},
        },
        computed: {},
        mounted: function () {
            console.log(111);
        },
        methods: {
            modifyBarEvent(index, type){
//                console.log(index, 'modify_index');
                if (type && this.propData.length > 0) {
                    if (type == 'show') {
                        this.showModifyBar(index)
                    }

                }
            },
            showModifyBar(index){
                console.log(index)
                this.propData[index]['modifyShow'] = true;
                console.log(this.propData)
//                for (let [index, value] of this.propData.entries()) { //遍历索引和元素
//                    value.showModify = true;
//                }
            },
            starClick(data, type){
                if (type) {
                    return false;
                }
                this.$emit('starClick', data)
            }
        }
    }
</script>

<style scoped>
    .starList-wrapper {
        position: relative;
    }
</style>