import customAxios from "../../../services/axios-service";
import { apiEndPointPaths, RoutePaths } from "../../../utility/const";
export const methods = {


    addCategory() {
        this.buttonIsClicked = true;
        var me = this;
        if (this.buttonIsClicked && !this.$v.lookupPost.$invalid) {
            me.loading  = true;
            var reqBody = {
                name: this.lookupPost.name,
                type: this.lookupPost.type,
                orderId: parseFloat(this.lookupPost.orderId),
            };
            customAxios.post(apiEndPointPaths.AddLookup, reqBody).then(result => {
                console.log("ADD RESULT ", result);
                me.$router.push({path:RoutePaths.ListCategory.alias});
            }).catch(err=>{me.loading=false});
        }


    }



};