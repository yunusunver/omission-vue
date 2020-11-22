import customAxios from "../services/axios-service";
import { apiEndPointPaths } from "../utility/const";
export const codeServices = {
    
    async getCodes(params){
        return await customAxios.get(apiEndPointPaths.GetCodes+`?Limit=${params.limit}&Page=${params.page}`);
    },

    async addCode(reqBody){
        return await customAxios.post(apiEndPointPaths.AddCode,reqBody);
    },

    async updateCode (reqBody){
        return await customAxios.put(apiEndPointPaths.UpdateCode,reqBody);
    },

    async getCodeById(id){
        return await customAxios.get(apiEndPointPaths.GetCodeById+`/${id}`);
    }

};