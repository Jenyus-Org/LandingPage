<template>
  <div class="home" style="height: 100%">
    <v-card flat tile height="100%" dark class="text-center">
      <v-img src="/res/img/Jenyus.png" contain height="40%" />
      <div class="mb-4">
        <v-card-title class="d-inline-block my-4">
          Individual IT solutions for your brand.
        </v-card-title>
        <br />
        <v-btn color="#CC0033" dark rounded :to="{ name: 'About' }">{{
          $t("aboutUs")
        }}</v-btn>
      </div>
    </v-card>
  </div>
</template>
