import moment from "moment";
export const filters = {

    handleDate:function (value) {
        return moment(value).format("DD/MM/YYYY HH:mm");
    },
    handleHashtags:function (value) {
        if(value.length==0) return "";
        else return value.toString();
    }

};