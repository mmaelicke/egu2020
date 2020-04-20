var Config = {
    title: "SciKit-GStat",
    // put the url of the deployed application here
    url: "https://hydrocode-de.github.io/sample-lecture-python",
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
                    link: "egu_2020.html"
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