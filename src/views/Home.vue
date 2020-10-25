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
    <v-card flat tile class="fullscreen-card py-4">
      <v-card-title
        class="d-inline-block my-4 text-h3 title pl-8 pb-8"
        style="color: #514f50"
      >
        {{ $t("theTeam") }}
      </v-card-title>

      <v-container>
        <v-row>
          <v-col
            style="flex: 1; min-width: 450px"
            v-for="member in teamMembers"
            :key="member.name"
          >
            <team-card :member="member" />
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import TeamCard from "../components/TeamCard";

export default {
  components: {
    TeamCard,
  },
  data() {
    return {
      teamMembers: [
        {
          name: "Dominik Berger",
          img: "/res/img/dominik.jpg",
          positions: [
            { name: this.$t("ceo"), icon: "mdi-account" },
            { name: this.$t("graphicDesigner"), icon: "mdi-brush" },
          ],
          badge: this.$t("cofounder"),
          website: "doemuu.github.io",
          likes: ["Vue", "C#", "ASP.NET Core"],
        },
        {
          name: "RaviAnand Mohabir",
          img: "/res/img/ravi_2_1_cropped_1.png",
          positions: [
            { name: this.$t("cto"), icon: "mdi-account" },
            { name: this.$t("leadDeveloper"), icon: "mdi-laptop" },
          ],
          badge: this.$t("cofounder"),
          website: "dan6erbond.github.io",
          likes: ["React", "Vue", "Python"],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.fullscreen-card {
  min-height: calc(100vh - 64px);

  .jenyus-logo {
    max-width: 80%;
  }

  & > .title {
    display: block;
    width: 100%;
    border-bottom: solid 1px #dee2e6;
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
    min-height: calc(100vh - 56px);
  }
}

@media (max-aspect-ratio: 9/16) {
  .jenyus-logo {
    height: auto;
  }
}
</style>
