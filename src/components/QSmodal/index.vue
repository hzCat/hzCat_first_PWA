<template>
  <div class="QS-con" v-show="open">
     <transition enter-active-class="animated lightSpeedIn" leave-active-class="animated hinge">
      <div class="modal" v-show="modalOpen">
          <div class="header">第 {{index+1}} 题</div>
          <div class="name">{{teacher||'老师'}} 问: </div>
          <div class="question">{{question.question}}</div>
          <div class="QS-stu">{{student||'学生'}} 回答:</div>
          <div class="answer">
            <div class="select" v-for="(item,index) in question.selects" :key="index" @click="choose(index)">
              <span>{{index+1}} .</span>
              <span>{{item.content}}</span>
            </div>
          </div>
      </div>
    </transition>
  </div>
</template>

<script>
import "./style.css";
export default {
  props: ["index", "question", "open", "student","teacher"],
  data() {
    return {

      // Qname: "色姚姚",
      modalOpen: false
  
    };
  },
  watch: {
    open() {
      console.log(this.open);
      if (this.open == true) {
        setTimeout(() => {
          this.modalOpen = true;
        }, 100);
      }
    }
  },
  methods: {
    choose(e) {
      console.log(e);
      this.isRight(e);
    },
    isRight(index) {
      let arr = this.question.selects;
      console.log(arr);
      let obj = arr[index];
      this.modalOpen = false;
      let answerRight = obj.isRight;
      console.log(answerRight);
      setTimeout(() => {
        this.$emit("answer", { isTrue: answerRight });
      }, 2300);
    }
  }
};
</script>
