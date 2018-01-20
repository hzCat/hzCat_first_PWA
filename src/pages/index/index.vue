<template>
  <div class="container">
    <div class="title">期末考试</div>
    <div class="nowScore">现在得分:{{nowScore}}</div>
    <div class="score">满分100分,一道题{{score}}分,自行四舍五入</div>
    <!-- 结束 -->
    <div v-if="index>QSlength">结束</div>
    <div class="btn-group">
      <button @click="begin()" v-if="index==0" class="begin-btn">开始</button>
    </div>
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
        // 问题1
        {
          question: "1111你知道了什么不知道",
          selects: [
            { content: "hello", isRight: false },
            { content: "hello", isRight: true },
            { content: "hello", isRight: false }
          ]
        },
        // 问题2
        {
          question: "22222你知道么都不知道",
          selects: [
            { content: "hello1", isRight: false },
            { content: "hello", isRight: false },
            { content: "hello2", isRight: true },
            { content: "hello", isRight: false }
          ]
        },
        // 问题3
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
      QSlength: null,
      // 分数
      score: 0,
      // 现在分数
      nowScore: 0
    };
  },
  mounted() {
    let arr = this.Qs;
    let length = arr.length;
    let score = (100 / length).toFixed(3);
    this.score = score;
    this.QSlength = length;
    console.log("问题长度", length);
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
    over() {}
  }
};
</script>
