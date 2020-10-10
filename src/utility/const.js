export const navigationDrawer = [
    
    {
        icon: "mdi-book-open-variant", "icon-alt": "mdi-book-open-variant",
        text: "Kategoriler",
        model: false,
        children: [
            { icon: "mdi-plus", text: "Kategori Ekle", alias: "/kategori-ekle" },
            { icon: "mdi-view-list", text: "Kategori Listele", alias: "/kategori-listesi" },
        ],
    },
    {
        icon: "mdi-code-tags", "icon-alt": "mdi-code-tags",
        text: "Kodlar",
        model: false,
        children: [
            { icon: "mdi-plus", text: "Kod Ekle", alias: "/kod-ekle" },
            { icon: "mdi-view-list", text: "Kod Listesi", alias: "/kod-listesi" },
        ],
    },
    { icon: "mdi-cog", text: "Profilim", alias: "/profilim" },

    // {
    //     icon: "mdi-chevron-up",
    //     "icon-alt": "mdi-chevron-down",
    //     text: "More",
    //     model: false,
    //     children: [
    //         { text: "Import" },
    //         { text: "Export" },
    //         { text: "Print" },
    //         { text: "Undo changes" },
    //         { text: "Other contacts" },
    //     ],
    // },
    // { icon: "mdi-message", text: "Send feedback" },
    // { icon: "mdi-help-circle", text: "Help" },
    // { icon: "mdi-cellphone-link", text: "App downloads" },
    // { icon: "mdi-keyboard", text: "Go to the old version" },
];

export const apiEndPointPaths = {

    // CODE ENDPOINTS 
    AddCode: "api/Code",
    DeleteCode: "api​/Code",
    UpdateCode: "api​/Code",
    GetCodes: "api/Code",

    // HASHTAG ENDPOINTS 
    AddHashtag: "api​/Hashtag",
    DeleteHashtag: "api​/Hashtag",
    UpdateHashtag: "api​/Hashtag",
    GetHashtags: "api​/Hashtag",
    GetUsedHashtags:"api/Hashtag/GetUsedHashtags",
    
    // Lookup ENDPOINTS 
    AddLookup: "api/Lookup",
    DeleteLookup: "api/Lookup",
    UpdateLookup: "api/Lookup",
    GetLookup: "api/Lookup",
    GetLookupById:"api/Lookup/GetById",

    // USER ENDPOINTS 
    Register: "/api/User/register",
    Login: "/api/User/login",
    UserActivate: "/api/User/userActivate",

};

export const BASE_URL = {
    DEV: "http://192.81.214.15",
    PRODUCTION: "http://192.81.214.15"
}

export const Storages = {
    OMISSION_USER: "OMISSION_USER"
};

export const RoutePaths = {
    // CODE // 
    ListCodes: { alias: "kod-listesi", path: "listCode", name: "Get Codes" },
    AddCode: { alias: "kod-ekle", path: "addCode", name: "Add Code" },

    // CATEGORY // 
    ListCategory: { alias: "kategori-listesi", path: "categorylist", name: "Get Categories" },
    AddCategory: { alias: "kategori-ekle", path: "addCategory", name: "Add Category" },

    // MYPROFILE
    MyProfile: { alias: "profilim", path: "myProfile", name: "My Profile" },
    // Sub Route
    Login: { alias: "/login", path: "login", name: "Login" }
};
