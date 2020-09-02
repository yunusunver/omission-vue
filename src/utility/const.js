export const navigationDrawer = [
    // { icon: "mdi-contacts", text: "Forgets" ,alias:"/kod-listesi"  },
    // { icon: "mdi-history", text: "Categories" , alias:"/kategori-listesi" },
    // { icon: "mdi-content-copy", text: "Duplicates" },
    {
        icon: "mdi-chevron-up","icon-alt": "mdi-chevron-down",
        text: "Kategoriler",
        model: false,
        children: [
            { icon: "mdi-plus", text: "Kategori Ekle",alias:"/kategori-ekle" },
            { icon: "mdi-plus", text: "Kategori Listele",alias:"/kategori-listesi" },
        ],
    },
    {
        icon: "mdi-chevron-up","icon-alt": "mdi-chevron-down",
        text: "Kodlar",
        model: false,
        children: [
            { icon: "mdi-plus", text: "Kod Listesi",alias:"/kod-listesi" },
            { icon: "mdi-plus", text: "Kod Ekle",alias:"/kod-ekle" },
        ],
    },
    { icon: "mdi-cog", text: "Profilim",alias:"/profilim" },

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