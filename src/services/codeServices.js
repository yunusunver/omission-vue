import customAxios from "../services/axios-service";
import { apiEndPointPaths } from "../utility/const";
export const codeServices = {
    
    async getCodes(){
        return await customAxios.get(apiEndPointPaths.GetCodes);
    },

    async addCode(reqBody){
        return await customAxios.post(apiEndPointPaths.AddCode,reqBody);
    }

};