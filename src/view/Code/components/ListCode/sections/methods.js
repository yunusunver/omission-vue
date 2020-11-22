import { RoutePaths } from '../../../../../utility/const';
import {codeServices} from "../../../../../services/codeServices";
export const methods = {
    openAddCode() {
        this.$router.push({ path: RoutePaths.AddCode.alias })
    },

    routeUpdate(item){
     this.$router.push(`/kod-güncelleme/${item.id}`);
    },

    getCodes(){
        var me = this;
        var params = {
            page: this.selectedPage,
            limit: this.limit
        };
        me.isLoading = true;
        codeServices.getCodes(params).then(result=>{
            var response = result.data.data;
            me.isLoading = false;
            me.codeList  = response;
            me.count = result.data.count;
            me.pageLength = Math.ceil(me.count/me.limit);

        }).catch(err=>{me.isLoading = false});
    }
}