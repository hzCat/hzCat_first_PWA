<template>
  <div>
    <button @click="begin()">开始</button>
    <QSmodal :open="qsOpen" :question="nowQs" :index="nowIndex" @answer="getAnswer"></QSmodal>
  </div>
</template>
<script>
import "./style.css";
import QSmodal from "../../components/QSmodal/index.vue";
export default {
  components: {
    QSmodal
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
      index: 0,
      nowIndex: 0,
      nowQs: [],
      qsOpen: false,
      resOpen: false,
      result: null
    };
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
      console.log(e);
      let answer = e.isTure;
      this.result = answer;
      this.qsOpen = false;
    }
  }
};
</script>
