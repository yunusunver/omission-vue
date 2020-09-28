import { categoryServices } from "../../../../../services/categoryServices";
import { RoutePaths } from "../../../../../utility/const";
export const methods = {


    addCategory() {
        var me = this;
        if (this.buttonIsClicked && !this.$v.lookupPost.$invalid) {
            me.loading = true;
            var reqBody = {
                name: this.lookupPost.name,
                type: this.lookupPost.type,
                orderId: parseFloat(this.lookupPost.orderId),
            };
            categoryServices.addCategory(reqBody).then(x => {
                me.$router.push({ path: RoutePaths.ListCategory.alias });
            }).catch(err => { me.loading = false });

        }


    },

    clearForm(){
        this.lookupPost.name = "";
        this.lookupPost.type = "";
        this.lookupPost.orderId = "";
    }

};