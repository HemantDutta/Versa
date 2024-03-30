//Themes for the parser
export const themeColors = {
    "Classic": "#ffffff",
    "Vega": "#131313",
    "Payne": "#0b0b0b",
    "Mellow": "#2d2c31",
    "Bubblegum": "#14151a",
}

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
    "Mellow": "#styledHtml {\n" +
        "    width: 100%;\n" +
        "    height: 100%;\n" +
        "    background-color: #2d2c31;\n" +
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
        "    color: #eda06b;\n" +
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
        "    border-left: 3px solid #eda06b;\n" +
        "    padding-left: 23px;\n" +
        "    font-size: 20px;\n" +
        "    padding-top: 5px;\n" +
        "    padding-bottom: 5px;\n" +
        "}\n" +
        "\n" +
        "#styledHtml pre {\n" +
        "    margin: 56px 0 0;\n" +
        "    padding: 32px;\n" +
        "    border-right: 4px solid #eda06b;\n" +
        "    border-left: 4px solid #eda06b;\n" +
        "    background:\n" +
        "            conic-gradient(at 10% 50%,#0000 75%,#302f35 0),\n" +
        "            conic-gradient(at 10% 50%,#0000 75%,#302f35 0) calc(1*32px) calc(3*32px),\n" +
        "            conic-gradient(at 10% 50%,#0000 75%,#302f35 0) calc(2*32px) calc(1*32px),\n" +
        "            conic-gradient(at 10% 50%,#0000 75%,#302f35 0) calc(3*32px) calc(4*32px),\n" +
        "            conic-gradient(at 10% 50%,#0000 75%,#302f35 0) calc(4*32px) calc(2*32px),\n" +
        "            conic-gradient(at 50% 10%,#0000 75%,#302f35 0) 0 calc(4*32px),\n" +
        "            conic-gradient(at 50% 10%,#0000 75%,#302f35 0) calc(1*32px) calc(2*32px),\n" +
        "            conic-gradient(at 50% 10%,#0000 75%,#302f35 0) calc(2*32px) 0,\n" +
        "            conic-gradient(at 50% 10%,#0000 75%,#302f35 0) calc(3*32px) calc(3*32px),\n" +
        "            conic-gradient(at 50% 10%,#0000 75%,#302f35 0) calc(4*32px) calc(1*32px),\n" +
        "            #2d2c31;\n" +
        "    background-size: 160px 160px;\n" +
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
        "    background-color: #3b3a41;\n" +
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
        "    border: 1px solid #eda06b;\n" +
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
        "    box-shadow: 0 10px 0 0 #eda06b;\n" +
        "}\n" +
        "\n" +
        "#styledHtml p {\n" +
        "    font-size: 20px;\n" +
        "    margin: 18px 0 10px;\n" +
        "}",
    "Bubblegum": "#styledHtml {\n" +
        "    width: 100%;\n" +
        "    height: 100%;\n" +
        "    background-color: #14151a;\n" +
        "    color: white;\n" +
        "}\n" +
        "\n" +
        "#styledHtml h1, #styledHtml h2, #styledHtml h3, #styledHtml h4, #styledHtml h5, #styledHtml h6 {\n" +
        "    margin: 32px 0 0;\n" +
        "    font-weight: bold;\n" +
        "    text-wrap: normal;\n" +
        "    color: #f9fafb;\n" +
        "}\n" +
        "\n" +
        "#styledHtml h1 {\n" +
        "    position: relative;\n" +
        "    font-size: 42px;\n" +
        "    margin: 50px 0 32px;\n" +
        "    z-index: 100;\n" +
        "    width: max-content;\n" +
        "    max-width: 100%;\n" +
        "    color: #f9f1e1;\n" +
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
        "    list-style: square;\n" +
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
        "    border-left: 4px solid #f472b6;\n" +
        "    padding-left: 23px;\n" +
        "    font-size: 20px;\n" +
        "    padding-top: 5px;\n" +
        "    padding-bottom: 5px;\n" +
        "    background-color: #282a36;\n" +
        "}\n" +
        "\n" +
        "#styledHtml pre {\n" +
        "    margin: 56px 0 0;\n" +
        "    padding: 32px;\n" +
        "    border: 2px solid #f472b6;\n" +
        "    background-image: radial-gradient(rgba(244, 114, 182, 0.16) 2px, transparent 2px);\n" +
        "    background-size: 32px 32px;\n" +
        "    background-color: #282a36;\n" +
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
        "    background-color: #282a36;\n" +
        "    font-family: monospace;\n" +
        "    color: #d1d5db;\n" +
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
        "    color: #f472b6;\n" +
        "    font-weight: bold;\n" +
        "}\n" +
        "\n" +
        "#styledHtml table td {\n" +
        "    padding: 16px;\n" +
        "    border: 1px solid #f9f1e1;\n" +
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
        "    box-shadow: 10px 10px 0 0 #000000;\n" +
        "}\n" +
        "\n" +
        "#styledHtml p {\n" +
        "    font-size: 20px;\n" +
        "    margin: 18px 0 10px;\n" +
        "}",
};