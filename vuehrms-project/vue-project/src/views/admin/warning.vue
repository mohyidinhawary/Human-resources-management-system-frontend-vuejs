<template>
  <v-container fluid>
    <h1
      class="mb-12"
      style="
        color: #e56f51;
        text-align: center;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
          'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        position: center;
      "
    >
      Manage Warning
    </h1>
    <v-text-field
      variant="outlined"
      color="#e8c36b"
      v-model="search"
      prepend-inner-icon="mdi-magnify"
      label="Search"
      single-line
      hide-details
    ></v-text-field>
    <v-card>
      <v-table fixed-header class="data-table">
        <thead>
          <tr>
            <th class="text-left">Warning To</th>

            <th class="text-left">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="warning in searchFilter" :key="warning.subject">
            <td>{{ warning.to }}</td>
            <td>{{ warning.Details }}</td>
            <td>
              <v-btn @click="edit(warning)" color="#e9c46a"
                ><p>Edit</p>
                <div class="d-flex justify-space-around">
                  <v-icon color="white">mdi-pencil</v-icon>
                </div>
              </v-btn>
              <v-btn class="ml-3" color="#299c8d"
                >Delete
                <v-icon color="white">mdi-delete</v-icon>
              </v-btn>
            </td>
          </tr>
        </tbody>
      </v-table>
    </v-card>

    <v-row justify="center">
      <v-dialog v-model="dialog" persistent>
        <template v-slot:activator="{ props }">
          <v-btn class="button-add" color="#e56f51" v-bind="props">
            New Warning
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="text-h5">Warnings Details</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="subject"
                    required
                    variant="outlined"
                    color="#e8c36b"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-textarea
                    label="Details"
                    variant="outlined"
                    color="#e8c36b"
                  ></v-textarea>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="#264653" text @click="dialog = false"> Close </v-btn>
            <v-btn color="#e56f51" text @click="dialog = false"> Create </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>
<script>
import { toRaw } from "@vue/reactivity";
export default {
  data: () => ({
    warnings: [
      {
        to: "",
        Details: "",
      },
    ],
    search: "",
    dialog: false,
  }),
  methods: {
    edit(warning) {
      console.log(toRaw(warning));
    },
  },
  computed: {
    searchFilter() {
      let search = this.search;
      let warnings = this.warnings;
      if (search) {
        return warnings.filter((item) => {
          return search
            .toLowerCase()
            .split(" ")
            .every((ch) => item.subject.toLowerCase().includes(ch));
        });
      } else {
        return warnings;
      }
    },
  },
};
</script>

<style>
.button-add {
  bottom: 0.4cm;
  position: fixed !important;
  right: 0.4cm !important;
}
</style>
