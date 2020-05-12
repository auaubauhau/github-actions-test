// Created by Byeonggeol Ha on 2020-05-12
import * as React from "react";
import * as ReactDOM from "react-dom";
import * as showdown from "showdown";
import * as content from "./page/main.md";


export const Main = () => {
    const converter = new showdown.Converter();
    return (
        <div dangerouslySetInnerHTML={{__html: converter.makeHtml(content)}}/>
    );
}

ReactDOM.render(<Main/>, document.getElementById('root'));
