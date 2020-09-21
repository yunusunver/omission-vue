import { RoutePaths } from "../../../../utility/const";

export const methods = {
    toggleDrawer(){
        this.$emit("toggleDrawer");
    },
    logout(){
        localStorage.clear();
        this.$router.push({path:RoutePaths.Login.alias});

    }
};