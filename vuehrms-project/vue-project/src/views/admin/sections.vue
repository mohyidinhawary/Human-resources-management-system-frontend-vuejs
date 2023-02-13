<template>
  <v-container>
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
      Mange Branch & Department & Job Title
    </h1>

    <v-row class="row1 mb-12">
      <v-col>
        <v-card class="w-100 mb-12">
          <v-card-title>
            <v-card-subtitle>Branch</v-card-subtitle>
          </v-card-title>

          <v-divider></v-divider>
          <v-card-item>
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
                    
                  <th class="text-center">Branch</th>

                  <th class="text-left">Action</th>
                  <th class="text-center">
                    <v-dialog v-model="dialog" persistent>
                      <template v-slot:activator="{ props }">
                        <v-btn v-bind="props"  color="#e56f51">
                          New Branch
                        </v-btn>
                      </template>
                      <v-card>
                        <v-card-title>
                          <span class="text-h5">Branch Details</span>
                        </v-card-title>
                        <v-card-text>
                          <v-container>
                            <v-row>
                              <v-col cols="12">
                                <v-text-field
                                  variant="outlined"
                                  color="#e8c36b"
                                  label="branch name"
                                  required
                                ></v-text-field>
                              </v-col>
                            </v-row>
                          </v-container>
                          <small>*indicates required field</small>
                        </v-card-text>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn color="#264653" text @click="dialog = false">
                            Close
                          </v-btn>
                          <v-btn color="#e56f51" text @click="dialog = false">
                            Create
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="branch in searchFilter" :key="branch.name" >
                  <td class="text-center">
                    {{ branch.name }}
                  </td>

                  <td class="text-center">
                    <v-row>
                      <v-col cols="2" class="mr-12" >
                        <v-btn class="mr-2" color="#e9c46a"
                          >Edit
                          <div class="d-flex justify-space-around">
                            <v-icon color="white">mdi-pencil</v-icon>
                          </div>
                        </v-btn>
                      </v-col>
                      <v-col cols="2">
                        <v-btn class="ml-3" color="#299c8d"
                          >Dele
                          <v-icon color="white">mdi-delete</v-icon>
                        </v-btn>
                      </v-col>
                    </v-row>
                  </td>
                </tr>
              </tbody>
            </v-table>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>




    <v-row class="row2 mb-12">
      <v-card class="w-100 mb-12">
        <v-card-title>
          <v-card-subtitle>Department</v-card-subtitle>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-item>
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
                <th class="text-left">Branch</th>
                <th class="text-left">Department</th>
                <th class="text-left">Action</th>
                 <th> <v-dialog v-model="dialog2" persistent>
        <template v-slot:activator="{ props }">
          <v-btn color="#e56f51" v-bind="props">
            New Department
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="text-h5">Department Details</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-select
                    variant="outlined"
                    color="#e8c36b"
                    :items="['damascus', 'homs', 'hama', 'latakia', 'tartus']"
                    label="branch"
                    required
                  ></v-select>
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    variant="outlined"
                    color="#e8c36b"
                    label="department name"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="#264653" text @click="dialog2 = false"> Close </v-btn>
            <v-btn color="#e56f51" text @click="dialog2 = false">
              Create
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="department in searchFilter2" :key="department.name">
                <td>
                  {{ department.branch }}
                </td>
                <td>
                  {{ department.name }}
                </td>

                <td>
                  <v-row>
                    <v-col cols="2" class="mr-12">
                      <v-btn class="mr-2" color="#e9c46a"
                        >Edit
                        <div class="d-flex justify-space-around">
                          <v-icon color="white">mdi-pencil</v-icon>
                        </div>
                      </v-btn>
                    </v-col>
                    <v-col cols="2">
                      <v-btn class="ml-3" color="#299c8d"
                        >Dele
                        <v-icon color="white">mdi-delete</v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                </td>
              </tr>
            </tbody>
          </v-table>
        </v-card-item>
      </v-card>
    </v-row>



    <v-row class="row2">
      <v-card class="w-100 mb-12">
        <v-card-title>
          <v-card-subtitle>Job Title</v-card-subtitle>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-item>
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
                <th class="text-left">Department</th>
                <th class="text-left">Job Title</th>
                <th class="text-left">Action</th>
               
                <th>
<v-dialog v-model="dialog3" persistent>
        <template v-slot:activator="{ props }">
          <v-btn color="#e56f51" v-bind="props">
            New Job Title
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="text-h5">Job Title Details</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-select
                    variant="outlined"
                    color="#e8c36b"
                    :items="[
                      'financial',
                      'industraial',
                      'technology',
                      'telecommunication',
                    ]"
                    label="deaprtment"
                    required
                  ></v-select>
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    variant="outlined"
                    color="#e8c36b"
                    label="job title"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="#264653" text @click="dialog3 = false"> Close </v-btn>
            <v-btn color="#e56f51" text @click="dialog3 = false">
              Create
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="jobtitle in searchFilter3" :key="jobtitle.name">
                <td>
                  {{ jobtitle.department }}
                </td>
                <td>
                  {{ jobtitle.name }}
                </td>

                <td>
                  <v-row>
                    <v-col cols="2" class="mr-12">
                      <v-btn class="mr-2" color="#e9c46a"
                        >Edit
                        <div class="d-flex justify-space-around">
                          <v-icon color="white">mdi-pencil</v-icon>
                        </div>
                      </v-btn>
                    </v-col>
                    <v-col cols="2">
                      <v-btn class="ml-3" color="#299c8d"
                        >Dele
                        <v-icon color="white">mdi-delete</v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                </td>
              </tr>
            </tbody>
          </v-table>
        </v-card-item>
      </v-card>
    </v-row>
  
   
     
  
   
  
  </v-container>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    dialog2: false,
    dialog3: false,
    branches: [
      {
        name: "",
      },
    ],
    departments: [
      {
        branch: "",

        name: "",
      },
    ],
    jobtitles: [
      {
        department: "",

        name: "",
      },
    ],
  }),
  computed: {
    searchFilter() {
      let search = this.search;
      let branches = this.branches;
      if (search) {
        return branches.filter((item) => {
          return search
            .toLowerCase()
            .split(" ")
            .every((ch) => item.name.toLowerCase().includes(ch));
        });
      } else {
        return branches;
      }
    },
    searchFilter2() {
      let search = this.search;
      let departments = this.departments;
      if (search) {
        return departments.filter((item) => {
          return search
            .toLowerCase()
            .split(" ")
            .every((ch) => item.name.toLowerCase().includes(ch));
        });
      } else {
        return departments;
      }
    },
    searchFilter3() {
      let search = this.search;
      let jobtitles = this.jobtitles;
      if (search) {
        return jobtitles.filter((item) => {
          return search
            .toLowerCase()
            .split(" ")
            .every((ch) => item.name.toLowerCase().includes(ch));
        });
      } else {
        return jobtitles;
      }
    },
  },
};
</script>

