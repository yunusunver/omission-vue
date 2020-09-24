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
import { apiEndPointPaths, RoutePaths, Storages } from '../../utility/const';
import customAxios from "../../services/axios-service";
export default {
  data() {
    return {
      search: "",
      date: new Date().toISOString().substr(0, 10),
      menu2: false,

      /* 
        createdDate: "2020-09-13T00:00:00"
        id: 1
        isDeleted: false
        name: "Java "
        orderId: 1
        parentId: null
        type: "programmingLanguage"
        updatedDate: "2020-09-13T00:00:00"
      */

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
          text:"Type",
          value:"type"
        },
        {
          text:"OrderId",
          value:"orderId"
        }, 

      ],
      data:[]

    };
  },
  methods:{
    openAddCode(){
      this.$router.push({path:RoutePaths.AddCode.alias})
    },
    getCategories(){
      var me = this;
      customAxios.get(apiEndPointPaths.GetLookup+`?type=programmingLanguage`).then(result=>{
        var response = result.data;
        me.data = response;
      });
    }
  },
  beforeMount(){
    var storage = localStorage.getItem(Storages.OMISSION_USER);
    if(storage==null || storage==undefined) {this.$router.push({path:RoutePaths.Login.alias})}
  },
  mounted(){
    this.getCategories();
  }
};
</script>