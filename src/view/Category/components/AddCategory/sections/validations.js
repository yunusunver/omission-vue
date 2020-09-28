import {required,between} from "vuelidate/lib/validators";
export const validations = {

    lookupPost:{
        name:{required:required},
        type:{required:required},
        orderId:{required:required,between:between(1,999)},
    }
};