<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->
    <!-- <h2>点击点击</h2> -->
    <!-- <mt-button type="default"  @click="setHandle">default</mt-button> -->
    <!-- <mt-header fixed title="待办事项">
        <mt-button slot="right">分享</mt-button>
    </mt-header>
    <div class="top">
      <input type="text" v-model="msg">
      <mt-button size="small"  @click="addEvents">提交</mt-button>
    </div>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">选项一</mt-tab-item>
      <mt-tab-item id="2">选项二</mt-tab-item>
      <mt-tab-item id="3">选项三</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <mt-cell v-for="n in 10" :key="n" :title="'内容 ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell v-for="n in 4" :key="n" :title="'测试 ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <mt-cell v-for="n in 6" :key="n" :title="'选项 ' + n" />
      </mt-tab-container-item>
    </mt-tab-container> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      noFinished: [],
      selected: '',
      value: ''
    }
  },
  methods: {
    addEvents () {
      if (this.msg) {
        this.noFinished.push(this.msg)
        this.msg = ''
      }
    },
    setHandle () {
      this.$toast('Hello world!')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.top{
  display: flex;
  input{
    width: 340px;
    height: 30px;
    border: 1px solid #dadada;
    // border-radius: 20px;
    padding-left: 10px;
    margin-bottom: 30px;
  }
  button{
    width: 100px;
    height: 30px;
    border:none;
    margin-left: 10px;
    border-radius: 10px;
        }
}
</style>
