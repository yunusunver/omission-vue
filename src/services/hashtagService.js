import customAxios from "./axios-service";
import { apiEndPointPaths } from "../utility/const";

export const hashtagServices = {


    async getUsedHashTags() {
        return await customAxios.get(apiEndPointPaths.GetUsedHashtags);
    }

    
};