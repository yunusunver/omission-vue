import { categoryServices } from "../../../../../services/categoryServices";
import { codeServices } from "../../../../../services/codeServices";
import { hashtagServices } from "../../../../../services/hashtagService";
import { RoutePaths } from "../../../../../utility/const";
export const methods = {


    addCode() {
        var me = this;
        this.buttonIsClicked = true;
        if (this.buttonIsClicked && !this.$v.codePost.$invalid) {
            this.loading = true;
            // Servise istek at ve listele sayfasına yönlen.
            var reqBody = {
                title: me.codePost.title,
                description: me.codePost.description,
                lookupId: me.codePost.lookupId.id,
                code: me.codePost.code,
                hashtags: me.codePost.hashtags.map(x=>x.id)

            };


            codeServices.addCode(reqBody).then(result => {
                var response = result.data;
                me.loading = false;
                me.clearForm();
                me.$router.push({ path: RoutePaths.ListCodes.alias });
            });
        }
    },
    getProgrammingLanguages() {
        var me = this;
        categoryServices.getCategories().then(result => {
            var response = result.data;
            me.languages = response;
        });
    },

    getUsedHashtags() {
        var me = this;
        hashtagServices.getUsedHashTags().then(result => {
            var response = result.data;
            me.hashtags = response;
        });
    },
    clearForm(){
        this.codePost.title = "";
        this.codePost.description = "";
        this.codePost.lookupId = "";
        this.codePost.code = "";
        this.codePost.hashtags = [];
    }

};