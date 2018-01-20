<template>
  <div class="res-con" v-show="open">
    <div class="modal">

      <transition enter-active-class="animated rubberBand">
        <div class="words true" v-show="thisAnswer==true">对了对了</div>
      </transition>

      <transition enter-active-class="animated wobble">
        <div class="words false" v-show="thisAnswer==false">错了错了</div>
      </transition>
      <button @click="nextQS()" class="next">下一题</button>
    </div>
  </div>
</template>

<script>
import "./style.css";
export default {
  props: ["open", "answer"],
  data() {
    return {
      thisAnswer:null
    };
  },
  // 有更新时
  updated() {},
  watch: {
    answer() {
      if (this.answer==true) {
        setTimeout(() => {
          this.thisAnswer=true
        }, 100);
      }else if(this.answer==false){
        setTimeout(() => {
          this.thisAnswer=false
        }, 100);
      }
    }
  },
  methods: {
    nextQS() {
      this.thisAnswer = null;
      this.$emit("next", {
        next: true
      });
    }
  }
};
</script>
