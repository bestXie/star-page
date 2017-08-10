<style scoped>
    .wrapper {
        display: flex;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
    }
    .input-wrapper {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        position: relative;
    }

</style>

<template>
    <div class="wrapper">
        <section class="input-wrapper">
            <scroller>
                <x-input title="添加自定义颜色" ref="input" placeholder="请输入颜色色号"  @on-blur="onBlur" v-model="inputData" :min="4" :max="6" @on-change="change"  required></x-input>
            </scroller>
        </section>
    </div>
</template>

<script>
    import {getStore, setStore} from '../../../util/index';
    import toast from '../../../plugins/toast/index.vue'
    import XInput from '../../../components/input/index.vue'
    export default {
        name: 'page_banner_index',
        components: {toast,XInput},
        data () {
            return {
                moduleList: [],
                selectAlignId: '',
                inputData:'',
                valid:true,
            }
        },
        mounted () {
            this.init();
        },
        computed: {},

        methods: {
            init(){
            },
            change(){
                console.log(this.inputData)
            },
            getValid () {
                this.valid = this.$refs.input.valid
            },
            onBlur(){
                this.$refs.input.validate();
                this.getValid();
              console.log(this.valid)
            },

            toastCLick(){
                console.log('style.toastclisk')
            },
            selectCurrent(data, id){
                data = data.filter(function (item, idx) {
                    item.current = (item.id === id) || false;
                    return item;
                });
            },
            selectAlignEvent(){
                let _this = this;
                let list = [
                    {id: 1, text: '居中'},
                    {id: 2, text: '上对齐'},
                    {id: 3, text: '下对齐'},
                    {id: 4, text: '左对齐'},
                    {id: 5, text: '右对齐'},
                ];
                this.selectCurrent(list, this.selectAlignId);
                this.$store.commit('confirm', {
                    data: {
                        title: '对其方式',
                        boxType: 'confirm-select',
                        list: list
                    },
                    onConfirm(data, cancel){
                        _this.selectAlignId = data.id;
                        if (data.id === 1) {
                            _this.$store.commit('toast', {content: '已成功删除了“' + name + '”'});
                            _this.$router.go(-1)
                        }
                        cancel();
                    },
                    onCancel(cancel) {
                        cancel();
                    }
                });
            }
        }
    }
</script>

