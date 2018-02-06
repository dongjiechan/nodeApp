<template>
  <div id="detial">
   <mt-header fixed title="查看详情">
      <router-link to="/" slot="left">
      <mt-button icon="back">返回</mt-button>
    </router-link>
    <!-- <mt-button icon="more" slot="right"></mt-button> -->
  </mt-header>
    <p>{{$route.params.content}}</p>
  </div>
</template>
<script>
export default {
  name: 'detail',
  data () {
    return {
      msg: '详情'
    }
  }
}
</script>
<style  lang="less" scoped>
p{
  word-break:break-word;
  margin-top: 60px;
  text-align: left;
  color: #333;
}
</style>
