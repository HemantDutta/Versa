//Themes for the parser
export const themes = {
    "Classic": "*,\n" +
        "*:after,\n" +
        "*:before {\n" +
        "    box-sizing: border-box;\n" +
        "    padding: 0;\n" +
        "    margin: 0;\n" +
        "    border: none;\n" +
        "    outline: none;\n" +
        "}\n" +
        "\n" +
        "#styledHtml {\n" +
        "    width: 100%;\n" +
        "    height: 100%;\n" +
        "    color: #242424;\n" +
        "}\n" +
        "\n" +
        "#styledHtml h1 {\n" +
        "    font-size: 42px;\n" +
        "    margin: 50px 0 32px;\n" +
        "    font-weight: bold;\n" +
        "}\n" +
        "\n" +
        "#styledHtml h2 {\n" +
        "    font-size: 24px;\n" +
        "    margin: 42px 0 0;\n" +
        "    font-weight: bold;\n" +
        "    color: #242424;\n" +
        "}\n" +
        "\n" +
        "#styledHtml h3 {\n" +
        "    font-size: 22px;\n" +
        "    margin: 32px 0 0;\n" +
        "    font-weight: bold;\n" +
        "    color: #242424;\n" +
        "}\n" +
        "\n" +
        "#styledHtml h4 {\n" +
        "    font-size: 20px;\n" +
        "    margin: 32px 0 0;\n" +
        "    font-weight: bold;\n" +
        "    color: #242424;\n" +
        "}\n" +
        "\n" +
        "#styledHtml h5 {\n" +
        "    font-size: 18px;\n" +
        "    margin: 32px 0 0;\n" +
        "    font-weight: bold;\n" +
        "    color: #242424;\n" +
        "}\n" +
        "\n" +
        "#styledHtml h6 {\n" +
        "    font-size: 16px;\n" +
        "    margin: 32px 0 0;\n" +
        "    font-weight: bold;\n" +
        "}\n" +
        "\n" +
        "#styledHtml p {\n" +
        "    font-size: 20px;\n" +
        "    margin: 18px 0 10px;\n" +
        "}\n" +
        "\n" +
        "#styledHtml pre {\n" +
        "    margin: 56px 0 0;\n" +
        "    padding: 32px;\n" +
        "    border: 1px solid rgb(229, 229, 229);\n" +
        "    background: #F9F9F9;\n" +
        "    font-family: monospace;\n" +
        "}\n" +
        "\n" +
        "#styledHtml pre code {\n" +
        "    padding: 0;\n" +
        "    background-color: transparent;\n" +
        "}\n" +
        "\n" +
        "#styledHtml code {\n" +
        "    padding: 0 5px;\n" +
        "    background-color: #F2F2F2;\n" +
        "    font-family: monospace;\n" +
        "}\n" +
        "\n" +
        "#styledHtml .blockquote {\n" +
        "    border-left: 3px solid rgb(36,36,36);\n" +
        "    padding-left: 23px;\n" +
        "    font-size: 20px;\n" +
        "}\n" +
        "\n" +
        "#styledHtml em {\n" +
        "    font-style: italic;\n" +
        "}\n" +
        "\n" +
        "#styledHtml a {\n" +
        "    color: #242424;\n" +
        "    text-decoration: underline;\n" +
        "    -webkit-tap-highlight-color: transparent;\n" +
        "}\n" +
        "\n" +
        "#styledHtml > a {\n" +
        "    display: inline-block;\n" +
        "    margin: 32px 0;\n" +
        "}\n" +
        "\n" +
        "#styledHtml img {\n" +
        "    display: block;\n" +
        "    margin: 16px 0 0;\n" +
        "}\n" +
        "\n" +
        "#styledHtml ul {\n" +
        "    list-style: disc;\n" +
        "}\n" +
        "\n" +
        "#styledHtml ol {\n" +
        "    list-style: decimal;\n" +
        "}\n" +
        "\n" +
        "#styledHtml ul, #styledHtml ol {\n" +
        "    padding-left: 32px;\n" +
        "    display: flex;\n" +
        "    flex-direction: column;\n" +
        "    gap: 10px;\n" +
        "    margin: 16px 0 0;\n" +
        "}\n" +
        "\n" +
        "#styledHtml table {\n" +
        "    margin: 32px 0 0;\n" +
        "    border: 1px solid rgb(229, 229, 229);\n" +
        "}\n" +
        "\n" +
        "#styledHtml table td {\n" +
        "    padding: 16px;\n" +
        "    border: 1px solid rgb(229, 229, 229);\n" +
        "}\n" +
        "\n" +
        "#styledHtml strong {\n" +
        "    font-weight: bold;\n" +
        "}",
    "Vega": "#styledHtml {\n" +
        "    width: 100%;\n" +
        "    height: 100%;\n" +
        "    background-color: #131313;\n" +
        "    color: white;\n" +
        "}\n" +
        "\n" +
        "#styledHtml h1, #styledHtml h2, #styledHtml h3, #styledHtml h4, #styledHtml h5, #styledHtml h6 {\n" +
        "    margin: 32px 0 0;\n" +
        "    font-weight: bold;\n" +
        "    text-wrap: normal;\n" +
        "}\n" +
        "\n" +
        "#styledHtml h1 {\n" +
        "    position: relative;\n" +
        "    font-size: 42px;\n" +
        "    margin: 50px 0 32px;\n" +
        "    z-index: 100;\n" +
        "    width: max-content;\n" +
        "    max-width: 100%;\n" +
        "}\n" +
        "\n" +
        "#styledHtml h1:after {\n" +
        "    content: \"\";\n" +
        "    position: absolute;\n" +
        "    left: 0;\n" +
        "    bottom: 0;\n" +
        "    width: 100%;\n" +
        "    height: 40%;\n" +
        "    background-color: #5200ff;\n" +
        "    z-index: -1;\n" +
        "}\n" +
        "\n" +
        "#styledHtml h2 {\n" +
        "    font-size: 24px;\n" +
        "    margin: 42px 0 0;\n" +
        "}\n" +
        "\n" +
        "#styledHtml h3 {\n" +
        "    font-size: 22px;\n" +
        "}\n" +
        "\n" +
        "#styledHtml h4 {\n" +
        "    font-size: 20px;\n" +
        "}\n" +
        "\n" +
        "#styledHtml h5 {\n" +
        "    font-size: 18px;\n" +
        "}\n" +
        "\n" +
        "#styledHtml h6 {\n" +
        "    font-size: 16px;\n" +
        "}\n" +
        "\n" +
        "#styledHtml ul {\n" +
        "    list-style: disc;\n" +
        "}\n" +
        "\n" +
        "#styledHtml ol {\n" +
        "    list-style: decimal;\n" +
        "}\n" +
        "\n" +
        "#styledHtml ul, #styledHtml ol {\n" +
        "    padding-left: 32px;\n" +
        "    display: flex;\n" +
        "    flex-direction: column;\n" +
        "    gap: 10px;\n" +
        "    margin: 16px 0 0;\n" +
        "}\n" +
        "\n" +
        "#styledHtml .blockquote {\n" +
        "    margin: 32px 0;\n" +
        "    border-left: 3px solid #3cffd0;\n" +
        "    padding-left: 23px;\n" +
        "    font-size: 20px;\n" +
        "}\n" +
        "\n" +
        "#styledHtml pre {\n" +
        "    margin: 56px 0 0;\n" +
        "    padding: 32px;\n" +
        "    border: 1px solid #3cffd0;\n" +
        "    background: #181818;\n" +
        "    font-family: monospace;\n" +
        "}\n" +
        "\n" +
        "#styledHtml pre code {\n" +
        "    padding: 0;\n" +
        "    background-color: transparent;\n" +
        "    color: white;\n" +
        "}\n" +
        "\n" +
        "#styledHtml code {\n" +
        "    padding: 0 5px;\n" +
        "    background-color: #181818;\n" +
        "    font-family: monospace;\n" +
        "    color: #3cffd0;\n" +
        "}\n" +
        "\n" +
        "#styledHtml strong {\n" +
        "    font-weight: bold;\n" +
        "}\n" +
        "\n" +
        "#styledHtml table {\n" +
        "    margin: 32px 0 0;\n" +
        "}\n" +
        "\n" +
        "#styledHtml table tr:first-child td {\n" +
        "    color: #3cffd0;\n" +
        "}\n" +
        "\n" +
        "#styledHtml table td {\n" +
        "    padding: 16px;\n" +
        "    border: 1px solid rgb(229, 229, 229);\n" +
        "}\n" +
        "\n" +
        "#styledHtml em {\n" +
        "    font-style: italic;\n" +
        "}\n" +
        "\n" +
        "#styledHtml a {\n" +
        "    color: #3cffd0;\n" +
        "    text-decoration: underline;\n" +
        "    -webkit-tap-highlight-color: transparent;\n" +
        "}\n" +
        "\n" +
        "#styledHtml > a {\n" +
        "    display: inline-block;\n" +
        "    margin: 32px 0;\n" +
        "}\n" +
        "\n" +
        "#styledHtml img {\n" +
        "    display: block;\n" +
        "    margin: 16px 0 0;\n" +
        "    box-shadow: 0 0 15px #3cffd0;\n" +
        "}\n" +
        "\n" +
        "#styledHtml p {\n" +
        "    font-size: 20px;\n" +
        "    margin: 18px 0 10px;\n" +
        "}",
    "Payne": "#styledHtml {\n" +
        "    width: 100%;\n" +
        "    height: 100%;\n" +
        "    background-color: #0b0b0b;\n" +
        "    color: white;\n" +
        "}\n" +
        "\n" +
        "#styledHtml h1, #styledHtml h2, #styledHtml h3, #styledHtml h4, #styledHtml h5, #styledHtml h6 {\n" +
        "    margin: 32px 0 0;\n" +
        "    font-weight: bold;\n" +
        "    text-wrap: normal;\n" +
        "}\n" +
        "\n" +
        "#styledHtml h1 {\n" +
        "    position: relative;\n" +
        "    font-size: 42px;\n" +
        "    margin: 50px 0 32px;\n" +
        "    z-index: 100;\n" +
        "    width: max-content;\n" +
        "    max-width: 100%;\n" +
        "}\n" +
        "\n" +
        "#styledHtml h1:after {\n" +
        "    content: \"\";\n" +
        "    position: absolute;\n" +
        "    left: 0;\n" +
        "    bottom: 0;\n" +
        "    width: 100%;\n" +
        "    height: 40%;\n" +
        "    z-index: -1;\n" +
        "    background:\n" +
        "            radial-gradient(farthest-side at -33.33% 50%,#0000 52%,#f30100 54% 57%,#0000 59%) 0 calc(112px/2),\n" +
        "            radial-gradient(farthest-side at 50% 133.33%,#0000 52%,#f30100 54% 57%,#0000 59%) calc(112px/2) 0,\n" +
        "            radial-gradient(farthest-side at 133.33% 50%,#0000 52%,#f30100 54% 57%,#0000 59%),\n" +
        "            radial-gradient(farthest-side at 50% -33.33%,#0000 52%,#f30100 54% 57%,#0000 59%),\n" +
        "            #000000;\n" +
        "    background-size: calc(112px/4.667) 112px,112px calc(112px/4.667);\n" +
        "\n" +
        "\n" +
        "}\n" +
        "\n" +
        "#styledHtml h2 {\n" +
        "    font-size: 24px;\n" +
        "    margin: 42px 0 0;\n" +
        "}\n" +
        "\n" +
        "#styledHtml h3 {\n" +
        "    font-size: 22px;\n" +
        "}\n" +
        "\n" +
        "#styledHtml h4 {\n" +
        "    font-size: 20px;\n" +
        "}\n" +
        "\n" +
        "#styledHtml h5 {\n" +
        "    font-size: 18px;\n" +
        "}\n" +
        "\n" +
        "#styledHtml h6 {\n" +
        "    font-size: 16px;\n" +
        "}\n" +
        "\n" +
        "#styledHtml ul {\n" +
        "    list-style: disc;\n" +
        "}\n" +
        "\n" +
        "#styledHtml ol {\n" +
        "    list-style: decimal;\n" +
        "}\n" +
        "\n" +
        "#styledHtml ul, #styledHtml ol {\n" +
        "    padding-left: 32px;\n" +
        "    display: flex;\n" +
        "    flex-direction: column;\n" +
        "    gap: 10px;\n" +
        "    margin: 16px 0 0;\n" +
        "}\n" +
        "\n" +
        "#styledHtml .blockquote {\n" +
        "    margin: 32px 0;\n" +
        "    border-left: 3px solid #f30100;\n" +
        "    padding-left: 23px;\n" +
        "    font-size: 20px;\n" +
        "    padding-top: 5px;\n" +
        "    padding-bottom: 5px;\n" +
        "    background-color: #000000;\n" +
        "}\n" +
        "\n" +
        "#styledHtml pre {\n" +
        "    margin: 56px 0 0;\n" +
        "    padding: 32px;\n" +
        "    border-bottom: 4px solid #f30100;\n" +
        "    background: #000000;\n" +
        "    font-family: monospace;\n" +
        "}\n" +
        "\n" +
        "#styledHtml pre code {\n" +
        "    padding: 0;\n" +
        "    background-color: transparent;\n" +
        "    color: white;\n" +
        "}\n" +
        "\n" +
        "#styledHtml code {\n" +
        "    padding: 0 5px;\n" +
        "    background-color: #181818;\n" +
        "    font-family: monospace;\n" +
        "    color: #ffffff;\n" +
        "}\n" +
        "\n" +
        "#styledHtml strong {\n" +
        "    font-weight: bold;\n" +
        "}\n" +
        "\n" +
        "#styledHtml table {\n" +
        "    margin: 32px 0 0;\n" +
        "}\n" +
        "\n" +
        "#styledHtml table tr:first-child td {\n" +
        "    color: #ffffff;\n" +
        "    font-weight: bold;\n" +
        "}\n" +
        "\n" +
        "#styledHtml table td {\n" +
        "    padding: 16px;\n" +
        "    border: 1px solid #f30100;\n" +
        "}\n" +
        "\n" +
        "#styledHtml em {\n" +
        "    font-style: italic;\n" +
        "}\n" +
        "\n" +
        "#styledHtml a {\n" +
        "    color: #ffffff;\n" +
        "    text-decoration: underline;\n" +
        "    -webkit-tap-highlight-color: transparent;\n" +
        "}\n" +
        "\n" +
        "#styledHtml > a {\n" +
        "    display: inline-block;\n" +
        "    margin: 32px 0;\n" +
        "}\n" +
        "\n" +
        "#styledHtml img {\n" +
        "    display: block;\n" +
        "    margin: 16px 0 0;\n" +
        "    box-shadow: 10px 10px 0 2px #f30100;\n" +
        "}\n" +
        "\n" +
        "#styledHtml p {\n" +
        "    font-size: 20px;\n" +
        "    margin: 18px 0 10px;\n" +
        "}",
};