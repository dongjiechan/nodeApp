<template>
  <div class="index">
    <mt-header fixed title="待办事项">
        <mt-button slot="right">分享</mt-button>
    </mt-header>
    <div class="top">
      <input type="text" v-model="content" placeholder="请输入待办事务">
      <mt-button size="small"  @click="submit">添加</mt-button>
    </div>
    <div class="noDone">
      <p  class="title">未完成</p>
      <div v-for="n in state.Index.event" :key="n.id" v-if="n.type===1" class="content" >
        <p  class="nText"><input type="checkbox" v-model="checkList" :value="n.id" @change="setDone"><span @click="jump(n.content)">{{n.content}}</span></p>
        <p><span>{{n.time}}</span></p>
        <div><mt-button type="default" @click.native="notTodo(n.id)" size="small" >取消</mt-button></div>
      </div>
    </div>
    <div class="noDone">
      <p class="title">完成</p>
      <div class="content"  v-for="n in state.Index.event" :key="n.id" v-if="n.type===2">
        <p class="nText">
          <span  @click="jump(n.content)">{{n.content}}</span>
        </p>
        <p><span>{{n.time}}</span></p>
        <div><mt-button type="default" @click.native="notTodo(n.id)" size="small" >取消</mt-button></div>
      </div>
    </div>
    <div class="noDone">
      <p class="title clear"><span>取消</span><span style="padding-right:10px;" @click="setClear">[清空]</span></p>
      <div class="content"  v-for="n in state.Index.event" :key="n.id" v-if="n.type===3">
        <p class="nText">
          <span  @click="jump(n.content)">{{n.content}}</span>
        </p>
        <p><span>{{n.time}}</span></p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
// import 'babel-polyfill'
import store from '../../vuex/store'

export default {
  name: 'Index',
  data () {
    return {
      msg: '',
      content: '',
      checkList: [],
      noFinished: [],
      noDone: [],
      Done: [],
      Cancel: [],
      selected: 1,
      value: ''
    }
  },
  computed: {
    ...mapActions([
      'ADDEVENT',
      'SETDONE',
      'CLEAR'
    ]),
    state () {
      return store.state
    }
  },
  components: {
  },
  methods: {
    setTime (value) {
      // 转换时间
      const time = new Date()
      let outData = ''
      if (value !== '') {
        const YY = time.getFullYear()
        const MM = (time.getMonth() + 1) <= 10 ? `0${(time.getMonth() + 1)}` : `${(time.getMonth() + 1)}`
        const DD = (time.getDate() + 1) <= 10 ? `0${time.getDate()}` : `${time.getDate()}`
        const HH = (time.getHours()) <= 10 ? `0${time.getHours()}` : `${time.getHours()}`
        const mm = (time.getMinutes()) <= 10 ? `0${time.getMinutes()}` : `${time.getMinutes()}`
        const ss = (time.getSeconds()) <= 10 ? `0${time.getSeconds()}` : `${time.getSeconds()}`
        outData = `${YY}-${MM}-${DD} ${HH}: ${mm}:${ss} `
      }
      return outData
    },
    submit () {
      const that = this
      const params = {
        id: 0,
        type: 1,
        content: '',
        time: ''
      }
      // that.content = that.content.trim()
      if (that.content) {
        params.content = that.content
        params.time = this.setTime()
        store.dispatch('ADDEVENT', params)
        that.content = ''
        that.$toast('添加成功')
      }
    },
    setHandle () {
      this.$toast('Hello world!')
    },
    setDone () {
      if (this.checkList.length) {
        store.dispatch('SETDONE', this.checkList[0])
        this.checkList = []
      }
    },
    notTodo (ID) {
      store.dispatch('NOTTODO', ID)
    },
    setClear () {
      store.dispatch('CLEAR')
    },
    jump (text) {
      // 路由带参数
      this.$router.push({ path: '/index/detail', name: '详情', params: { content: text } })
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
p{
  text-align: left;
  padding-left:10px;
}
button{
  font-size: 14px;
}
.index{
  margin-top: 60px;
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
.noDone{
  .title{
    height: 35px;
    line-height: 35px;
    color: #fff;
    background: #26a2f1; // #c20c0c;
    button{
      float: right;
    }
  }
  .content{
    .nText{
      width: 105px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    min-height: 40px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    p{
      margin-top: 12px;
    }
  }
  .clear{
    display: flex;
    justify-content: space-between;
  }
  .finish-time{
    padding-left: 35px;
  }
}
</style>
