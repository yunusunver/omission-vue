<template>
  <v-row>
    <v-col cols="12">
      <v-card>
        <v-card-title>
          <v-row>

            <v-col cols="3">
              <v-text-field label="Ara"></v-text-field>
            </v-col>

            <v-col cols="2">
              <v-menu
                v-model="menu2"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="date"
                    label="Picker without buttons"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
              </v-menu>
            </v-col>
            
            <v-col cols="2">
              <v-menu
                v-model="menu2"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="date"
                    label="Picker without buttons"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
              </v-menu>
            </v-col>

            <v-col cols="2" > 
              <v-btn color="primary"> Ara </v-btn>
            </v-col>

            <v-col>
              <v-btn color="warning" @click="openAddCode()"  >+Ekle</v-btn>
            </v-col>

          </v-row>
        </v-card-title>
        <v-data-table :headers="headers" :items="data" :search="search"></v-data-table>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      date: new Date().toISOString().substr(0, 10),
      menu2: false,

      headers:[
        {
          text:"Id",
          value:"id"
        },
        {
          text:"Name",
          value:"name"
        },
        {
          text:"Language",
          value:"language"
        },
        {
          text:"Description",
          value:"description"
        },
        {
          text:"Created Date",
          value:"createddate"
        },
        {
          text:"Modified Date",
          value:"modifieddate"
        },
        {
          text:"Code",
          value:"code"
        },

      ],
      data:[
        {
          id:1,
          name:"C# Değişken tanımlama",
          language:"C#",
          description:"Öylesine",
          createddate:"2020-09-01 00:00",
          modifieddate:"2020-09-01 00:00",
          code:"a=b+c"
        },
         {
          id:2,
          name:"JAVA Değişken tanımlama",
          language:"JAVA",
          description:"Öylesine",
          createddate:"2020-09-01 00:00",
          modifieddate:"2020-09-01 00:00",
          code:"a=b+c"
        },{
          id:2,
          name:"JAVA Değişken tanımlama",
          language:"JAVA",
          description:"Öylesine",
          createddate:"2020-09-01 00:00",
          modifieddate:"2020-09-01 00:00",
          code:"a=b+c"
        },{
          id:2,
          name:"JAVA Değişken tanımlama",
          language:"JAVA",
          description:"Öylesine",
          createddate:"2020-09-01 00:00",
          modifieddate:"2020-09-01 00:00",
          code:"a=b+c"
        },{
          id:2,
          name:"JAVA Değişken tanımlama",
          language:"JAVA",
          description:"Öylesine",
          createddate:"2020-09-01 00:00",
          modifieddate:"2020-09-01 00:00",
          code:"a=b+c"
        },{
          id:2,
          name:"JAVA Değişken tanımlama",
          language:"JAVA",
          description:"Öylesine",
          createddate:"2020-09-01 00:00",
          modifieddate:"2020-09-01 00:00",
          code:"a=b+c"
        },{
          id:2,
          name:"JAVA Değişken tanımlama",
          language:"JAVA",
          description:"Öylesine",
          createddate:"2020-09-01 00:00",
          modifieddate:"2020-09-01 00:00",
          code:"a=b+c"
        },{
          id:2,
          name:"JAVA Değişken tanımlama",
          language:"JAVA",
          description:"Öylesine",
          createddate:"2020-09-01 00:00",
          modifieddate:"2020-09-01 00:00",
          code:"a=b+c"
        }
      ]

      // headers: [
      //   {
      //     text: "Dessert (100g serving)",
      //     align: "start",
      //     sortable: false,
      //     value: "name",
      //   },
      //   { text: "Calories", value: "calories" },
      //   { text: "Fat (g)", value: "fat" },
      //   { text: "Carbs (g)", value: "carbs" },
      //   { text: "Protein (g)", value: "protein" },
      //   { text: "Iron (%)", value: "iron" },
      // ],
      // desserts: [
      //   {
      //     name: "Frozen Yogurt",
      //     calories: 159,
      //     fat: 6.0,
      //     carbs: 24,
      //     protein: 4.0,
      //     iron: "1%",
      //   },
      //   {
      //     name: "Ice cream sandwich",
      //     calories: 237,
      //     fat: 9.0,
      //     carbs: 37,
      //     protein: 4.3,
      //     iron: "1%",
      //   },
      //   {
      //     name: "Eclair",
      //     calories: 262,
      //     fat: 16.0,
      //     carbs: 23,
      //     protein: 6.0,
      //     iron: "7%",
      //   },
      //   {
      //     name: "Cupcake",
      //     calories: 305,
      //     fat: 3.7,
      //     carbs: 67,
      //     protein: 4.3,
      //     iron: "8%",
      //   },
      //   {
      //     name: "Gingerbread",
      //     calories: 356,
      //     fat: 16.0,
      //     carbs: 49,
      //     protein: 3.9,
      //     iron: "16%",
      //   },
      //   {
      //     name: "Jelly bean",
      //     calories: 375,
      //     fat: 0.0,
      //     carbs: 94,
      //     protein: 0.0,
      //     iron: "0%",
      //   },
      //   {
      //     name: "Lollipop",
      //     calories: 392,
      //     fat: 0.2,
      //     carbs: 98,
      //     protein: 0,
      //     iron: "2%",
      //   },
      //   {
      //     name: "Honeycomb",
      //     calories: 408,
      //     fat: 3.2,
      //     carbs: 87,
      //     protein: 6.5,
      //     iron: "45%",
      //   },
      //   {
      //     name: "Donut",
      //     calories: 452,
      //     fat: 25.0,
      //     carbs: 51,
      //     protein: 4.9,
      //     iron: "22%",
      //   },
      //   {
      //     name: "KitKat",
      //     calories: 518,
      //     fat: 26.0,
      //     carbs: 65,
      //     protein: 7,
      //     iron: "6%",
      //   },
      // ],
    };
  },
  methods:{
    openAddCode(){
      this.$router.push({path:"kod-ekle"})
    }
  }
};
</script>

<!-- 
<template>
  <v-row>
    <v-col>
      <v-data-table
        :headers="headers"
        :items="desserts"
        :expanded.sync="expanded"
        item-key="name"
        show-expand
        class="elevation-1"
        show-select
      >
        <template v-slot:top>
         
        </template>
        <template v-slot:expanded-item="{ headers, item }">
          <td :colspan="headers.length">More info about {{ item.name }}</td>
        </template>
      </v-data-table>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      expanded: [],
      singleExpand: false,
      headers: [
        {
          text: "Dessert (100g serving)",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Calories", value: "calories" },
        { text: "Fat (g)", value: "fat" },
        { text: "Carbs (g)", value: "carbs" },
        { text: "Protein (g)", value: "protein" },
        { text: "Iron (%)", value: "iron" },
        { text: "", value: "data-table-expand" },
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%",
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%",
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%",
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8%",
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: "16%",
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: "0%",
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: "2%",
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: "45%",
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: "22%",
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%",
        },
      ],
    };
  },
};
</script>
-->
