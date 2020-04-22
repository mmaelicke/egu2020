var Config = {
    title: "SciKit-GStat",
    // put the url of the deployed application here
    url: "https://mmaelicke.github.io/egu2020",
    homeUrl: "https://github.com/mmaelicke/scikit-gstat",
    theme: "lux",
    accent: "secondary",
    navigation: [
        {
            label: "Home",
            link: "index.md",
            // every custom .md or .html added needs this type
            type: "static"
        },
        
        {
            label: "Presentation",
            navigation: [
                {
                    label: "EGU 2020 Showcase",
                    link: "egu_2020.slides.html"
                }
            ]
        },
        
        {
            label: "Notebook",
            navigation: [
                {
                    label: "EGU 2020 Showcase",
                    link: "egu_2020.html",
                    binder: "https://mybinder.org/v2/gh/mmaelicke/egu2020/master?filepath=egu_2020.ipynb"
                }
            ]
        },
        
        // please do not remove this page
        // as it describes that you are using a hydrocode application
        {
            label: "About",
            link: "about.md",
            type: "static"
        }
    ]        
};
