# Dialog

[[toc]]

## Basic and Disabled

<ex-dialog></ex-dialog>
```html
  <vup-switch v-model="isDialogVisible" />
  <vup-dialog
    title="Delete file permanently?"
    message="If you delete this file, you won't be able to recover it. Do you want to delete it?"
    :visible.sync="isDialogVisible"
    closeButton
    confirmButton
    confirmText="确认"
  />
```

## Configuration

### visible.sync
Default: `false`

Visibility of Dialog, supports the .sync modifier.

### confirmButton
Default: `false`

show Confirm Button.

### confirmText
Default: `'Confirm'`

Confirm Button text.

### onConfirm
Default: `() => {}`

Callback after Dialog confirm.

### closeButton
Default: `false`

show Close Button.

### closeText
Default: `'Close'`

Close Button text.

### onClose
Default: `() => {}`

Callback after Dialog closes.

### message
Default: `''`

String content of Dialog.

### title
Default: `''`

Title of Dialog.

## Slot

### `default`
Content of Dialog.

### `footer`
Content of the Dialog footer.