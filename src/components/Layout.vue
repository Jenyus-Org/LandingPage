<template>
  <v-app>
    <v-app-bar app color="#CC0033" elevate-on-scroll dark>
      <router-link :to="{ name: 'Home' }" class="d-flex align-center">
        <v-img
          alt="Jenyus Logo"
          class="shrink mr-2"
          contain
          src="/res/img/Jenyus_cropped_white_logo.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Jenyus Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="/res/img/Jenyus_cropped_white_text.png"
          width="100"
        />
      </router-link>

      <v-spacer></v-spacer>

      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            {{ locale.toUpperCase() }}
            <v-icon>mdi-menu-down</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="lang in languageArray"
            :key="lang"
            @click="changeLocale(lang)"
          >
            <v-list-item-title>{{ lang.toUpperCase() }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      temporary
      right
      width="100%"
      dark
      app
      ref="nav"
    >
      <template slot="prepend">
        <router-link to="/">
          <v-img
            alt="Jenyus Logo"
            width="100"
            class="d-block mx-auto my-16"
            contain
            src="/res/img/Jenyus_cropped_white.png"
          />
        </router-link>
      </template>
      <template
        ><v-list nav>
          <v-list-item-group active-class="sidenav-link--active">
            <v-list-item :to="{ name: 'Home' }" exact>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ $t("home") }}</v-list-item-title>
            </v-list-item>

            <v-list-item :to="{ name: 'About' }">
              <v-list-item-icon>
                <v-icon>mdi-information-variant</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ $t("aboutUs") }}</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list></template
      >
    </v-navigation-drawer>

    <v-main>
      <v-container fluid class="px-0 py-0">
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer dark padless app elevation="12" absolute>
      <v-card
        flat
        tile
        color="#CC0033"
        class="lighten-1 white--text text-center"
        width="100%"
      >
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon.link"
            :href="icon.link"
            target="_blank"
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">
              {{ icon.icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          <i18n path="footerLine">
            <v-icon>mdi-heart</v-icon>
            <strong>2020</strong>
          </i18n>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          <strong>Jenyus Org</strong> © {{ new Date().getFullYear() }}
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import { languages } from "@/plugins/i18n";
import { mapActions, mapState } from "vuex";

export default {
  data: function () {
    return {
      languageArray: languages,
      drawer: false,
      icons: [
        {
          icon: "mdi-facebook",
          link: "",
        },
        {
          icon: "mdi-twitter",
          link: "",
        },
        {
          icon: "mdi-linkedin",
          link: "",
        },
        {
          icon: "mdi-instagram",
          link: "",
        },
        {
          icon: "mdi-discord",
          link: "",
        },
      ],
    };
  },
  computed: {
    ...mapState(["locale"]),
  },
  methods: {
    ...mapActions(["changeLocale"]),
  },
  mounted() {
    this.$refs.nav.$el.addEventListener("click", () => (this.drawer = false));
  },
};
</script>

<style lang="scss">
.v-navigation-drawer {
  background-color: #cc0033 !important;

  .sidenav-link--active {
    color: white;
  }
}

.v-main {
  align-items: stretch;
}

.container {
  min-height: 100%;
  display: flex;
  align-items: stretch;
}
</style>
