<style lang="less" scoped>
    @import './index.less';

    .demo-content {
        font-size: .36rem;

    }

    .list-complete-item {
        transition: all .1s;
        height:50px;
        line-height: 50px;
        background: #000;
        color:#fff;
        text-align: center;
        font-size:24px;
        margin-top:10px;position: relative;
    }
    .styleclass{
        width:100px;
        float:left;
    }
    .list-complete-enter, .list-complete-leave-active {
        opacity: 0;
        height: 0px;
        margin-top: 0px;
        padding: 0px;
        border: solid 0px;
    }
    .list-complete-sortable-chosen,.list-complete-sortable-ghost{
        opacity: 0;
        height: 0px;
        margin-top: 0px;
        padding: 0px;
        border: solid 0px;
    }
    .dargDiv{
        cursor:move;
        background:red;
        position: absolute;right: 0;
    }
    .wrods{
        margin-top:50px;
    }
    p{
        line-height:24px;
        text-align:center;
    }
</style>

<template>
    <div class="wrapper">
        <p class="title">Hello icepy</p>

        <swipeout>
            <swipeout-item @on-close="handleEvents('on-close'+i)" @on-open="handleEvents('on-open'+i)"
                           transition-mode="follow" v-for="i in 3" :key="i">
                <div slot="right-menu">
                    <swipeout-button @click.native="onButtonClick(i+'-1')" type="primary">Yes</swipeout-button>
                    <swipeout-button @click.native="onButtonClick(i+'-2')" type="warn">Right</swipeout-button>
                    <swipeout-button @click.native="onButtonClick(i+'-3')" type="warn">Right</swipeout-button>
                </div>
                <div slot="content" class="demo-content vux-1px-t">测试滑动</div>
            </swipeout-item>
        </swipeout>



        <draggable :list="list2" :move="getdata" @update="datadragEnd" :options="{handle:'.dargDiv'}">
            <transition-group name="list-complete" >
                <div v-for="element in list2" :key="element.it.name"  class="list-complete-item">
                    <div class="styleclass dargDiv">{{element.id}}</div>
                    <div class="styleclass">{{element.it.name}}</div>
                </div>
            </transition-group>
        </draggable>
    </div>
</template>

<script>
    import {getCasCheck} from '../../../api/index.js';
    import {Swipeout, SwipeoutItem, SwipeoutButton} from '../../../plugins/swipeout/';

    import draggable from '../../../plugins/sortable/vuedraggable.js';
    export default {
        components: {
            draggable,
            Swipeout,
            SwipeoutItem,
            SwipeoutButton,
        },
        name: 'dome',
        data () {
            return {
                link: 'DingTalk',
                login: 'login',
                register: 'register',
                color1: '#FFEF7D',
                colors1: ['#FF3B3B', '#FFEF7D', '#8AEEB1', '#8B8AEE', '#CC68F8', '#fff'],
                people: [
                    {name: "Abby"},
                    {name: "Brooke"},
                    {name: "Courtenay"},
                    {name: "David"}
                ],
                list2:[
                    {id:"id1",it:{name:'bbbb'}},
                    {id:"id2",it:{name:'2222'}},
                    {id:"id3",it:{name:'3333'}},
                    {id:"id4",it:{name:'4444'}}
                ]
            }
        },

        mounted () {
            getCasCheck({email: 'ceshi@.ddd2.com'}).then(res => {
                console.log(res)
            });
        },
        methods: {
            onButtonClick (type) {
                console.log(type)
            },
            handleEvents (type) {

            },
            getdata: function(evt){
                console.log(evt.draggedContext.element.id);
            },
            datadragEnd:function(evt){
                console.log(JSON.stringify(this.list2));
                console.log('拖动前的索引：'+evt.oldIndex);
                console.log('拖动后的索引：'+evt.newIndex);
            }
        }
    }
</script>

