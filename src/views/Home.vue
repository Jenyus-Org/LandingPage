<template>
  <div class="home">
    <transition appear name="fade">
      <v-card flat tile dark class="fullscreen-card text-center py-4">
        <img
          src="/res/img/Jenyus.png"
          contain
          height="60%"
          class="jenyus-logo"
        />
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
    </transition>
    <v-card flat tile class="fullscreen-card text-center py-4">
      <v-card-title class="d-inline-block my-4 text-h3 font-weight-bold">
        {{ $t("theTeam") }}
      </v-card-title>
      <v-container>
        <v-row>
          <v-col v-for="member in teamMembers" :key="member.name">
            <v-card class="mx-auto" max-width="434" tile>
              <v-img
                height="100%"
                src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
              >
                <v-row align="end" class="fill-height">
                  <v-col align-self="start" class="pa-0" cols="12">
                    <v-avatar class="profile" color="grey" size="164" tile>
                      <v-img
                        :src="member.img"
                      ></v-img>
                    </v-avatar>
                  </v-col>
                  <v-col class="py-0">
                    <v-list-item color="rgba(0, 0, 0, .4)" dark>
                      <v-list-item-content>
                        <v-list-item-title class="title">
                          {{ member.name }}
                        </v-list-item-title>
                        <v-list-item-subtitle
                          >{{ member.position }}</v-list-item-subtitle
                        >
                      </v-list-item-content>
                    </v-list-item>
                  </v-col>
                </v-row>
              </v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      teamMembers: [
        {
          name: "Dominik Berger",
          img: "/res/img/dominik.jpg",
          position: this.$t("ceo"),
        },
        {
          name: "RaviAnand Mohabir",
          img: "/res/img/ravi_2_1_cropped_1.png",
          position: this.$t("cto"),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.fullscreen-card {
  height: calc(100vh - 64px);

  .jenyus-logo {
    max-width: 80%;
  }
}

.v-card__title {
  word-break: normal;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

@media (max-width: 960px) {
  .fullscreen-card {
    height: calc(100vh - 56px);
  }
}

@media (max-aspect-ratio: 9/16) {
  .jenyus-logo {
    height: auto;
  }
}
</style>
