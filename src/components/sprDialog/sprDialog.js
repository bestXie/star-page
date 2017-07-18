/**
 * Created by alan on 2017/3/16.
 */
import './dialog.css'

let sprDialog = new sprWeb({
    props: ['config'],
    data: function(){
        return {
            sprDialogConfig: this.config
        }
    },
    mounted: function(){
        //console.log(this.sprDialogConfig);

    },
    methods: {
        hiddenDialog: function(){
            this.sprDialogConfig.isShow = false;
        },
        confirmData: function(){
            this.sprDialogConfig.success(this.sprDialogConfig.data)
        }
    },
    /*watch: {
        dialogShow: function(val){
            this.sprDialogShow = val;
        },
        sprDialogShow: function(val){
            this.$emit("change-status", val);
        }
    }*/
})

export default sprDialog;