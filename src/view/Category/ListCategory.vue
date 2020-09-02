<template>
  <v-row>
    <v-col cols="12">
      <v-card>
        
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
          text:"Language",
          value:"language"
        },
        {
          text:"Image",
          value:"imageUrl"
        },
        {
          text:"Created Date",
          value:"createddate"
        },
        {
          text:"Modified Date",
          value:"modifieddate"
        },
        

      ],
      data:[
        {
          id:1,
          language:"C#",
          createddate:"2020-09-01 00:00",
          modifieddate:"2020-09-01 00:00",
          imageUrl:"Image"
        },
         {
          id:2,
          language:"JAVA",
          createddate:"2020-09-01 00:00",
          modifieddate:"2020-09-01 00:00",
          imageUrl:"Image"

        },
        
      ]

    };
  },
  methods:{
    openAddCode(){
      this.$router.push({path:"kod-ekle"})
    }
  }
};
</script>