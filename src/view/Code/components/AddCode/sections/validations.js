import { required, between } from "vuelidate/lib/validators";
export const validations = {

    codePost: {
        title: {required:required},
        description: {required:required},
        lookupId: {required:required},
        code: {required:required}
    }
};