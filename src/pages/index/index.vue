<template>
  <div class="container">
    <div class="title">期末考试</div>
    <div class="score">满分100分,一道题{{score}}分,自行四舍五入</div>
    <div class="stu">
      <label for="stu-name">学生姓名:</label>
      <input class="stu-name" :class="{'err-name':errName}" type="text" placeholder="请输入你的名字" v-model="student">
    </div>
    <div class="teacher">
      <label for="stu-name">指导老师:</label>
      <input class="stu-name" :class="{'err-name':errName}" type="text" placeholder="请输入你的名字" v-model="teacher">
    </div>
    <div class="nowScore">现在得分 :
      <span class="score-red">{{nowScore}}</span>
    </div>

    <!-- 结束 -->
    <div v-if="index>QSlength" class="end">结束
      <br>总分数:{{nowScore}}
      <br>{{nowScore>=60?'狗日的,居然还及格了':'妈蛋,我草,这你都没及格'}}</div>
    <div class="btn-group">
      <button @click="begin()" v-if="index==0" class="begin-btn">开始</button>
    </div>
    <QSmodal :open="qsOpen" :question="nowQs" :index="nowIndex" @answer="getAnswer" :student="student" :teacher="teacher"></QSmodal>
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
          question: "你知道我的生日吗",
          selects: [
            {
              content: "1999-09-06",
              isRight: false
            },
            {
              content: "1989-08-12",
              isRight: false
            },
            {
              content: "我晓得个锤子",
              isRight: true
            }
          ]
        },
        // 问题2
        {
          question: "我说我喜欢师妹你信吗?",
          selects: [
            {
              content: "信",
              isRight: true
            },
            {
              content: "不信",
              isRight: false
            },
            {
              content: "管求得你信不信哦!",
              isRight: true
            }
          ]
        },
        // 问题3
        {
          question: "说说我的小名",
          selects: [
            {
              content: "毛蛋",
              isRight: false
            },
            {
              content: "毛球",
              isRight: false
            },
            {
              content: "毛毛",
              isRight: true
            },
            {
              content: "球球",
              isRight: false
            },
            {
              content: "乖乖",
              isRight: false
            }
          ]
        },
        // 问题3
        {
          question: "这他妈是道送分题?",
          selects: [
            {
              content: "送分了送分了",
              isRight: false
            },
            {
              content: "送分了送分分了",
              isRight: false
            }
          ]
        },
        // 问题3
        {
          question: "我是不是喜欢男的?",
          selects: [
            {
              content: "是",
              isRight: true
            },
            {
              content: "不是",
              isRight: false
            }
          ]
        },
        // 问题3
        {
          question: "我是不是有点黑?",
          selects: [
            {
              content: "是",
              isRight: false
            },
            {
              content: "不是",
              isRight: false
            },
            {
              content: "好几把黑",
              isRight: true
            }
          ]
        },
        // 问题3
        {
          question: "我帅不帅?",
          selects: [
            {
              content: "????",
              isRight: false
            },
            {
              content: "????",
              isRight: false
            },
            {
              content: "不好说",
              isRight: true
            }
          ]
        },
        // 问题3
        {
          question: "我最喜欢Loli了",
          selects: [
            {
              content: "变态",
              isRight: true
            },
            {
              content: "看选项一",
              isRight: true
            },
            {
              content: "判你个无期",
              isRight: true
            }
          ]
        },
        // 问题3
        {
          question: "都说我长的像明星,好害羞啊,你觉得我像哪个?",
          selects: [
            {
              content: "吴耀汉",
              isRight: true
            },
            {
              content: "潘长江",
              isRight: true
            },
            {
              content: "没出道的潘玮柏",
              isRight: true
            }
          ]
        },
        // 问题3
        {
          question: "你有没有摸过瑶瑶",
          selects: [
            {
              content: "摸过,湿湿的",
              isRight: true
            },
            {
              content: "不仅摸过,还闻过,有点~~~",
              isRight: true
            },
            {
              content: "有点想摸呢!!!/害羞",
              isRight: true
            }
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
      nowScore: 0,
      //学生
      student: null,
      //老师
      teacher: null,
      //名称错误
      errName: false
    };
  },
  mounted() {
    let arr = this.Qs;
    let length = arr.length;
    let score = Number((100 / length).toFixed(2));
    this.score = score;
    this.QSlength = length;
    console.log("问题长度", length);
  },

  methods: {
    begin() {
      if (this.teacher && this.student) {
        this.errName = false;
        this.result = null;
        this.qsOpen = true;
        this.nowIndex = this.index;
        let obj = this.Qs[this.index];
        this.nowQs = obj;
        console.log(obj);
        let idx = this.index + 1;
        this.index = idx;
      } else {
        let i = 0;
        let timer = setInterval(() => {
          i++;
          if (i % 2 == 0) {
            this.errName = false;
          } else if (i % 2 != 0) {
            this.errName = true;
          }
          if (i == 11) {
            this.errName = true;
            clearInterval(timer);
            timer = null;
          }
        }, 400);
      }
    },
    getAnswer(e) {
      let answer = e.isTrue;
      let nowScore = this.nowScore;
      let oneScore = this.score;
      console.log("收到结果1", nowScore);
      console.log("收到结果2", oneScore);
      this.qsOpen = false;
      if (answer == true) {
        nowScore += oneScore;
      }
      // setTimeout(() => {
      this.result = answer;
      this.nowScore = nowScore;
      this.resOpen = true;
      // }, 500);
    },
    nextQS(e) {
      let isNext = e.next;
      if (isNext) {
        this.resOpen = false;
        // setTimeout(() => {
        this.begin();
        // }, 500);
      }
    },
    over() {}
  }
};
</script>
