<template>
  <v-card max-width="500" class="ma-auto pa-2" flat>
    <v-form ref="form" v-model="valid" lazy-validation>
       <v-text-field
        color="#e8c36b"
        variant="outlined"
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>
      <v-text-field
        color="#e8c36b"
        variant="outlined"
        v-model="password"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required, rules.min]"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Normal with hint text"
        hint="At least 8 characters"
        counter
        @click:append="show1 = !show1"
      ></v-text-field>

      <v-btn block color="#e9c46a" @click="submit">
        <h2 class="gray">{{$t("login")}}</h2>
      </v-btn>
    </v-form>
  </v-card>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    valid: true,
    email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
    show1: false,
    password: "",
    rules: [
      (value) => !!value || "Required.",
      (v) => v.length >= 8 || "Min 8 characters",
      (v) => `The email and password you entered don't match`,
    ],
  }),

  methods: {
    submit() {
      // this.$refs.form.validate()
      if (this.password == "admin") {
        this.$router.push("/admin/employees");
      } else if (this.password == "user") {
        localStorage.setItem("session", "user");
        this.$router.push("/user/stafftimeuser");
      } else {
        alert("check password");
      }
    },
    getData() {
      axios
        .get("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => {
          console.log(response);
        });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
