<template>
  <div class="res-con" :class="{openres:open}">
    <div class="modal">
      <div class="true" v-if="answer">对了对了</div>
      <div class="false" v-if="!answer">错了错了</div>
      <button @click="nextQS()">下一题</button>
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
  methods: {
    nextQS() {
      // this.open = false;
      this.$emit("next", { next: true });
    }
  }
};
</script>
