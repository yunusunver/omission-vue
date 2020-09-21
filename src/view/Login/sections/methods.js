import customAxios from "../../../services/axios-service";
import { apiEndPointPaths, RoutePaths, Storages } from "../../../utility/const";

export const methods = {
    showRememberTab() {
        var obj = { name: "Forget Password", icon: "mdi-account-outline" };
        var isAdded = this.tabs.find((x) => x.name == obj.name);
        if (isAdded == null) this.tabs.push(obj);
    },

    onLogin() {
        this.buttonIsClicked = true;
        if (this.buttonIsClicked && !this.$v.loginForm.$invalid) {
            this.loading = true;
            customAxios
                .post(apiEndPointPaths.Login, this.loginForm)
                .then((result) => {
                    var response = result.data;
                    this.loading = false;
                    localStorage.setItem(Storages.OMISSION_USER, response);
                    this.$router.push({ path: RoutePaths.ListCodes.alias });
                })
                .catch((err) => {
                    this.loading = false;
                });
        }

    }
}