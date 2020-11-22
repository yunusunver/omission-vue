export const data = {
    search: "",
    startDate: new Date().toISOString().substr(0, 10),
    endDate: new Date().toISOString().substr(0, 10),
    startDateMenu: false,
    endDateMenu: false,
    codeList:[],
    isLoading:false,
    selectedPage:1,
    limit: 5,
    pageLength:1,
    count:0,
    pageList: [5,10,25,50,100],
};