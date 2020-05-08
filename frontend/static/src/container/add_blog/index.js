import React, { Component } from 'react';
import { FaCopyright,FaBell, FaBed, FaBath,FaPauseCircle,FaHeart,FaUser, FaDollarSign, FaLandmark, FaAngleDown, FaTextHeight, FaLocationArrow, FaSearchLocation, FaCalendar, FaCalendarWeek, FaCalendarDay, FaFilter, FaDumpster, FaDrumSteelpan, FaStopCircle, FaPlayCircle, FaHandPointRight, FaToggleOn, FaCompress, FaInfoCircle, FaIdBadge, FaAlignRight, FaCode, FaLink, FaImage} from 'react-icons/fa';
// import Cookies from 'js-cookie';
import css from './style.css';
import NavBar from '../../components/navbar';
import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {DropdownButton, Dropdown} from 'react-bootstrap';
class AddBlog extends Component {
    state={
        content : [],
        contentLocalVarPrev:"",
        contentLocalVarPresent:"",
        contentLocalVar:"",
        mainHeading:null,
        varTag:null,
    }
    componentWillReceiveProps(){

    }
    render()
     { 
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
                        x
                        </div>
                        <div className={css.title_box}>
                            <input placeholder = "title of blog"/>
                        </div>
                        <div className={css.author_name_box}>
                            <input placeholder = "author name"/>
                        </div>
                        <div className={css.author_detail_box}>
                            <input placeholder = "author detail"/>
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
                            upload cover image
                            </div>
                        </div>
                        <div className={css.select_category_box}>
                            <select>
                                <option>category of post</option>
                                <option>ML</option>
                                <option>DRF</option>
                                <option>React.js</option>
                                <option>Redux</option>
                            </select>
                        </div>
                        <div className={css.sub_category_box}>
                        <select>
                                <option>sub-category of post</option>
                                <option>jkfgjdkf</option>
                                <option>jkfgjdkf</option>
                                <option>jkfgjdkf</option>
                                <option>jkfgjdkf</option>
                                <option>jkfgjdkf</option>
                            </select>
                        </div>
                        <div className={css.post_button}>
                            <button>Add New</button>
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

export default AddBlog;