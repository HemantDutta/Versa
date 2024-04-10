//Themes for the parser
export const themeColors = {
    "Classic": "#ffffff",
    "Black Neu": "#242424",
    "Vega": "#131313",
    "Payne": "#0b0b0b",
    "Mellow": "#2d2c31",
    "Bubblegum": "#14151a",
    "Cafe Wall": "#e7e7e7",
    "Lime Bar": "#141414",
    "Honor": "#f7f5f0",
    "MoonShine": "#151226",
    "Pearl": "#0e142c",
    "Oasis": "#10131a",
    "Creamy": "#fffff4",
    "Cannabis": "#ffffff",
    "Love": "#f1485c",
    "Golden Boy": "#000000",
    "70s": "#181818",
    "Cyber Purple": "#100021",
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
    "Black Neu": `#styledHtml {
        width: 100%;
        height: 100%;
        background-color: #242424;
        color: #ffffff;
    }
    
    #styledHtml h1, #styledHtml h2, #styledHtml h3, #styledHtml h4, #styledHtml h5, #styledHtml h6 {
        margin: 32px 0 0;
        font-weight: bold;
        text-wrap: normal;
        color: #ffffff;
    }
    
    #styledHtml h1 {
        position: relative;
        font-size: 42px;
        margin: 50px 0 32px;
        width: max-content;
        z-index: 100;
        max-width: 100%;
        color: #242424;
        background-color: #fff;
        padding: 12px 16px;
        border: 2px solid #000000;
        box-shadow: 5px 5px #000000;
    }
    
    #styledHtml h2 {
        font-size: 24px;
        margin: 42px 0 0;
    }
    
    #styledHtml h3 {
        font-size: 22px;
    }
    
    #styledHtml h4 {
        font-size: 20px;
    }
    
    #styledHtml h5 {
        font-size: 18px;
    }
    
    #styledHtml h6 {
        font-size: 16px;
    }
    
    #styledHtml ul {
        list-style: square;
    }
    
    #styledHtml ol {
        list-style: decimal;
    }
    
    #styledHtml ul, #styledHtml ol {
        padding-left: 32px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin: 16px 0 0;
    }
    
    #styledHtml .blockquote {
        margin: 32px 0;
        border: 4px solid #000000;
        padding-left: 23px;
        font-size: 20px;
        padding-top: 5px;
        padding-bottom: 5px;
        color: #242424;
        background-color: #ffffff;
        box-shadow: 5px 5px #000000;
    }
    
    #styledHtml pre {
        margin: 56px 0 0;
        padding: 32px;
        border: 4px solid #000000;
        background-color: #fff;
        font-family: monospace;
        box-shadow: 5px 5px #000000;
    }
    
    #styledHtml pre code {
        padding: 0;
        background-color: transparent;
        color: #242424;
    }
    
    #styledHtml code {
        padding: 0 5px;
        background-color: #ffffff;
        font-family: monospace;
        color: #242424;
    }
    
    #styledHtml strong {
        font-weight: bold;
    }
    
    #styledHtml table {
        margin: 32px 0 0;
    }
    
    #styledHtml table tr:first-child td {
        color: #102f37;
        font-weight: bold;
        background-color: #fdfdfd;
    }
    
    #styledHtml table td {
        padding: 16px;
        border: 1px solid #fdfdfd;
    }
    
    #styledHtml em {
        font-style: italic;
    }
    
    #styledHtml a {
        color: #242424;
        background-color: #fff;
        border: 2px solid #000000;
        box-shadow: 5px 5px #000000;
        text-decoration: underline;
        padding: 5px 8px;
        -webkit-tap-highlight-color: transparent;
    }
    
    #styledHtml > a {
        display: inline-block;
        margin: 32px 0;
    }
    
    #styledHtml img {
        display: block;
        margin: 16px 0 0;
        border: 2px solid #000000;
        box-shadow: 5px 5px #000000;
    }
    
    #styledHtml p {
        font-size: 20px;
        margin: 18px 0 10px;
    }`,
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
    "Cafe Wall": "#styledHtml {\n" +
        "    width: 100%;\n" +
        "    height: 100%;\n" +
        "    background-color: #e7e7e7;\n" +
        "    color: black;\n" +
        "}\n" +
        "\n" +
        "#styledHtml h1, #styledHtml h2, #styledHtml h3, #styledHtml h4, #styledHtml h5, #styledHtml h6 {\n" +
        "    margin: 32px 0 0;\n" +
        "    font-weight: bold;\n" +
        "    text-wrap: normal;\n" +
        "    color: #70b0a4;\n" +
        "}\n" +
        "\n" +
        "#styledHtml h1 {\n" +
        "    position: relative;\n" +
        "    font-size: 42px;\n" +
        "    margin: 50px 0 32px;\n" +
        "    z-index: 100;\n" +
        "    width: max-content;\n" +
        "    max-width: 100%;\n" +
        "    color: #c68f43;\n" +
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
        "    border-left: 4px solid #f07b4c;\n" +
        "    padding-left: 23px;\n" +
        "    font-size: 20px;\n" +
        "    padding-top: 5px;\n" +
        "    padding-bottom: 5px;\n" +
        "    background-color: #ececec;\n" +
        "}\n" +
        "\n" +
        "#styledHtml pre {\n" +
        "    margin: 56px 0 0;\n" +
        "    padding: 32px;\n" +
        "    border: 2px solid #f07b4c;\n" +
        "    border-radius: 10px;\n" +
        "    background-image: radial-gradient(#cbc2b5 1px, transparent 1px), radial-gradient(#cbc2b5 1px, transparent 1px);\n" +
        "    background-size: 16px 16px;\n" +
        "    background-position: 0 0, 8px 8px;\n" +
        "    background-color: #e7e7e7;\n" +
        "    font-family: monospace;\n" +
        "}\n" +
        "\n" +
        "#styledHtml pre code {\n" +
        "    padding: 0;\n" +
        "    background-color: transparent;\n" +
        "    color: black;\n" +
        "}\n" +
        "\n" +
        "#styledHtml code {\n" +
        "    padding: 0 5px;\n" +
        "    background-color: #ffffff;\n" +
        "    font-family: monospace;\n" +
        "    color: #f07b4c;\n" +
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
        "    color: white;\n" +
        "    font-weight: bold;\n" +
        "    background-color: #c68f43;\n" +
        "}\n" +
        "\n" +
        "#styledHtml table td {\n" +
        "    padding: 16px;\n" +
        "    border: 1px solid #c68f43;\n" +
        "}\n" +
        "\n" +
        "#styledHtml em {\n" +
        "    font-style: italic;\n" +
        "}\n" +
        "\n" +
        "#styledHtml a {\n" +
        "    color: #f07b4c;\n" +
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
        "    box-shadow: 0px 10px 0 0 #c68f43;\n" +
        "}\n" +
        "\n" +
        "#styledHtml p {\n" +
        "    font-size: 20px;\n" +
        "    margin: 18px 0 10px;\n" +
        "}",
    "Lime Bar": "#styledHtml {\n" +
        "    width: 100%;\n" +
        "    height: 100%;\n" +
        "    background-color: #141414;\n" +
        "    color: #ffffff;\n" +
        "}\n" +
        "\n" +
        "#styledHtml h1, #styledHtml h2, #styledHtml h3, #styledHtml h4, #styledHtml h5, #styledHtml h6 {\n" +
        "    margin: 32px 0 0;\n" +
        "    font-weight: bold;\n" +
        "    text-wrap: normal;\n" +
        "    color: #ffffff;\n" +
        "}\n" +
        "\n" +
        "#styledHtml h1 {\n" +
        "    position: relative;\n" +
        "    font-size: 42px;\n" +
        "    margin: 50px 0 32px;\n" +
        "    z-index: 100;\n" +
        "    width: max-content;\n" +
        "    max-width: 100%;\n" +
        "    color: #ffffff;\n" +
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
        "    border-left: 4px solid #9ef500;\n" +
        "    padding-left: 23px;\n" +
        "    font-size: 20px;\n" +
        "    padding-top: 5px;\n" +
        "    padding-bottom: 5px;\n" +
        "    background-color: #101010;\n" +
        "}\n" +
        "\n" +
        "#styledHtml pre {\n" +
        "    margin: 56px 0 0;\n" +
        "    padding: 32px;\n" +
        "    border: 2px solid #9ef500;\n" +
        "    border-radius: 10px;\n" +
        "    background-image: linear-gradient(#363636 2px, transparent 2px), linear-gradient(to right, #363636 2px, transparent 2px);\n" +
        "    background-size: 32px 32px;\n" +
        "    background-color: #101010;\n" +
        "    font-family: monospace;\n" +
        "}\n" +
        "\n" +
        "#styledHtml pre code {\n" +
        "    padding: 0;\n" +
        "    background-color: transparent;\n" +
        "    color: #ffffff;\n" +
        "}\n" +
        "\n" +
        "#styledHtml code {\n" +
        "    padding: 0 5px;\n" +
        "    background-color: #101010;\n" +
        "    font-family: monospace;\n" +
        "    color: #9ef500;\n" +
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
        "    color: #327300;\n" +
        "    font-weight: bold;\n" +
        "    background-color: #9ef500;\n" +
        "}\n" +
        "\n" +
        "#styledHtml table td {\n" +
        "    padding: 16px;\n" +
        "    border: 1px solid #ffffff;\n" +
        "}\n" +
        "\n" +
        "#styledHtml em {\n" +
        "    font-style: italic;\n" +
        "}\n" +
        "\n" +
        "#styledHtml a {\n" +
        "    color: #9ef500;\n" +
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
        "    box-shadow: 0px 10px 0 0 #dbff9c;\n" +
        "}\n" +
        "\n" +
        "#styledHtml p {\n" +
        "    font-size: 20px;\n" +
        "    margin: 18px 0 10px;\n" +
        "}",
    "Honor": "\n" +
        "#styledHtml {\n" +
        "    width: 100%;\n" +
        "    height: 100%;\n" +
        "    background-color: #f7f5f0;\n" +
        "    color: #20282e;\n" +
        "}\n" +
        "\n" +
        "#styledHtml h1, #styledHtml h2, #styledHtml h3, #styledHtml h4, #styledHtml h5, #styledHtml h6 {\n" +
        "    margin: 32px 0 0;\n" +
        "    font-weight: bold;\n" +
        "    text-wrap: normal;\n" +
        "    color: #20282e;\n" +
        "}\n" +
        "\n" +
        "#styledHtml h1 {\n" +
        "    position: relative;\n" +
        "    font-size: 42px;\n" +
        "    margin: 50px 0 32px;\n" +
        "    z-index: 100;\n" +
        "    width: max-content;\n" +
        "    max-width: 100%;\n" +
        "    color: #20282e;\n" +
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
        "    border-left: 4px solid #90baad;\n" +
        "    padding-left: 23px;\n" +
        "    font-size: 20px;\n" +
        "    padding-top: 5px;\n" +
        "    padding-bottom: 5px;\n" +
        "    background-color: #fffdf7;\n" +
        "    color: #20282e;\n" +
        "}\n" +
        "\n" +
        "#styledHtml pre {\n" +
        "    margin: 56px 0 0;\n" +
        "    padding: 32px;\n" +
        "    border: 2px solid #ffffff;\n" +
        "    border-radius: 10px;\n" +
        "    background-image: repeating-linear-gradient(to right, #3f3f3f, #3f3f3f 2px, transparent 2px, transparent);\n" +
        "    background-size: 32px 32px;\n" +
        "    background-color: #20282e;\n" +
        "    font-family: monospace;\n" +
        "}\n" +
        "\n" +
        "#styledHtml pre code {\n" +
        "    padding: 0;\n" +
        "    background-color: transparent;\n" +
        "    color: #f7f5f0;\n" +
        "}\n" +
        "\n" +
        "#styledHtml code {\n" +
        "    padding: 0 5px;\n" +
        "    background-color: #20282e;\n" +
        "    font-family: monospace;\n" +
        "    color: #f7f5f0;\n" +
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
        "    color: #f7f5f0;\n" +
        "    font-weight: bold;\n" +
        "    background-color: #20282e;\n" +
        "}\n" +
        "\n" +
        "#styledHtml table td {\n" +
        "    padding: 16px;\n" +
        "    border: 1px solid #ffffff;\n" +
        "}\n" +
        "\n" +
        "#styledHtml em {\n" +
        "    font-style: italic;\n" +
        "}\n" +
        "\n" +
        "#styledHtml a {\n" +
        "    color: #20282e;\n" +
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
        "    box-shadow: 0px 10px 0 0 #20282e;\n" +
        "}\n" +
        "\n" +
        "#styledHtml p {\n" +
        "    font-size: 20px;\n" +
        "    margin: 18px 0 10px;\n" +
        "}",
    "MoonShine": "#styledHtml {\n" +
        "    width: 100%;\n" +
        "    height: 100%;\n" +
        "    background-color: #151226;\n" +
        "    color: #7b71ff;\n" +
        "}\n" +
        "\n" +
        "#styledHtml h1, #styledHtml h2, #styledHtml h3, #styledHtml h4, #styledHtml h5, #styledHtml h6 {\n" +
        "    margin: 32px 0 0;\n" +
        "    font-weight: bold;\n" +
        "    text-wrap: normal;\n" +
        "    color: #7b71ff;\n" +
        "}\n" +
        "\n" +
        "#styledHtml h1 {\n" +
        "    position: relative;\n" +
        "    font-size: 42px;\n" +
        "    margin: 50px 0 32px;\n" +
        "    z-index: 100;\n" +
        "    width: max-content;\n" +
        "    max-width: 100%;\n" +
        "    color: #7b71ff;\n" +
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
        "    border-left: 4px solid #7b71ff;\n" +
        "    padding-left: 23px;\n" +
        "    font-size: 20px;\n" +
        "    padding-top: 5px;\n" +
        "    padding-bottom: 5px;\n" +
        "    background-color: #151226;\n" +
        "    color: #7b71ff;\n" +
        "}\n" +
        "\n" +
        "#styledHtml pre {\n" +
        "    margin: 56px 0 0;\n" +
        "    padding: 32px;\n" +
        "    border: 2px solid transparent;\n" +
        "    background:\n" +
        "            radial-gradient(32px at 100% 0, #151226 6.25%, #201e43 6.3% 18.75%, #151226 18.8% 31.25%, #201e43 31.3% 43.75%, #151226 43.8% 56.25%, #201e43 56.3% 68.75%, #0000 0),\n" +
        "            radial-gradient(32px at 0 0, #151226 6.25%, #201e43 6.3% 18.75%, #151226 18.8% 31.25%, #201e43 31.3% 43.75%, #151226 43.8% 56.25%, #201e43 56.3% 68.75%, #0000 0),\n" +
        "            radial-gradient(32px at 0 100%, #151226 6.25%, #201e43 6.3% 18.75%, #151226 18.8% 31.25%, #201e43 31.3% 43.75%, #151226 43.8% 56.25%, #201e43 56.3% 68.75%, #0000 0),\n" +
        "            radial-gradient(32px at 100% 100%, #151226 6.25%, #201e43 6.3% 18.75%, #151226 18.8% 31.25%, #201e43 31.3% 43.75%, #151226 43.8% 56.25%, #201e43 56.3% 68.75%, #0000 0) #151226;\n" +
        "    background-size: 32px 32px;\n" +
        "    background-color: #151226;\n" +
        "    font-family: monospace;\n" +
        "}\n" +
        "\n" +
        "#styledHtml pre code {\n" +
        "    padding: 0;\n" +
        "    background-color: transparent;\n" +
        "    color: #f7f5f0;\n" +
        "}\n" +
        "\n" +
        "#styledHtml code {\n" +
        "    padding: 0 5px;\n" +
        "    background-color: #7b71ff;\n" +
        "    font-family: monospace;\n" +
        "    color: #151226;\n" +
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
        "    color: #7b71ff;\n" +
        "    font-weight: bold;\n" +
        "    background-color: #201e43;\n" +
        "}\n" +
        "\n" +
        "#styledHtml table td {\n" +
        "    padding: 16px;\n" +
        "    border: 1px solid #7b71ff;\n" +
        "}\n" +
        "\n" +
        "#styledHtml em {\n" +
        "    font-style: italic;\n" +
        "}\n" +
        "\n" +
        "#styledHtml a {\n" +
        "    color: #7b71ff;\n" +
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
        "    box-shadow: 0px 10px 0 0 #7b71ff;\n" +
        "}\n" +
        "\n" +
        "#styledHtml p {\n" +
        "    font-size: 20px;\n" +
        "    margin: 18px 0 10px;\n" +
        "}",
    "Pearl": "#styledHtml {\n" +
        "    width: 100%;\n" +
        "    height: 100%;\n" +
        "    background-color: #0e142c;\n" +
        "    color: #fdfdfe;\n" +
        "}\n" +
        "\n" +
        "#styledHtml h1, #styledHtml h2, #styledHtml h3, #styledHtml h4, #styledHtml h5, #styledHtml h6 {\n" +
        "    margin: 32px 0 0;\n" +
        "    font-weight: bold;\n" +
        "    text-wrap: normal;\n" +
        "    color: #fdfdfe;\n" +
        "}\n" +
        "\n" +
        "#styledHtml h1 {\n" +
        "    position: relative;\n" +
        "    font-size: 42px;\n" +
        "    margin: 50px 0 32px;\n" +
        "    z-index: 100;\n" +
        "    width: max-content;\n" +
        "    max-width: 100%;\n" +
        "    background: linear-gradient(to right, #9c92ff, #ffa9b3, #faaef9);\n" +
        "    -webkit-text-fill-color: transparent;\n" +
        "    -webkit-background-clip: text;\n" +
        "}\n" +
        "\n" +
        "#styledHtml h1:after {\n" +
        "    position: absolute;\n" +
        "    content: \"\";\n" +
        "    left: 0;\n" +
        "    bottom: -15px;\n" +
        "    width: 80%;\n" +
        "    height: 2px;\n" +
        "    background: linear-gradient(to right, #9c92ff, #ffa9b3, #faaef9, #ffffff);\n" +
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
        "    border-left: 4px solid #ffa9b3;\n" +
        "    padding-left: 23px;\n" +
        "    font-size: 20px;\n" +
        "    padding-top: 5px;\n" +
        "    padding-bottom: 5px;\n" +
        "    color: #ffffff;\n" +
        "    background: linear-gradient(to right, rgba(156, 146, 255, 0.3), rgba(255, 169, 179, 0.3), rgba(250, 174, 249, 0.3));\n" +
        "}\n" +
        "\n" +
        "#styledHtml pre {\n" +
        "    margin: 56px 0 0;\n" +
        "    padding: 32px;\n" +
        "    border: 2px solid #ffa9b3;\n" +
        "    background:\n" +
        "            radial-gradient(35.36% 35.36% at 100% 25%,#0000 66%,#3e282a 68% 70%,#0000 72%) 16px 16px/calc(2*16px) calc(2*16px),\n" +
        "            radial-gradient(35.36% 35.36% at 0    75%,#0000 66%,#3e282a 68% 70%,#0000 72%) 16px 16px/calc(2*16px) calc(2*16px),\n" +
        "            radial-gradient(35.36% 35.36% at 100% 25%,#0000 66%,#3e282a 68% 70%,#0000 72%) 0 0/calc(2*16px) calc(2*16px),\n" +
        "            radial-gradient(35.36% 35.36% at 0    75%,#0000 66%,#3e282a 68% 70%,#0000 72%) 0 0/calc(2*16px) calc(2*16px),\n" +
        "            repeating-conic-gradient(#0e142c 0 25%,#0000 0 50%) 0 0/calc(2*16px) calc(2*16px),\n" +
        "            radial-gradient(#0000 66%,#3e282a 68% 70%,#0000 72%) 0 calc(16px/2)/16px 16px\n" +
        "            #0e142c;\n" +
        "    font-family: monospace;\n" +
        "}\n" +
        "\n" +
        "#styledHtml pre code {\n" +
        "    padding: 0;\n" +
        "    background-color: transparent;\n" +
        "    color: #f7f5f0;\n" +
        "}\n" +
        "\n" +
        "#styledHtml code {\n" +
        "    padding: 0 5px;\n" +
        "    background-color: #faaef9;\n" +
        "    font-family: monospace;\n" +
        "    color: #0e142c;\n" +
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
        "    color: #fdfdfe;\n" +
        "    font-weight: bold;\n" +
        "    background-color: #ffa9b3;\n" +
        "}\n" +
        "\n" +
        "#styledHtml table td {\n" +
        "    padding: 16px;\n" +
        "    border: 1px solid #fdfdfe;\n" +
        "}\n" +
        "\n" +
        "#styledHtml em {\n" +
        "    font-style: italic;\n" +
        "}\n" +
        "\n" +
        "#styledHtml a {\n" +
        "    color: #fdfdfe;\n" +
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
        "    box-shadow: 0 0 15px #faaef9;\n" +
        "}\n" +
        "\n" +
        "#styledHtml p {\n" +
        "    font-size: 20px;\n" +
        "    margin: 18px 0 10px;\n" +
        "}",
    "Oasis": "#styledHtml {\n" +
        "    width: 100%;\n" +
        "    height: 100%;\n" +
        "    background-color: #10131a;\n" +
        "    color: #fdfdfd;\n" +
        "}\n" +
        "\n" +
        "#styledHtml h1, #styledHtml h2, #styledHtml h3, #styledHtml h4, #styledHtml h5, #styledHtml h6 {\n" +
        "    margin: 32px 0 0;\n" +
        "    font-weight: bold;\n" +
        "    text-wrap: normal;\n" +
        "    color: #fdfdfe;\n" +
        "}\n" +
        "\n" +
        "#styledHtml h1 {\n" +
        "    position: relative;\n" +
        "    font-size: 42px;\n" +
        "    margin: 50px 0 32px;\n" +
        "    z-index: 100;\n" +
        "    width: max-content;\n" +
        "    max-width: 100%;\n" +
        "    color: #fdfdfe;\n" +
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
        "    border-left: 4px solid #49fef7;\n" +
        "    padding-left: 23px;\n" +
        "    font-size: 20px;\n" +
        "    padding-top: 5px;\n" +
        "    padding-bottom: 5px;\n" +
        "    color: #ffffff;\n" +
        "    background-color: #143c46;\n" +
        "}\n" +
        "\n" +
        "#styledHtml pre {\n" +
        "    margin: 56px 0 0;\n" +
        "    padding: 32px;\n" +
        "    border: 2px solid #49fef7;\n" +
        "    background-image: linear-gradient(45deg, #102f37 50%, transparent 50%);\n" +
        "    background-size: 16px 16px;\n" +
        "    background-color: #10131a;\n" +
        "    font-family: monospace;\n" +
        "}\n" +
        "\n" +
        "#styledHtml pre code {\n" +
        "    padding: 0;\n" +
        "    background-color: transparent;\n" +
        "    color: #f7f5f0;\n" +
        "}\n" +
        "\n" +
        "#styledHtml code {\n" +
        "    padding: 0 5px;\n" +
        "    background-color: #fdfdfd;\n" +
        "    font-family: monospace;\n" +
        "    color: #102f37;\n" +
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
        "    color: #102f37;\n" +
        "    font-weight: bold;\n" +
        "    background-color: #fdfdfd;\n" +
        "}\n" +
        "\n" +
        "#styledHtml table td {\n" +
        "    padding: 16px;\n" +
        "    border: 1px solid #fdfdfd;\n" +
        "}\n" +
        "\n" +
        "#styledHtml em {\n" +
        "    font-style: italic;\n" +
        "}\n" +
        "\n" +
        "#styledHtml a {\n" +
        "    color: #fdfdfe;\n" +
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
        "    box-shadow: 0 0 25px 10px #133840;\n" +
        "}\n" +
        "\n" +
        "#styledHtml p {\n" +
        "    font-size: 20px;\n" +
        "    margin: 18px 0 10px;\n" +
        "}",
    "Creamy": "#styledHtml {\n" +
        "    width: 100%;\n" +
        "    height: 100%;\n" +
        "    background-color: #fffff4;\n" +
        "    color: #020202;\n" +
        "}\n" +
        "\n" +
        "#styledHtml h1, #styledHtml h2, #styledHtml h3, #styledHtml h4, #styledHtml h5, #styledHtml h6 {\n" +
        "    margin: 32px 0 0;\n" +
        "    font-weight: bold;\n" +
        "    text-wrap: normal;\n" +
        "    color: #020202;\n" +
        "}\n" +
        "\n" +
        "#styledHtml h1 {\n" +
        "    position: relative;\n" +
        "    font-size: 42px;\n" +
        "    margin: 50px 0 32px;\n" +
        "    z-index: 100;\n" +
        "    width: max-content;\n" +
        "    max-width: 100%;\n" +
        "    color: #020202;\n" +
        "    background-color: #ffffff;\n" +
        "    padding: 16px 24px;\n" +
        "    border-radius: 10px;\n" +
        "    border: 2px solid #020202;\n" +
        "    box-shadow: 5px 5px #020202;\n" +
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
        "    border: 2px solid #000000;\n" +
        "    padding-left: 23px;\n" +
        "    font-size: 20px;\n" +
        "    padding-top: 5px;\n" +
        "    padding-bottom: 5px;\n" +
        "    color: #020202;\n" +
        "    background-color: #ffd7c2;\n" +
        "    box-shadow: 5px 5px #020202;\n" +
        "    border-radius: 10px;\n" +
        "}\n" +
        "\n" +
        "#styledHtml pre {\n" +
        "    margin: 56px 0 0;\n" +
        "    padding: 32px;\n" +
        "    border: 2px solid #020202;\n" +
        "    font-family: monospace;\n" +
        "    background-color: #fff500;\n" +
        "    box-shadow: 5px 5px #020202;\n" +
        "    border-radius: 10px;\n" +
        "}\n" +
        "\n" +
        "#styledHtml pre code {\n" +
        "    padding: 0;\n" +
        "    background-color: transparent;\n" +
        "    color: #020202;\n" +
        "    border: none;\n" +
        "    box-shadow: none;\n" +
        "}\n" +
        "\n" +
        "#styledHtml code {\n" +
        "    padding: 0 5px;\n" +
        "    background-color: #ffd7c2;\n" +
        "    box-shadow: 5px 5px #020202;\n" +
        "    border: 2px solid #020202;\n" +
        "    font-family: monospace;\n" +
        "    color: #102f37;\n" +
        "    margin-right: 5px;\n" +
        "    margin-left: 2px;\n" +
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
        "    color: #020202;\n" +
        "    font-weight: bold;\n" +
        "    background-color: #ffd7c2;\n" +
        "}\n" +
        "\n" +
        "#styledHtml table td {\n" +
        "    padding: 16px;\n" +
        "    border: 1px solid #020202;\n" +
        "}\n" +
        "\n" +
        "#styledHtml em {\n" +
        "    font-style: italic;\n" +
        "}\n" +
        "\n" +
        "#styledHtml a {\n" +
        "    color: #020202;\n" +
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
        "    box-shadow: 5px 5px #020202;\n" +
        "    border-radius: 10px;\n" +
        "    border: 2px solid #020202;\n" +
        "}\n" +
        "\n" +
        "#styledHtml p {\n" +
        "    font-size: 20px;\n" +
        "    margin: 18px 0 10px;\n" +
        "}",
    "Cannabis": "#styledHtml {\n" +
        "    width: 100%;\n" +
        "    height: 100%;\n" +
        "    background-color: #ffffff;\n" +
        "    color: #212c3f;\n" +
        "}\n" +
        "\n" +
        "#styledHtml h1, #styledHtml h2, #styledHtml h3, #styledHtml h4, #styledHtml h5, #styledHtml h6 {\n" +
        "    margin: 32px 0 0;\n" +
        "    font-weight: bold;\n" +
        "    text-wrap: normal;\n" +
        "    color: #212c3f;\n" +
        "}\n" +
        "\n" +
        "#styledHtml h1 {\n" +
        "    position: relative;\n" +
        "    font-size: 42px;\n" +
        "    margin: 50px 0 32px;\n" +
        "    z-index: 100;\n" +
        "    width: max-content;\n" +
        "    max-width: 100%;\n" +
        "    color: #212c3f;\n" +
        "    background-color: #d0e0d9;\n" +
        "    padding: 16px 24px;\n" +
        "    border: 2px solid #020202;\n" +
        "    box-shadow: 5px 5px #020202;\n" +
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
        "    border-left: 4px solid #56ad80;\n" +
        "    padding-left: 23px;\n" +
        "    font-size: 20px;\n" +
        "    padding-top: 5px;\n" +
        "    padding-bottom: 5px;\n" +
        "    color: #020202;\n" +
        "    background-color: #d0e0d9;\n" +
        "    box-shadow: 5px 5px #020202;\n" +
        "}\n" +
        "\n" +
        "#styledHtml pre {\n" +
        "    margin: 56px 0 0;\n" +
        "    padding: 32px;\n" +
        "    border: 2px solid #56ad80;\n" +
        "    font-family: monospace;\n" +
        "    background-color: #d0e0d9;\n" +
        "    box-shadow: 5px 5px #020202;\n" +
        "}\n" +
        "\n" +
        "#styledHtml pre code {\n" +
        "    padding: 0;\n" +
        "    background: transparent;\n" +
        "    color: #020202;\n" +
        "    border: none;\n" +
        "    box-shadow: none;\n" +
        "}\n" +
        "\n" +
        "#styledHtml code {\n" +
        "    padding: 0 5px;\n" +
        "    background: linear-gradient(to right, #fb8f48, #fb6747);\n" +
        "    box-shadow: 5px 5px #020202;\n" +
        "    border: 2px solid #020202;\n" +
        "    font-family: monospace;\n" +
        "    color: #ffffff;\n" +
        "    margin-right: 5px;\n" +
        "    margin-left: 2px;\n" +
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
        "    background: linear-gradient(to right, #fb8f48, #fb6747);\n" +
        "}\n" +
        "\n" +
        "#styledHtml table td {\n" +
        "    padding: 16px;\n" +
        "    border: 1px solid #020202;\n" +
        "}\n" +
        "\n" +
        "#styledHtml em {\n" +
        "    font-style: italic;\n" +
        "}\n" +
        "\n" +
        "#styledHtml a {\n" +
        "    color: #020202;\n" +
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
        "    box-shadow: 5px 5px #020202;\n" +
        "    border-radius: 10px;\n" +
        "    border: 2px solid #020202;\n" +
        "}\n" +
        "\n" +
        "#styledHtml p {\n" +
        "    font-size: 20px;\n" +
        "    margin: 18px 0 10px;\n" +
        "}",
    "Love": "#styledHtml {\n" +
        "    width: 100%;\n" +
        "    height: 100%;\n" +
        "    background-color: #f1485c;\n" +
        "    color: #fdfdfe;\n" +
        "}\n" +
        "\n" +
        "#styledHtml h1, #styledHtml h2, #styledHtml h3, #styledHtml h4, #styledHtml h5, #styledHtml h6 {\n" +
        "    margin: 32px 0 0;\n" +
        "    font-weight: bold;\n" +
        "    text-wrap: normal;\n" +
        "    color: #fdfdfe;\n" +
        "}\n" +
        "\n" +
        "#styledHtml h1 {\n" +
        "    position: relative;\n" +
        "    font-size: 42px;\n" +
        "    margin: 50px 0 32px;\n" +
        "    z-index: 100;\n" +
        "    width: max-content;\n" +
        "    max-width: 100%;\n" +
        "    color: #fdfdfe;\n" +
        "    background: #ff7786;\n" +
        "    padding: 10px 12px;\n" +
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
        "    border-left: 4px solid #ff7786;\n" +
        "    padding-left: 23px;\n" +
        "    font-size: 20px;\n" +
        "    padding-top: 5px;\n" +
        "    padding-bottom: 5px;\n" +
        "    color: #1a0000;\n" +
        "    background-color: #f4bebf;\n" +
        "}\n" +
        "\n" +
        "#styledHtml pre {\n" +
        "    margin: 56px 0 0;\n" +
        "    padding: 32px;\n" +
        "    border-bottom: 5px solid #ff7786;\n" +
        "    background: #1a0000;\n" +
        "    font-family: monospace;\n" +
        "}\n" +
        "\n" +
        "#styledHtml pre code {\n" +
        "    padding: 0;\n" +
        "    background-color: transparent;\n" +
        "    color: #f7f5f0;\n" +
        "}\n" +
        "\n" +
        "#styledHtml code {\n" +
        "    padding: 0 5px;\n" +
        "    background-color: #fdfdfd;\n" +
        "    font-family: monospace;\n" +
        "    color: #102f37;\n" +
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
        "    color: #102f37;\n" +
        "    font-weight: bold;\n" +
        "    background-color: #fdfdfd;\n" +
        "}\n" +
        "\n" +
        "#styledHtml table td {\n" +
        "    padding: 16px;\n" +
        "    border: 1px solid #fdfdfd;\n" +
        "}\n" +
        "\n" +
        "#styledHtml em {\n" +
        "    font-style: italic;\n" +
        "}\n" +
        "\n" +
        "#styledHtml a {\n" +
        "    color: #fdfdfe;\n" +
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
        "    box-shadow: 0 5px #ff7786;\n" +
        "}\n" +
        "\n" +
        "#styledHtml p {\n" +
        "    font-size: 20px;\n" +
        "    margin: 18px 0 10px;\n" +
        "}",

    "Golden Boy": `#styledHtml {
            width: 100%;
            height: 100%;
            background-color: #000000;
            color: #d9c087;
        }
        
        #styledHtml h1, #styledHtml h2, #styledHtml h3, #styledHtml h4, #styledHtml h5, #styledHtml h6 {
            margin: 32px 0 0;
            font-weight: bold;
            text-wrap: normal;
            color: #d9c087;
        }
        
        #styledHtml h1 {
            position: relative;
            font-size: 42px;
            margin: 50px 0 32px;
            z-index: 100;
            width: max-content;
            max-width: 100%;
            color: #d9c087;
        }
        
        #styledHtml h1::after {
            position: absolute;
            content: "";
            left: 0;
            bottom: -10px;
            width: 100%;
            height: 2px;
            background-color: #d9c087;
        }
        
        #styledHtml h2 {
            font-size: 24px;
            margin: 42px 0 0;
        }
        
        #styledHtml h3 {
            font-size: 22px;
        }
        
        #styledHtml h4 {
            font-size: 20px;
        }
        
        #styledHtml h5 {
            font-size: 18px;
        }
        
        #styledHtml h6 {
            font-size: 16px;
        }
        
        #styledHtml ul {
            list-style: square;
        }
        
        #styledHtml ol {
            list-style: decimal;
        }
        
        #styledHtml ul, #styledHtml ol {
            padding-left: 32px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin: 16px 0 0;
        }
        
        #styledHtml .blockquote {
            margin: 32px 0;
            border-left: 4px solid #d9c087;
            padding-left: 23px;
            font-size: 20px;
            padding-top: 5px;
            padding-bottom: 5px;
            color: #d9c087;
            background-color: transparent;
        }
        
        #styledHtml pre {
            margin: 56px 0 0;
            padding: 32px;
            border-left: 5px solid #d9c087;
            border-right: 5px solid #d9c087;
            background:
            conic-gradient(at 10% 50%,#0000 75%,#13110d 0),
            conic-gradient(at 10% 50%,#0000 75%,#13110d 0) calc(1*25px) calc(3*25px),
            conic-gradient(at 10% 50%,#0000 75%,#13110d 0) calc(2*25px) calc(1*25px),
            conic-gradient(at 10% 50%,#0000 75%,#13110d 0) calc(3*25px) calc(4*25px),
            conic-gradient(at 10% 50%,#0000 75%,#13110d 0) calc(4*25px) calc(2*25px),
            conic-gradient(at 50% 10%,#0000 75%,#13110d 0) 0 calc(4*25px),
            conic-gradient(at 50% 10%,#0000 75%,#13110d 0) calc(1*25px) calc(2*25px),
            conic-gradient(at 50% 10%,#0000 75%,#13110d 0) calc(2*25px) 0,
            conic-gradient(at 50% 10%,#0000 75%,#13110d 0) calc(3*25px) calc(3*25px),
            conic-gradient(at 50% 10%,#0000 75%,#13110d 0) calc(4*25px) calc(1*25px),
            #000000;
        background-size: 125px 125px;
        
            font-family: monospace;
        }
        
        #styledHtml pre code {
            padding: 0;
            background-color: transparent;
            color: #f7f5f0;
        }
        
        #styledHtml code {
            padding: 0 5px;
            background-color: #d9c087;
            font-family: monospace;
            color: #000000;
        }
        
        #styledHtml strong {
            font-weight: bold;
        }
        
        #styledHtml table {
            margin: 32px 0 0;
        }
        
        #styledHtml table tr:first-child td {
            color: #d9c087;
            font-weight: bold;
            background-color: #242424;
        }
        
        #styledHtml table td {
            padding: 16px;
            border: 1px solid #fdfdfd;
        }
        
        #styledHtml em {
            font-style: italic;
        }
        
        #styledHtml a {
            color: #fdfdfe;
            text-decoration: underline;
            -webkit-tap-highlight-color: transparent;
        }
        
        #styledHtml > a {
            display: inline-block;
            margin: 32px 0;
        }
        
        #styledHtml img {
            display: block;
            margin: 16px 0 0;
            box-shadow: 0 5px #d9c087;
        }
        
        #styledHtml p {
            font-size: 20px;
            margin: 18px 0 10px;
        }`,
    "70s": `#styledHtml {
            width: 100%;
            height: 100%;
            background-color: #181818;
            color: #8a8a8a;
        }
        
        #styledHtml h1, #styledHtml h2, #styledHtml h3, #styledHtml h4, #styledHtml h5, #styledHtml h6 {
            margin: 32px 0 0;
            font-weight: bold;
            text-wrap: normal;
            color: #ffffff;
        }
        
        #styledHtml h1 {
            position: relative;
            font-size: 42px;
            margin: 50px 0 32px;
            width: max-content;
            z-index: 100;
            max-width: 100%;
            color: #ffffff;
        }
        
        #styledHtml h1::after {
            position: absolute;
            content: "";
            left: 0;
            bottom: -10px;
            width: 100%;
            height: 2px;
            background-color: #ffffff;
        }
        
        #styledHtml h2 {
            font-size: 24px;
            margin: 42px 0 0;
        }
        
        #styledHtml h3 {
            font-size: 22px;
        }
        
        #styledHtml h4 {
            font-size: 20px;
        }
        
        #styledHtml h5 {
            font-size: 18px;
        }
        
        #styledHtml h6 {
            font-size: 16px;
        }
        
        #styledHtml ul {
            list-style: square;
        }
        
        #styledHtml ol {
            list-style: decimal;
        }
        
        #styledHtml ul, #styledHtml ol {
            padding-left: 32px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin: 16px 0 0;
        }
        
        #styledHtml .blockquote {
            margin: 32px 0;
            border-left: 4px solid #ffffff;
            padding-left: 23px;
            font-size: 20px;
            padding-top: 5px;
            padding-bottom: 5px;
            color: #ffffff;
            background-color: transparent;
        }
        
        #styledHtml pre {
            margin: 56px 0 0;
            padding: 32px;
            border: 5px solid #ffffff;
            font-family: monospace;
        }
        
        #styledHtml pre code {
            padding: 0;
            background-color: transparent;
            color: #f7f5f0;
        }
        
        #styledHtml code {
            padding: 0 5px;
            background-color: #ffffff;
            font-family: monospace;
            color: #181818;
        }
        
        #styledHtml strong {
            font-weight: bold;
        }
        
        #styledHtml table {
            margin: 32px 0 0;
        }
        
        #styledHtml table tr:first-child td {
            color: #102f37;
            font-weight: bold;
            background-color: #fdfdfd;
        }
        
        #styledHtml table td {
            padding: 16px;
            border: 1px solid #fdfdfd;
        }
        
        #styledHtml em {
            font-style: italic;
        }
        
        #styledHtml a {
            color: #ffffff;
            text-decoration: underline;
            -webkit-tap-highlight-color: transparent;
        }
        
        #styledHtml > a {
            display: inline-block;
            margin: 32px 0;
        }
        
        #styledHtml img {
            display: block;
            margin: 16px 0 0;
            box-shadow: 0 5px #ffffff;
        }
        
        #styledHtml p {
            font-size: 20px;
            margin: 18px 0 10px;
        }`,
    "Cyber Purple": `#styledHtml {
        width: 100%;
        height: 100%;
        background-color: #100021;
        color: #ffffff;
    }
    
    #styledHtml h1, #styledHtml h2, #styledHtml h3, #styledHtml h4, #styledHtml h5, #styledHtml h6 {
        margin: 32px 0 0;
        font-weight: bold;
        text-wrap: normal;
        color: #ffffff;
        border-left: 4px solid #9f6ce3;
        width: max-content;
        padding-left: 15px;
        background: linear-gradient(to right, #744ba8, #100021,#100021);
    }
    
    #styledHtml h1 {
        position: relative;
        font-size: 42px;
        margin: 50px 0 32px;
        width: max-content;
        z-index: 100;
        max-width: 100%;
        color: #ffffff;
        padding-left: 15px;
        border-left: 4px solid #9f6ce3;
        background: linear-gradient(to right, #744ba8, #100021,#100021);
    }
    
    #styledHtml h2 {
        font-size: 24px;
        margin: 42px 0 0;
    }
    
    #styledHtml h3 {
        font-size: 22px;
    }
    
    #styledHtml h4 {
        font-size: 20px;
    }
    
    #styledHtml h5 {
        font-size: 18px;
    }
    
    #styledHtml h6 {
        font-size: 16px;
    }
    
    #styledHtml ul {
        list-style: square;
    }
    
    #styledHtml ol {
        list-style: decimal;
    }
    
    #styledHtml ul, #styledHtml ol {
        padding-left: 32px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin: 16px 0 0;
    }
    
    #styledHtml .blockquote {
        margin: 32px 0;
        border-left: 4px solid #9f6ce3;
        padding-left: 23px;
        font-size: 20px;
        padding-top: 5px;
        padding-bottom: 5px;
        color: #ffffff;
        background: linear-gradient(to right, #744ba8, #100021,#100021);
    }
    
    #styledHtml pre {
        margin: 56px 0 0;
        padding: 32px;
        border: 2px solid #9f6ce3;
        background-color: #2e203c;
        font-family: monospace;
    }
    
    #styledHtml pre code {
        padding: 0;
        background-color: transparent;
        color: #ffffff;
    }
    
    #styledHtml code {
        padding: 0 5px;
        background-color: #9f6ce3;
        font-family: monospace;
        color: #ffffff;
    }
    
    #styledHtml strong {
        font-weight: bold;
    }
    
    #styledHtml table {
        margin: 32px 0 0;
    }
    
    #styledHtml table tr:first-child td {
        color: #ffffff;
        font-weight: bold;
        background-color: #2e203c;
    }
    
    #styledHtml table td {
        padding: 16px;
        border: 1px solid #fdfdfd;
    }
    
    #styledHtml em {
        font-style: italic;
    }
    
    #styledHtml a {
        color: #ffffff;
        text-decoration: underline;
        padding: 5px 8px;
        -webkit-tap-highlight-color: transparent;
    }
    
    #styledHtml > a {
        display: inline-block;
        margin: 32px 0;
    }
    
    #styledHtml .img-wrapper {
        position: relative;
    }
    
    #styledHtml .img-wrapper::after {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        content: "";
        background: linear-gradient(to bottom, transparent, transparent, #100021);
    }
    
    #styledHtml img {
        display: block;
        margin: 16px 0 0;
        position: relative;
    }
    
    #styledHtml p {
        font-size: 20px;
        margin: 18px 0 10px;
    }`,
};