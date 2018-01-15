<template>
  <div class="container">
    <div class="input-group">
      <input type="text" placeholder="请输入" v-model='msg'/>
      <button @click="getValue()">确认</button>
    </div>
    
    <div class="qs-container" v-html="putInfo">
      
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "",
      putInfo: "",
      now: 0,
      girlName: "张颜",
      boyName: "???",
      allQ: ["问题一", "问题2", "问题3", "问题4", "问题5", "问题6"]
    };
  },
  beforeMount() {
    let str = `<div class='question'>${this.girlName} : ${
      this.allQ[this.now]
    }</div>`;
    this.putInfo = str;
    let info = navigator.userAgent;
    console.log(info);
  },
  watch: {
    now() {
      let num = this.now;
      console.log("watch", num);
      let oldInfo = this.putInfo;
      let qs = "";

      let str = `${oldInfo}<div class="question">${this.girlName} : ${
        this.allQ[this.now]
      }</div>`;
      this.putInfo = str;
    }
  },
  methods: {
    getValue() {
      let oldInfo = this.putInfo;
      let count = this.now;
      let str = `${oldInfo}<div class="answer">${this.msg} : ${
        this.boyName
      }</div>`;
      this.putInfo = str;
      this.msg = "";
      this.now = count + 1;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.qs-container {
  margin-top: 30px;
  width: 100%;
  /* padding: 0 40px; */
}
.question,
.answer {
  width: 100%;
  padding: 12px 20px;
}
.question {
  text-align: left;
}
.answer {
  text-align: right;
}
a {
  color: #42b983;
}
</style>
