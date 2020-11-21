import { categoryServices } from "../../../../../services/categoryServices";
import { RoutePaths } from "../../../../../utility/const";
export const methods = {


    

    updateCategory() {
        var me = this;
        this.buttonIsClicked = true;
        if (this.buttonIsClicked && !this.$v.lookupPost.$invalid) {
            me.loading = true;
            
            categoryServices.updateCategory(me.lookupPost).then(x => {
                me.loading = false;
                me.$router.push({ path: RoutePaths.ListCategory.alias });
            }).catch(err => { me.loading = false;   me.buttonIsClicked = false; });
        }
    },

    getCategoryById(id) {
        var me = this;
        categoryServices.getCategoryById(id).then(result => {
            var response = result.data.data;
            me.setInputs(response);
        });
    },
    setInputs(response) {
        this.lookupPost.id = response.id;
        this.lookupPost.name = response.name;
        this.lookupPost.type = response.type;
        this.lookupPost.orderId = response.orderId;
    }

};