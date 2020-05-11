import React, { Component } from 'react';
import MathJax from 'react-mathjax2';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import NavBar from '../components/navbar';
import JsxParser from 'react-jsx-parser';
import {Node} from 'react-mathjax2';
class Formatter extends Component {
    text = `<NavBar/><h3>This is an inline formula written in AsciiMath: <formula int_(10^2)^2 4*3/9^15 formula></h3><br/>
    This is an inline formula written in AsciiMath: <formula int_(10^2)^2 4*3/9^15 formula> <br/>`
    formu = 'h = int_(10^2)^2 4*3/9^15'
    render() {
        return (
            <div className="App">
                    <MathJax.Context>
                        <div>
                            <JsxParser
                                components={{NavBar,Node}}
                                jsx={this.text.replace(/<formula/g,"<Node inline>{'").replace(/formula>/g,"'}</Node>")}
                            />
                        </div>
                    </MathJax.Context>
            </div>
        );
    }
}

export default Formatter;

