<template>
  <div class="home">
    <v-card flat tile height="100%" dark class="text-center py-4">
      <img src="/res/img/Jenyus.png" contain height="60%" class="jenyus-logo" />
      <div class="mb-4">
        <v-card-title class="d-inline-block my-4">
          {{ $t("tagline") }}
        </v-card-title>
        <br />
        <v-btn color="#CC0033" dark rounded :to="{ name: 'About' }">{{
          $t("aboutUs")
        }}</v-btn>
      </div>
    </v-card>
  </div>
</template>

<style lang="scss" scoped>
.home {
  min-height: 100%;
  flex: 1 1 auto;
}

.jenyus-logo {
  max-width: 80%;
}

.v-card__title {
  word-break: normal;
}

@media (max-aspect-ratio: 9/16) {
  .jenyus-logo {
    height: auto;
  }
}
</style>
