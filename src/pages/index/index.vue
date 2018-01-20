<template>
  <div>
    <button @click="begin()">开始</button>
    <QSmodal :open="qsOpen" :question="nowQs" :index="nowIndex" @answer="getAnswer"></QSmodal>
    <RESmodal :open="resOpen" :answer="result" @next="nextQS"></RESmodal>
  </div>
</template>
<script>
import "./style.css";
import QSmodal from "../../components/QSmodal/index.vue";
import RESmodal from "../../components/resultModal/index";
export default {
  components: {
    QSmodal,
    RESmodal
  },
  data() {
    return {
      Qs: [
        {
          question: "1111你知道了什么不知道",
          selects: [
            { content: "hello", isRight: false },
            { content: "hello", isRight: true },
            { content: "hello", isRight: false }
          ]
        },
        {
          question: "22222你知道么都不知道",
          selects: [
            { content: "hello1", isRight: false },
            { content: "hello", isRight: false },
            { content: "hello2", isRight: true },
            { content: "hello", isRight: false }
          ]
        },
        {
          question: "33333你知么都不知道",
          selects: [
            { content: "hello", isRight: false },
            { content: "hello", isRight: true },
            { content: "hello", isRight: false },
            { content: "hello", isRight: false },
            { content: "hello", isRight: false }
          ]
        }
      ],
      // 当前页面计数
      index: 0,
      // 传出计数
      nowIndex: 0,
      // 传出问题
      nowQs: [],
      // 是否打开 qsmodal
      qsOpen: false,
      // 是否打开 结果modal
      resOpen: false,
      // 传出结果
      result: null,
      // 问题长度
      QSlength: null
    };
  },
  mounted() {
    let arr = this.Qs;
    let length = arr.length;
    this.QSlength = length;
    console.log("问题长度",length);
  },

  methods: {
    begin() {
      this.result = null;
      this.qsOpen = true;
      this.nowIndex = this.index;
      let obj = this.Qs[this.index];
      this.nowQs = obj;
      console.log(obj);
      let idx = this.index + 1;
      this.index = idx;
    },
    getAnswer(e) {
      let answer = e.isTrue;
      console.log("收到结果", e);
      console.log("收到结果", answer);
      this.qsOpen = false;
      setTimeout(() => {
        this.result = answer;
        this.resOpen = true;
      }, 500);
    },
    nextQS(e) {
      let isNext = e.next;
      if (isNext) {
        this.resOpen = false;
        setTimeout(() => {
          this.begin();
        }, 500);
      }
    },
    over(){
      
    }
  }
};
</script>
