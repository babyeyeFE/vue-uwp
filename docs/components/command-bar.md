## CommandBar

<ex-commandBar />

### props

#### commandList

``` js
commandList = [
  {
    name: [command-name]<Strings>,
    command: <Function>,
    icon: [MDL2-icon-name]<Strings>
  },
  ...
]
```

```html
<template>
  <div>
    <u-command-bar :commandList="CommandList" />
  </div>
</template>

<script>
export default {
  name: 'ex-commandBar',
  data() {
    return {
      CommandList: [
        {
          name: '设置',
          command: this.hello,
          icon: 'Settings'
        },
        {
          name: '开始',
          command: this.hello,
          icon: 'Play'
        },
        {
          name: '结束',
          command: this.hello,
          icon: 'PowerButton'
        },
        {
          name: '训练说明',
          command: _ => _,
          icon: 'TrackersMirrored'
        },
        {
          name: '操作说明',
          command: _ => _,
          icon: 'Touch'
        },
        {
          name: '最大化',
          command: this.hello,
          icon: 'FullScreen'
        }
      ]
    }
  },
  methods: {
    hello(){
      alert('Hello')
    }
  }
}
</script>
```
