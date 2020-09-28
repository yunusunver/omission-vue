import customAxios from "./axios-service";
import { apiEndPointPaths } from "../utility/const";

export const categoryServices = {


    async getCategories() {
        return await customAxios.get(apiEndPointPaths.GetLookup + `?type=programmingLanguage`)
    },

    async addCategory(reqBody){
       return await customAxios.post(apiEndPointPaths.AddLookup, reqBody);
    }
};