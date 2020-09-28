import {
    RoutePaths,
  } from "../../../../../utility/const";
  import { categoryServices } from "../../../../../services/categoryServices";
export const methods = {

    openAddCode() {
        this.$router.push({ path: RoutePaths.AddCode.alias });
    },
    getCategories() {
        var me = this;
        me.isLoading = true;
        categoryServices
            .getCategories()
            .then((result) => {
                var response = result.data;
                me.isLoading = false;
                me.programmingLanguages = response;
            })
            .catch((err) => {
                me.isLoading = false;
            });
    },
};