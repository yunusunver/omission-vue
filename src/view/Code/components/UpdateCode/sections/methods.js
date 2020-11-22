import { categoryServices } from "../../../../../services/categoryServices";
import { codeServices } from "../../../../../services/codeServices";
import { hashtagServices } from "../../../../../services/hashtagService";
import { RoutePaths } from "../../../../../utility/const";
export const methods = {


    updateCode() {
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


            codeServices.updateCode(reqBody).then(result => {
                var response = result.data;
                me.loading = false;
                me.clearForm();
                me.$router.push({ path: RoutePaths.ListCodes.alias });
            });
        }
    },
    getProgrammingLanguages() {
        var me = this;
        var params = {
            limit:-1,
            page:1
        };
        categoryServices.getCategories(params).then(result => {
            var response = result.data.data;
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
    },

    getCodeById(id){
        // TODO:
        var me  = this;
        codeServices.getCodeById(id).then(result=>{
            var response = result.data;
            me.codePost.title = response.title;
            me.codePost.description = response.description;
            me.codePost.code = response.body;
            me.codePost.hashtags = this.hashtags.filter(x=>response.hashtags.includes(x.id));
            me.codePost.lookupId =  this.languages.find(x=> x.id==response.lookupId);
            me.codePost.id = response.id;
        });
    }

};