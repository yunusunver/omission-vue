<template>
  <div>
    <h4>Hop</h4>
  </div>
</template>

<script>
import { RoutePaths, Storages } from '../../utility/const';

export default {
   beforeMount(){
    var storage = localStorage.getItem(Storages.OMISSION_USER);
    if(storage==null || storage==undefined) {this.$router.push({path:RoutePaths.Login.alias})}
  }
};
</script>
