import customAxios from "./axios-service";
import { apiEndPointPaths } from "../utility/const";

export const categoryServices = {


    async getCategories(params) {
        return await customAxios.get(apiEndPointPaths.GetLookup + `?type=programmingLanguage&page=${params.page}&limit=${params.limit}`)
    },

    async addCategory(reqBody){
       return await customAxios.post(apiEndPointPaths.AddLookup, reqBody);
    },

    async getCategoryById(id){
        return await customAxios.get(apiEndPointPaths.GetLookupById+`/${id}`);
    },

    async updateCategory(params){
        return await customAxios.put(apiEndPointPaths.UpdateLookup,params);
    },

    async deleteCategory(id){
        return await customAxios.delete(apiEndPointPaths.DeleteLookup+`/${id}`);
    }
};