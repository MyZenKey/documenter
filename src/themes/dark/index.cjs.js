'use strict';

var theme = {
    plain: {
        color: "#F8F8F2",
        backgroundColor: "#202a20"
    },
    styles: [{
        types: ["prolog", "constant", "builtin"],
        style: {
            color: "rgb(201, 167, 251)"
        }
    }, {
        types: ["inserted", "function"],
        style: {
            color: "rgb(80, 250, 123)"
        }
    }, {
        types: ["deleted"],
        style: {
            color: "rgb(255, 85, 85)"
        }
    }, {
        types: ["changed"],
        style: {
            color: "rgb(255, 184, 108)"
        }
    }, {
        types: ["punctuation", "symbol"],
        style: {
            color: "rgb(248, 248, 242)"
        }
    }, {
        types: ["string", "char", "tag", "selector"],
        style: {
            color: "rgb(255, 152, 211)"
        }
    }, {
        types: ["keyword", "variable"],
        style: {
            color: "rgb(189, 147, 249)"
        }
    }, {
        types: ["comment"],
        style: {
            color: "rgb(169, 182, 225)"
        }
    }, {
        types: ["attr-name"],
        style: {
            color: "rgb(241, 250, 140)"
        }
    }]
};

module.exports = theme;