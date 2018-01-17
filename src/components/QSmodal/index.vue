<template>
  <div class="modal-con" v-if="open">
      <div class="modal">
          <div class="header">第 {{index+1}} 题</div>
          <div class="name">{{Qname||'提问人'}} :</div>
          <div class="question">{{question.question}}</div>
          <div class="answer">
            <div class="select" v-for="(item,index) in question.selects" :key="index" @click="choose(index)">
              <span>{{index+1}} .</span>
              <span>{{item.content}}</span>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import "./style.css";
export default {
  props: ["index", "question", "open"],
  data() {
    return {
      // Qindex: 1,
      Qname: "张颜"
      // question: "你知道了什么,我什么都不知道",
      // selects: [
      //   { content: "hello", isRight: false },
      //   { content: "hello", isRight: true },
      //   { content: "hello", isRight: false }
      // ]
    };
  },
  methods: {
    choose(e) {
      console.log(e);
      this.isRight(e);
    },
    isRight(index) {
      let arr = this.question.selects;
      let obj = arr[index];
      let answerRight = obj.isRight;
      console.log(answerRight);
      this.$emit("answer", { isTrue: answerRight });
    }
  }
};
</script>
