# Get started

## Global

The simplest and the fastest way to get started with VueUwp is to add `<script>` reference to `vue-uwp.common.js` file which registers VueUwp as Vue's global plugin.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />

  <title>VueUwp Demo</title>

</head>
<body>
  <div id="app">
    <p>{{ message }}</p>

    <vnt-input v-model="message" label="Text field"></vnt-input>

    <script src="https://unpkg.com/vue@2.5.13/dist/vue.js"></script>
    <script src="https://unpkg.com/vue-uwp/lib/vue-uwp.common.js"></script>
    <script src="main.js"></script>
  </div>
</body>
</html>
```

```javascript
// main.js
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello VueUWP!'
  }
});
```

## npm / Yarn

Go to your project's directory and run in terminal:

```bash
npm install vue-uwp --save # OR yarn add vue-uwp
```

Once VueUwp is installed in your project, somewhere in your JavaScript code use it as follows:

```js
import Vue from 'vue';
import VueUwp from 'vue-uwp';

Vue.use(VueUwp);
```
