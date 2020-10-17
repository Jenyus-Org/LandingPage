<template>
  <router-view></router-view>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "app",
  computed: mapState(["locale"]),
  watch: {
    locale() {
      this.$router.replace({ params: { lang: this.locale } }).catch(() => {});
    },
  },
  methods: {
    ...mapActions(["changeLocale"]),
  },
  created() {
    this.changeLocale(this.locale);
  },
};
</script>
