import React, { Component } from 'react';
import { FaCopyright,FaBell, FaBed, FaBath,FaPauseCircle,FaHeart,FaUser, FaDollarSign, FaLandmark, FaAngleDown, FaTextHeight, FaLocationArrow, FaSearchLocation, FaCalendar, FaCalendarWeek, FaCalendarDay, FaFilter, FaDumpster, FaDrumSteelpan, FaStopCircle, FaPlayCircle, FaHandPointRight, FaToggleOn, FaCompress, FaInfoCircle, FaIdBadge, FaAlignRight, FaCode, FaLink, FaImage} from 'react-icons/fa';
// import Cookies from 'js-cookie';
import css from './style.css';
import NavBar from '../../components/navbar';
import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {DropdownButton, Dropdown} from 'react-bootstrap';
import Cookies from 'js-cookie';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getBlogCategory} from '../../core/actions/actions';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import axios from 'axios';
import SweetAlert from 'react-bootstrap-sweetalert';
// import "!style-loader!css-loader!react-bootstrap-sweetalert/dist/css";
var csrftokencookie = Cookies.get('csrftoken');
class AddBlog extends Component {
    state={
        contentLocalVarPrev:"",
        contentLocalVarPresent:"",
        contentLocalVar:"",
        mainHeading:null,
        varTag:null,

        title               : null,
        authorName          : null,
        authorDetail        : null,
        content             : null,
        image               : null,
        selectedCategory    : "category of post",
        selectedSubCategory : "sub-category of post"
    }

    componentDidMount(){
        this.props.getBlogCategory();
        <SweetAlert success title="Bad Request" onConfirm={this.state.selectedCategory}>
            Some thing went wrong<br/>Please try again!
        </SweetAlert>;
    }

    componentWillReceiveProps(){

    }


    myTitle = e => this.setState({title:e.target.value});
    myAuthorName = e => this.setState({authorName:e.target.value});
    myAuthorDetail = e => this.setState({authorDetail:e.target.value});
    myImage = e => {this.setState({image:e.target.files[0]})};

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        let form_data = new FormData();
        form_data.append('title', this.state.title);
        form_data.append('author_name', this.state.authorName);
        form_data.append('author_detail', this.state.authorDetail);
        form_data.append('content', this.state.content);
        form_data.append('image', this.state.image, this.state.image.name);
        form_data.append('category', this.state.selectedCategory);
        form_data.append('sub_category', this.state.selectedSubCategory);
        let url = '/api/post/';
        axios.post(url, form_data, {
          headers: {
            'content-type': 'multipart/form-data'
          }
        })
            .then(res => {
              console.log(res);
            res.data==201
            ?<><SweetAlert success title="Successfully Posted!" onConfirm={this.props.history.push("/blog")}>
                You clicked the button!
                </SweetAlert></>
            :<SweetAlert success title="Bad Request" onConfirm={this.props.history.push("/createBlog")}>
            Some thing went wrong<br/>Please try again!
            </SweetAlert>;
            })
            .catch(err => console.log(err))
      };



    render()
     { 
        console.log(this.state)
          return ( 
        <>
        <NavBar/>
        <div className={css.container}>
            <div className="row">
               <div className="col-md-3">
                </div>
                <div className="col-md-6">
                    <div className={css.parent_card}>
                        <div className={css.cross}>
                        <Link className={css.Link} to="/blog">x</Link>
                        </div>
                        <div className={css.title_box}>
                            <input placeholder = "title of blog" onChange={this.myTitle}/>
                        </div>
                        <div className={css.author_name_box}>
                            <input placeholder = "author name" onChange={this.myAuthorName}/>
                        </div>
                        <div className={css.author_detail_box}>
                            <input placeholder = "author detail" onChange={this.myAuthorDetail}/>
                        </div>
                        <div className={css.formatter_box}>
                            <div className={css.CK_editor_box}>
                                <CKEditor
                    
                                    editor={ ClassicEditor }
                                    data=""
                                    onInit={ editor => {
                                        // You can store the "editor" and use when it is needed.
                                        console.log( 'Editor is ready to use!', editor );
                                    } }
                                    onChange={ ( event, editor ) => {
                                        const data = editor.getData();
                                        console.log( { event, editor, data } );
                                        this.setState({content:data})
                                    } }
                                    onBlur={ ( event, editor ) => {
                                        console.log( 'Blur.', editor );
                                    } }
                                    onFocus={ ( event, editor ) => {
                                        console.log( 'Focus.', editor );
                                    } }
                                />
                            </div>
                            <div className={css.upload_text}>
                            <span className={css.upload_text1}>upload cover image</span>
                            <input type="file"
                                        id="image"
                                        label="upload cover image"
                                        onChange={this.myImage} className={css.upload_text2}></input>
                            </div>
                        </div>

                        <div className={css.select_category_box}>
                            <select onChange={ (event) => {this.setState({selectedCategory:event.target.value})} }>
                                <option>category of post</option>
                                {this.props.Status.GET_BLOG_CATEGORY!=undefined
                                ?this.props.Status.GET_BLOG_CATEGORY.map((item)=>
                                <>
                                <option value={item.category_name}>{item.category_name}</option>
                                </>)
                                :null}
                            </select>
                        </div>

                        <div className={css.sub_category_box}>
                        <select onChange={ (event) => {this.setState({selectedSubCategory:event.target.value})} }>
                                <option>sub-category of post</option>
                                {this.props.Status.GET_BLOG_CATEGORY!=undefined
                                ?this.props.Status.GET_BLOG_CATEGORY.map((item)=>
                                item.category_name===this.state.selectedCategory
                                ?item.sub_category_set.map((sub_item)=><option>{sub_item.sub_category_name}</option>)
                                :null
                                )
                                :null
                                }
                        </select>
                        </div>

                        <div className={css.post_button}>
                            <button onClick={this.handleSubmit}>Add New</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                </div>
            </div>
        </div>
        </>
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
export default connect(mapStateToProps, matchDispatchToProps)(AddBlog);