<template>
  <div class="res-con" :class="{openres:open}">
    <div class="modal">
      <div class="words true" v-if="answer">对了对了</div>
      <div class="words false" v-if="!answer">错了错了</div>
      <button @click="nextQS()" class="next">下一题</button>
    </div>
  </div>
</template>

<script>
import "./style.css";
export default {
  props: ["open", "answer"],
  data() {
    return {};
  },
  // 有更新时
  updated(){

  },
  methods: {
    nextQS() {
      // this.open = false;
      this.$emit("next", { next: true });
    }
  }
};
</script>
