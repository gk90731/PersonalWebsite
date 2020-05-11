import React, {Component} from 'react';
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Protfolio from '../container/protfolio/index.js';
import AddBlog from '../container/add_blog';
import BlogCategory from '../container/blog_category';
import PostTopic from '../container/post_topic';
import PostDetail from '../container/post_detail';
import Formatter from '../container/formatter'
export default class Routes extends Component {
    render() {
        
    return (
        <div>
            <Router>
                <Switch>
                    {/* Looking for userToken */}
                    {/* If userToken is available in local storage than render the required component */}
                    <Route exact path="/" {...this.props} component={Protfolio}></Route>
                    <Route path="/blog" {...this.props} component={BlogCategory}></Route>
                    <Route path="/createBlog" {...this.props} component={AddBlog}></Route>
                    <Route path="/blogTopic" {...this.props} component={PostTopic}></Route>
                    <Route path="/bolgDetail/:Id" {...this.props} component={PostDetail}></Route>
                    
                    <Route path="/exp" component={Formatter}></Route>
                </Switch>
            </Router>
        </div>
    )
}
}
