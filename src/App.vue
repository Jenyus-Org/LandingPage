<template>
  <v-app>
    <v-app-bar app color="#CC0033" elevate-on-scroll dark>
      <router-link to="/" class="d-flex align-center">
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
            <v-list-item to="/">
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>

            <v-list-item to="/about">
              <v-list-item-icon>
                <v-icon>mdi-information-variant</v-icon>
              </v-list-item-icon>
              <v-list-item-title>About</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list></template
      >
    </v-navigation-drawer>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer dark padless app elevation="12" absolute>
      <v-card
        flat
        tile
        color="#CC0033"
        class="lighten-1 white--text text-center"
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
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
          Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
          accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim
          a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula
          lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus
          iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum
          tempor vel ut orci. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Jenyus Org</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
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
  mounted() {
    this.$refs.nav.$el.addEventListener("click", () => (this.drawer = false));
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.v-navigation-drawer {
  background-color: #cc0033 !important;

  .sidenav-link--active {
    color: white;
  }
}
</style>
