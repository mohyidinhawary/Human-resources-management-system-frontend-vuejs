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
      Manage Employee
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
    <v-table fixed-header class="data-table">
      <thead>
        <tr>
          <th class="text-left">Employee id</th>
          <th class="text-left">Name</th>
          <th class="text-left">Email</th>
          <th class="text-left">Branch</th>
          <th class="text-left">Department</th>
          <th class="text-left">Job Title</th>
          <th class="text-left">Date Of Joining</th>
          <th class="text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        <!-- <tr v-for="employee in users" :key="employee.id">
          <td>
            <v-btn to="/admin/employe" color="#f2a160">
              {{ employee.employeeid }}
            </v-btn>
          </td>
          <td>{{ employee.name }}</td>
          <td>{{ employee.email }}</td>
          <td>{{ employee.branch }}</td>
          <td>{{ employee.department }}</td>
          <td>{{ employee.jobtitle }}</td>
          <td>{{ employee.dateofjoining }}</td>

          <td>
            <v-btn @click="edit(employee)" color="#e9c46a"
              ><p color="white">Edit</p>
              <div class="d-flex justify-space-around">
                <v-icon color="white">mdi-pencil</v-icon>
              </div>
            </v-btn>
            <v-btn class="ml-3" color="#299c8d"
              >Archive
              <v-icon color="white">mdi-archive</v-icon>
            </v-btn>
          </td>
        </tr> -->
        <tr v-for="(employee, i) in userFilter" :key="employee.id">
          <td>
            <v-btn :to="`/admin/employe/${employee.id}`" color="#f2a160">
              {{ employee.id }}
            </v-btn>
          </td>
          <td>{{ employee.firstName }}</td>
          <td>{{ employee.lastName }}</td>
          <td>{{ employee.domain }}</td>
          <td>{{ employee.maidenName }}</td>
          <td>{{ employee.phone }}</td>
          <td>{{ employee.university }}</td>
          <td>
            <v-btn @click="edit(employee)" color="#e9c46a">
              Edit
              <div class="d-flex justify-space-around">
                <v-icon color="white">mdi-pencil</v-icon>
              </div>
            </v-btn>
          </td>
          <td>
            <v-btn @click="archive(employee, i)" class="ml-3" color="#299c8d"
              >Archive
              <v-icon color="white">mdi-archive</v-icon>
            </v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
    <v-dialog v-model="dialog">
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" class="button-add" color="#e56f51">
          Add
          <v-icon color="white">mdi-account</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5" color="#264653">
          <span>User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  variant="outlined"
                  color="#e8c36b"
                  v-model="newUser.firstName"
                  label="first name*"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  variant="outlined"
                  color="#e8c36b"
                  label=" middle name"
                  hint="example of helper text only on focus"
                  v-model="newUser.maidenName"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  variant="outlined"
                  color="#e8c36b"
                  label=" last name*"
                  v-model="newUser.lastName"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  variant="outlined"
                  color="#e8c36b"
                  label="University"
                  v-model="newUser.university"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  variant="outlined"
                  color="#e8c36b"
                  label="domain*"
                  type="text"
                  v-model="newUser.domain"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  variant="outlined"
                  color="#e8c36b"
                  label="Phone number*"
                  type="Phone number"
                  v-model="newUser.phone"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  variant="outlined"
                  color="#e8c36b"
                  label=" Birthday Day-month-year*"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="6" md="4">
                <v-select
                  variant="outlined"
                  color="#e8c36b"
                  :items="['damascus', 'Homes', 'darra']"
                  label="*City"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-select
                  variant="outlined"
                  color="#e8c36b"
                  :items="['']"
                  label="Area*"
                  required
                ></v-select>
              </v-col>

              <v-col cols="12" sm="6" md="4">
                <v-file-input
                  variant="outlined"
                  color="#e8c36b"
                  label="File input"
                  filled
                  prepend-icon="mdi-camera"
                >
                </v-file-input>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-select
                  variant="outlined"
                  color="#e8c36b"
                  :items="['damascus', 'Homes', 'darra']"
                  label="Branch*"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-select
                  variant="outlined"
                  color="#e8c36b"
                  :items="['damascus', 'Homes', 'darra']"
                  label="Departmint*"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-select
                  variant="outlined"
                  color="#e8c36b"
                  :items="['damascus', 'Homes', 'darra']"
                  label="*Job Title"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  variant="outlined"
                  color="#e8c36b"
                  label=" Date of job Day-month-year*"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  variant="outlined"
                  color="#e8c36b"
                  label=" Basic Salary*"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  variant="outlined"
                  color="#e8c36b"
                  label=" Bank Account Name*"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  variant="outlined"
                  color="#e8c36b"
                  label="Bank Account Details*"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  variant="outlined"
                  color="#e8c36b"
                  label="Certificates*"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  variant="outlined"
                  color="#e8c36b"
                  label="Arrival hour*"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  variant="outlined"
                  color="#e8c36b"
                  label="check-out hour*"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="#264653" text @click="dialog = false"> Close </v-btn>
          <v-btn color="#e56f51" text @click="addNewEmployee"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { toRaw } from "@vue/reactivity";
import axios from "axios";
export default {
  data: () => ({
    isEditing: false,
    model: null,
    states: [],
    dialog: false,
    forms: {
      name: "",
    },
    mounted() {
      console.log(toRaw(this.forms.name));
    },
    newEmploye: {
      fname: "",
      mname: "",
      lname: "",
    },
    employees: [
      {
        employeeid: "",
        name: "",
        email: "",
        branch: "",
        department: "",
        jobtitle: "",
        dateofjoining: "",
      },
    ],
    search: "",
    newUser: {
      firstName: "",
      lastName: "",
      maidenName: "",
      domain: "",
      university: "",
      phone: "",
    },
    users: [
      {
        id: 1,
        firstName: "Terry",
        lastName: "Medhurst",
        maidenName: "Smitham",
        age: 50,
        gender: "male",
        email: "atuny0@sohu.com",
        phone: "+63 791 675 8914",
        username: "atuny0",
        password: "9uQFF1Lh",
        birthDate: "2000-12-25",
        image: "https://robohash.org/hicveldicta.png",
        bloodGroup: "A−",
        height: 189,
        weight: 75.4,
        eyeColor: "Green",
        hair: {
          color: "Black",
          type: "Strands",
        },
        domain: "slashdot.org",
        ip: "117.29.86.254",
        address: {
          address: "1745 T Street Southeast",
          city: "Washington",
          coordinates: {
            lat: 38.867033,
            lng: -76.979235,
          },
          postalCode: "20020",
          state: "DC",
          basicsalary: "",
        },
        macAddress: "13:69:BA:56:A3:74",
        university: "Capitol University",
        bank: {
          cardExpire: "06/22",
          cardNumber: "50380955204220685",
          cardType: "maestro",
          currency: "Peso",
          iban: "NO17 0695 2754 967",
        },
        company: {
          address: {
            address: "629 Debbie Drive",
            city: "Nashville",
            coordinates: {
              lat: 36.208114,
              lng: -86.58621199999999,
            },
            postalCode: "37076",
            state: "TN",
          },
          department: "Marketing",
          name: "Blanda-O'Keefe",
          title: "Help Desk Operator",
        },
        ein: "20-9487066",
        ssn: "661-64-2976",
        userAgent:
          "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/12.0.702.0 Safari/534.24",
      },
      {
        id: 2,
        firstName: "Sheldon",
        lastName: "Quigley",
        maidenName: "Cole",
        age: 28,
        gender: "male",
        email: "hbingley1@plala.or.jp",
        phone: "+7 813 117 7139",
        username: "hbingley1",
        password: "CQutx25i8r",
        birthDate: "2003-08-02",
        image: "https://robohash.org/doloremquesintcorrupti.png",
        bloodGroup: "O+",
        height: 187,
        weight: 74,
        eyeColor: "Brown",
        hair: {
          color: "Blond",
          type: "Curly",
        },
        domain: "51.la",
        ip: "253.240.20.181",
        address: {
          address: "6007 Applegate Lane",
          city: "Louisville",
          coordinates: {
            lat: 38.1343013,
            lng: -85.6498512,
          },
          postalCode: "40219",
          state: "KY",
        },
        macAddress: "13:F1:00:DA:A4:12",
        university: "Stavropol State Technical University",
        bank: {
          cardExpire: "10/23",
          cardNumber: "5355920631952404",
          cardType: "mastercard",
          currency: "Ruble",
          iban: "MD63 L6YC 8YH4 QVQB XHIK MTML",
        },
        company: {
          address: {
            address: "8821 West Myrtle Avenue",
            city: "Glendale",
            coordinates: {
              lat: 33.5404296,
              lng: -112.2488391,
            },
            postalCode: "85305",
            state: "AZ",
          },
          department: "Services",
          name: "Aufderhar-Cronin",
          title: "Senior Cost Accountant",
        },
        ein: "52-5262907",
        ssn: "447-08-9217",
        userAgent:
          "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/534.30 (KHTML, like Gecko) Ubuntu/11.04 Chromium/12.0.742.112 Chrome/12.0.742.112 Safari/534.30",
      },
      {
        id: 3,
        firstName: "Terrill",
        lastName: "Hills",
        maidenName: "Hoeger",
        age: 38,
        gender: "male",
        email: "rshawe2@51.la",
        phone: "+63 739 292 7942",
        username: "rshawe2",
        password: "OWsTbMUgFc",
        birthDate: "1992-12-30",
        image: "https://robohash.org/consequunturautconsequatur.png",
        bloodGroup: "A−",
        height: 200,
        weight: 105.3,
        eyeColor: "Gray",
        hair: {
          color: "Blond",
          type: "Very curly",
        },
        domain: "earthlink.net",
        ip: "205.226.160.3",
        address: {
          address: "560 Penstock Drive",
          city: "Grass Valley",
          coordinates: {
            lat: 39.213076,
            lng: -121.077583,
          },
          postalCode: "95945",
          state: "CA",
        },
        macAddress: "F2:88:58:64:F7:76",
        university: "University of Cagayan Valley",
        bank: {
          cardExpire: "10/23",
          cardNumber: "3586082982526703",
          cardType: "jcb",
          currency: "Peso",
          iban: "AT24 1095 9625 1434 9703",
        },
        company: {
          address: {
            address: "18 Densmore Drive",
            city: "Essex",
            coordinates: {
              lat: 44.492953,
              lng: -73.101883,
            },
            postalCode: "05452",
            state: "VT",
          },
          department: "Marketing",
          name: "Lindgren LLC",
          title: "Mechanical Systems Engineer",
        },
        ein: "48-3951994",
        ssn: "633-89-1926",
        userAgent:
          "Mozilla/5.0 (Windows NT 6.2; Win64; x64; rv:21.0.0) Gecko/20121011 Firefox/21.0.0",
      },
      {
        id: 4,
        firstName: "Miles",
        lastName: "Cummerata",
        maidenName: "Maggio",
        age: 49,
        gender: "male",
        email: "yraigatt3@nature.com",
        phone: "+86 461 145 4186",
        username: "yraigatt3",
        password: "sRQxjPfdS",
        birthDate: "1969-01-16",
        image: "https://robohash.org/facilisdignissimosdolore.png",
        bloodGroup: "B+",
        height: 157,
        weight: 95.9,
        eyeColor: "Gray",
        hair: {
          color: "Blond",
          type: "Very curly",
        },
        domain: "homestead.com",
        ip: "243.20.78.113",
        address: {
          address: "150 Carter Street",
          city: "Manchester",
          coordinates: {
            lat: 41.76556000000001,
            lng: -72.473091,
          },
          postalCode: "06040",
          state: "CT",
        },
        macAddress: "03:45:58:59:5A:7B",
        university: "Shenyang Pharmaceutical University",
        bank: {
          cardExpire: "07/24",
          cardNumber: "3580047879369323",
          cardType: "jcb",
          currency: "Yuan Renminbi",
          iban: "KZ43 658B M6VS TZOU OXSO",
        },
        company: {
          address: {
            address: "210 Green Road",
            city: "Manchester",
            coordinates: {
              lat: 41.7909099,
              lng: -72.51195129999999,
            },
            postalCode: "06042",
            state: "CT",
          },
          department: "Business Development",
          name: "Wolff and Sons",
          title: "Paralegal",
        },
        ein: "71-3644334",
        ssn: "487-28-6642",
        userAgent:
          "Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.17 Safari/537.11",
      },
      {
        id: 5,
        firstName: "Mavis",
        lastName: "Schultz",
        maidenName: "Yundt",
        age: 38,
        gender: "male",
        email: "kmeus4@upenn.edu",
        phone: "+372 285 771 1911",
        username: "kmeus4",
        password: "aUTdmmmbH",
        birthDate: "1968-11-03",
        image: "https://robohash.org/adverovelit.png",
        bloodGroup: "O+",
        height: 188,
        weight: 106.3,
        eyeColor: "Brown",
        hair: {
          color: "Brown",
          type: "Curly",
        },
        domain: "columbia.edu",
        ip: "103.72.86.183",
        address: {
          address: "2721 Lindsay Avenue",
          city: "Louisville",
          coordinates: {
            lat: 38.263793,
            lng: -85.700243,
          },
          postalCode: "40206",
          state: "KY",
        },
        macAddress: "F8:04:9E:ED:C0:68",
        university: "Estonian University of Life Sciences",
        bank: {
          cardExpire: "01/24",
          cardNumber: "4917245076693618",
          cardType: "visa-electron",
          currency: "Euro",
          iban: "IT41 T114 5127 716J RGYB ZRUX DSJ",
        },
        company: {
          address: {
            address: "8398 West Denton Lane",
            city: "Glendale",
            coordinates: {
              lat: 33.515353,
              lng: -112.240812,
            },
            postalCode: "85305",
            state: "AZ",
          },
          department: "Support",
          name: "Adams Inc",
          title: "Web Developer I",
        },
        ein: "18-7178563",
        ssn: "667-98-5357",
        userAgent:
          "Mozilla/5.0 (Windows NT 6.0) AppleWebKit/535.1 (KHTML, like Gecko) Chrome/13.0.782.1 Safari/535.1",
      },
      {
        id: 6,
        firstName: "Alison",
        lastName: "Reichert",
        maidenName: "Franecki",
        age: 21,
        gender: "female",
        email: "jtreleven5@nhs.uk",
        phone: "+351 527 735 3642",
        username: "jtreleven5",
        password: "zY1nE46Zm",
        birthDate: "1969-07-21",
        image: "https://robohash.org/laboriosamfacilisrem.png",
        bloodGroup: "A+",
        height: 149,
        weight: 105.7,
        eyeColor: "Amber",
        hair: {
          color: "Blond",
          type: "Straight",
        },
        domain: "bandcamp.com",
        ip: "49.201.206.36",
        address: {
          address: "18 Densmore Drive",
          city: "Essex",
          coordinates: {
            lat: 44.492953,
            lng: -73.101883,
          },
          postalCode: "05452",
          state: "VT",
        },
        macAddress: "6C:34:D0:4B:4E:81",
        university: "Universidade da Beira Interior",
        bank: {
          cardExpire: "03/22",
          cardNumber: "345675888286047",
          cardType: "americanexpress",
          currency: "Euro",
          iban: "LB69 1062 QCY5 XS5T VOKU KJFG XP4S",
        },
        company: {
          address: {
            address: "6231 North 67th Avenue",
            city: "Glendale",
            coordinates: {
              lat: 33.5279666,
              lng: -112.2022551,
            },
            postalCode: "85301",
            state: "AZ",
          },
          department: "Accounting",
          name: "D'Amore and Sons",
          title: "Civil Engineer",
        },
        ein: "78-3192791",
        ssn: "158-68-0184",
        userAgent:
          "Mozilla/5.0 (Windows; U; Windows NT 6.0; nb-NO) AppleWebKit/533.18.1 (KHTML, like Gecko) Version/5.0.2 Safari/533.18.5",
      },
      {
        id: 7,
        firstName: "Oleta",
        lastName: "Abbott",
        maidenName: "Wyman",
        age: 31,
        gender: "female",
        email: "dpettegre6@columbia.edu",
        phone: "+62 640 802 7111",
        username: "dpettegre6",
        password: "YVmhktgYVS",
        birthDate: "1982-02-21",
        image: "https://robohash.org/cupiditatererumquos.png",
        bloodGroup: "B−",
        height: 172,
        weight: 78.1,
        eyeColor: "Blue",
        hair: {
          color: "Chestnut",
          type: "Wavy",
        },
        domain: "ovh.net",
        ip: "25.207.107.146",
        address: {
          address: "637 Britannia Drive",
          city: "Vallejo",
          coordinates: {
            lat: 38.10476999999999,
            lng: -122.193849,
          },
          postalCode: "94591",
          state: "CA",
        },
        macAddress: "48:2D:A0:67:19:E0",
        university: "Institut Sains dan Teknologi Al Kamal",
        bank: {
          cardExpire: "10/23",
          cardNumber: "3589640949470047",
          cardType: "jcb",
          currency: "Rupiah",
          iban: "GI97 IKPF 9DUO X25M FG8D UXY",
        },
        company: {
          address: {
            address: "1407 Walden Court",
            city: "Crofton",
            coordinates: {
              lat: 39.019306,
              lng: -76.660653,
            },
            postalCode: "21114",
            state: "MD",
          },
          department: "Product Management",
          name: "Schimmel, Wilderman and Orn",
          title: "Sales Associate",
        },
        ein: "29-1568401",
        ssn: "478-11-2206",
        userAgent:
          "Mozilla/5.0 (Windows; U; Windows NT 5.1; ru-RU) AppleWebKit/533.18.1 (KHTML, like Gecko) Version/5.0.2 Safari/533.18.5",
      },
    ],
  }),
  methods: {
    archive(data, i) {
      console.log(data);
      const userData = toRaw(data);
      console.log(userData);
      let users = toRaw(this.users);
      const newUsers = users.filter((user) => {
        return user.id != userData.id;
      });
      console.log(newUsers);
      this.users = newUsers;
    },
    edit(employee) {
      console.log(toRaw(employee));
    },
    addNewEmployee() {
      let users = toRaw(this.users);
      let newUser = toRaw(this.newUser);
      newUser.id = users.length + 1;
      console.log(newUser);
      users.push(newUser);
      console.log(users);
      this.dialog = false;
    },
  },
  computed: {
    searchFilter() {
      let search = this.search;
      let employees = this.employees;
      if (search) {
        return employees.filter((item) => {
          return search
            .toLowerCase()
            .split(" ")
            .every((ch) => item.department.toLowerCase().includes(ch));
        });
      } else {
        return employees;
      }
    },
    userFilter() {
      let search = this.search;
      let employees = this.users;
      if (search) {
        return employees.filter((item) => {
          return search
            .toLowerCase()
            .split(" ")
            .every((ch) => item.firstName.toLowerCase().includes(ch));
        });
      } else {
        return employees;
      }
    },
  },
  mounted() {
    /*
    const url = "https://dummyjson.com/users";
    axios.get(url).then((res) => {
      console.log(res.data.users);
      this.users = res.data.users;
    });
    */
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
