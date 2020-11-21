import {
    RoutePaths,
} from "../../../../../utility/const";
import { categoryServices } from "../../../../../services/categoryServices";
import { deleteMessage, successMessage } from "../../../../../utility/message";
export const methods = {

    openAddCode() {
        this.$router.push({ path: RoutePaths.AddCode.alias });
    },
    getCategories() {
        var me = this;
        var params = {
            page: this.selectedPage,
            limit: this.limit
        };
        me.isLoading = true;
        categoryServices
            .getCategories(params)
            .then((result) => {
                var response = result.data.data;
                me.count = result.data.count;
                me.pageLength = Math.ceil(me.count / me.limit);
                me.isLoading = false;
                me.programmingLanguages = response;
            })
            .catch((err) => {
                me.isLoading = false;
            });
    },

    editCategory(categoryId) {
        this.$router.push(`/kategori-güncelle/${categoryId}`);
    },
    deleteCategory(category) {
        var me = this;
        var message = `${category.name} silinecek.Onaylıyor musunuz?`
        deleteMessage(message).then((result) => {
            if (result.isConfirmed) {
                categoryServices.deleteCategory(category.id).then(result => {
                    me.getCategories();
                });
            }
        });
    }

};