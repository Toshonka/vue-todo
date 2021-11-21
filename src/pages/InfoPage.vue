<template>
  <div class="cards">
    <infocard/>
    <formcard/>
  </div>
</template>

<script>
import formcard from "@/components/formcard.vue";
import infocard from "@/components/infocard.vue";
export default {
  name: "InfoPage",
  props: ["msg"],
  components: {
    formcard,
    infocard,
  },
};
</script>