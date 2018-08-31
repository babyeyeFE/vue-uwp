<template>
  <div>
    <u-switch v-model="isDialogVisible" />
    <u-dialog
      title="Delete file permanently?"
      message="If you delete this file, you won't be able to recover it. Do you want to delete it?"
      :visible.sync="isDialogVisible"
      closeButton
      confirmButton
      confirmText="确认"
    />
  </div>
</template>

<script>
export default {
  name: 'ex-textBox',
  data() {
    return {
      isDialogVisible: false
    }
  }
}
</script>



