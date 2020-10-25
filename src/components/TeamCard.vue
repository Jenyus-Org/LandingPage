<template>
  <v-card class="mx-auto member-card text-center py-2">
    <v-row align="end" class="fill-height">
      <v-col align-self="start" cols="12">
        <v-badge
          v-if="member.badge"
          color="#CC0033"
          :content="member.badge"
          overlap
        >
          <v-avatar class="profile" color="grey" size="164">
            <v-img :src="member.img"></v-img>
          </v-avatar>
        </v-badge>
      </v-col>
      <v-col class="py-0" cols="12">
        <v-list-item color="rgba(0, 0, 0, .4)">
          <v-list-item-title class="title mb-4">
            {{ member.name }}
          </v-list-item-title>
        </v-list-item>
        <v-list-item>
          <div
            class="d-flex flex-column justify-center align-center"
            style="width: 100%"
          >
            <span>
              <v-icon left>mdi-web</v-icon>
              <a :href="'https://' + member.website" target="_blank">
                {{ member.website }}
              </a>
            </span>
          </div>
        </v-list-item>
        <v-list-item color="rgba(0, 0, 0, .4)">
          <v-list-item-content>
            <div class="d-flex">
              <v-chip
                v-for="position in member.positions"
                :key="position.name"
                class="mr-2"
                color="#CC0033"
                outlined
              >
                <v-icon left>{{ position.icon }}</v-icon>
                {{ position.name }}
              </v-chip>
            </div>
          </v-list-item-content>
        </v-list-item>
      </v-col>
      <v-col class="py-0" cols="12">
        <v-divider></v-divider>
        <v-card-actions class="pt-3 pl-3">
          <v-icon class="mr-2">mdi-heart</v-icon> {{ member.likes.join(", ") }}
        </v-card-actions>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: ["member"],
};
</script>

<style>
</style>
