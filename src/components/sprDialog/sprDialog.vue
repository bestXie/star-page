/**
 * Created by alan on 2017/3/16.
 */
<template>
  <div class="dialogContainer" v-if="sprDialogConfig.isShow == true" :class="{'show': sprDialogConfig.isShow == true}">
     <div class="coverPanel" @click.stop="hiddenDialog()">

     </div>

     <div class="dialogPanel">
         <div class="dialogPanel_header">
             <slot name="template_header"></slot>
         </div>

         <div class="dialogPanel_body">
             <slot name="template_body" :config="sprDialogConfig"></slot>
         </div>

         <div class="dialogPanel_footer" v-if="sprDialogConfig.confirm||sprDialogConfig.cancel">
             <button class="confirm" v-if="sprDialogConfig.confirm" @click="confirmData()">确定</button>
             <button class="cancel"  v-if="sprDialogConfig.cancel">取消</button>
         </div>
     </div>
  </div>

</template>

<script>
    import sprDialog from './sprDialog';
    export default sprDialog;
</script>