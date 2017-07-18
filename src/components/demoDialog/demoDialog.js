/**
 * Created by alan on 2017/3/27.
 */
import Vue from 'vue'

(function(){

    function install(Vue){

        Vue.dialog = function(config){
            var vm = null;
            Vue.config.delimiters = ['{{', '}}']
            var defaultConfig = {
                target: document.body,
                data: {
                    show: false,
                }
            };

            config = extend(defaultConfig, config);

            config.methods = extend(config.methods || {}, {
                close:function(){
                    this.$remove()
                },
                handle:function(fn){
                    this[fn]();
                }
            })

            var tpl =
                `
                <div class="dialogContainer" v-if="sprDialogShow == true" :class="{'show': sprDialogShow == true}">
                     <div class="coverPanel" @click.stop="hiddenDialog()">

                     </div>

                     <div class="dialogPanel">
                         <div class="dialogPanel_header">
                             <slot name="template_header"></slot>
                         </div>

                         <div class="dialogPanel_body">
                             <slot name="template_body"></slot>
                         </div>
                     </div>
                </div>`

            vm = new Vue({
                replace: false,
                template: tpl,
                data: config.data,
                methods: config.methods,
                ready:function(){
                    if(typeof this.ready == 'function')this.ready();
                    var layDOM = divEl.querySelector('.layui-layer');
                    var layWidth = layDOM.offsetWidth;
                    var layHeight = layDOM.offsetHeight;
                    layDOM.style.cssText = 'z-index: 19870124;top:50%;left:50%;margin-top:'+(-(layHeight/2))+'px;margin-left:'+(-(layWidth/2))+'px;';
                }
            })
            var divEl = document.createElement('div');
            divEl.innerHTML = tpl;
            vm.$mount(divEl);
            config.target.append(vm.$el);

        }


        function extend(target, source) {
            for (var property in source) {
                if (source[property] && source[property].constructor &&
                    source[property].constructor === Object) {
                    target[property] = target[property] || {};
                    extend(target[property], source[property]);
                } else {
                    target[property] = source[property];
                }
            }
            return target;
        }

    }

    Vue.use(install)
})();
