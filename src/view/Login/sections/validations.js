import { required } from "vuelidate/lib/validators";

export const validations = {

    loginForm: {
        email: {required:required},
        password: {required:required}
    }
};