import { RoutePaths } from '../../../../../utility/const';
import {codeServices} from "../../../../../services/codeServices";
export const methods = {
    openAddCode() {
        this.$router.push({ path: RoutePaths.AddCode.alias })
    },

    getCodes(){
        var me = this;
        me.isLoading = true;
        codeServices.getCodes().then(result=>{
            var response = result.data.data;
            me.isLoading = false;
            me.codeList  = response;
        }).catch(err=>{me.isLoading = false});
    }
}