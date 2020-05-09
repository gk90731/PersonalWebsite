import React, { Component } from 'react';
import css from './style.css';
import NavBar from '../../components/navbar';

import {FaPlus, FaTelegram, FaDownload, FaAngleDown} from 'react-icons/fa';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import ProgressBar from '../../components/progress_bar/index.js';

import Cookies from 'js-cookie';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getBlogCategory} from '../../core/actions/actions';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
var csrftokencookie = Cookies.get('csrftoken');
class BlogCategory extends Component {
    componentDidMount(){
        this.props.getBlogCategory()
    }
    render() {
        console.log(this.props.Status.GET_BLOG_CATEGORY+"yessss")
        return (
            <div >
                <NavBar/>
                <div className={css.container}>
                    <div className="row" style={{margin:"0"}}>
                        <div className="col-md-3">
                        </div>
                        <div className="col-md-6">
                            <div className={css.parent_card}>
                            <div className={css.post_button}>
                            <Link className={css.Link} to="/createBlog"><button>Add New Blog</button></Link>
                            </div>


                            {this.props.Status.GET_BLOG_CATEGORY!=undefined

                            ?this.props.Status.GET_BLOG_CATEGORY.map((item)=><>
                            <ExpansionPanel >
                            <ExpansionPanelSummary expandIcon = {<FaAngleDown style={{ fontSize: 16, color:'#222' }}/>}>
                            <span className={css.skill}>{item.category_name}</span>
                            </ExpansionPanelSummary>
                            {item.sub_category_set.map((sub_item)=><>
                            <ExpansionPanelDetails>
                            <div className={css.skill_divisions}>
                            <span className={css.card_label}>{sub_item.sub_category_name}</span>
                            </div>
                            <hr/>
                            </ExpansionPanelDetails>
                            </>)}
                            </ExpansionPanel>
                            <br/>
                            </>)

                            :null}
                            
                            
                            </div>
                        </div>
                        <div className="col-md-3">
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

//function receive data as props on axios call
function mapStateToProps(state) {
    return {
        Status: state.Status
    };
  }
  
  //function to send data for axios call
  function matchDispatchToProps(dispatch){
    return bindActionCreators({getBlogCategory: getBlogCategory}, dispatch);
  }
  
  
  //connect function -- empowering the component by glueing the mapStateToProps and matchDispatchToProps
  export default connect(mapStateToProps, matchDispatchToProps)(BlogCategory);