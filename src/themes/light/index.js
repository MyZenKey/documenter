// Original: https://raw.githubusercontent.com/PrismJS/prism-themes/master/themes/prism-ghcolors.css
var theme = {
    plain: {
        color: "#212121",
        backgroundColor: "#F8F9FA"
    },
    styles: [{
        types: ["comment", "prolog", "doctype", "cdata"],
        style: {
            color: "#d91e18",
            fontStyle: "italic"
        }
    }, {
        types: ["namespace"],
        style: {
            opacity: 0.7
        }
    }, {
        types: ["string", "attr-value"],
        style: {
            color: "#008000"
        }
    }, {
        types: ["punctuation", "operator"],
        style: {
            color: "#393A34"
        }
    }, {
        types: ["entity", "url", "symbol", "number", "boolean", "variable", "constant", "property", "regex", "inserted"],
        style: {
            color: "#545454"
        }
    }, {
        types: ["atrule", "keyword", "attr-name", "selector"],
        style: {
            color: "#696969"
        }
    }, {
        types: ["function", "deleted", "tag"],
        style: {
            color: "#aa5d00"
        }
    }, {
        types: ["function-variable"],
        style: {
            color: "#5D36A6"
        }
    }, {
        types: ["tag", "selector", "keyword"],
        style: {
            color: "#007299"
        }
    }]
};

export default theme;