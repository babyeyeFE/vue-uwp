<template>
  <div>
    <u-switch v-model="isDialogVisible" />
    <u-dialog :title="'Delete file permanently?'"
              message="If you delete this file, you won't be able to recover it. Do you want to delete it?"
              :visible.sync="isDialogVisible"
              :onClose="close"
              closeButton
              confirmButton
              confirmText="确认">
      <div>
        <h4>模式 {{config.mode}}
          <span class="radio setting-item">
            <input class="option-radio"
                   type="radio"
                   id="auto"
                   value="Auto"
                   v-model="config.mode">
            <label for="auto">自动</label>

            <input class="option-radio"
                   type="radio"
                   id="manual"
                   value="Manual"
                   v-model="config.mode">
            <label for="manual">手动</label>
          </span>
        </h4>
      </div>
    </u-dialog>

  </div>
</template>

<script>
export default {
  name: "ex-textBox",
  data() {
    return {
      isDialogVisible: false,
      config: {
        duration: 5,
        mode: "Auto"
      }
    };
  },
  methods: {
    close() {
      console.log("object");
    }
  }
};
</script>



