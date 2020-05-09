import React, { Component } from 'react';
import css from './style.css';
import { FaBell, FaBed, FaBath,FaPauseCircle,FaHeart,FaUser, FaDollarSign, FaLandmark, FaAngleDown, FaTextHeight, FaLocationArrow, FaSearchLocation, FaCalendar, FaCalendarWeek, FaCalendarDay, FaFilter, FaDumpster, FaDrumSteelpan, FaStopCircle, FaPlayCircle, FaHandPointRight, FaArrowRight} from 'react-icons/fa';
// import Cookies from 'js-cookie';
import Typist from 'react-typist';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import BackgroundImage from '../navbar/gaurav.jpeg';
class Banner extends Component {
    state={
    }
    componentWillReceiveProps(){

    }
    
    render()
     { 
          return ( 
        <>
        <div style={{backgroundImage: `url(${"static/assets/gaurav.jpeg"})`,backgroundPosition:"center",backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
        <div className={css.coloured_bg} >
            
        </div>
        </div>
        <div className={css.banner_content}>
            <Typist><span className={css.banner_title}>I AM A TECH ENTHUSIAST</span><br/>
            <span className={css.banner_name}>- Kumar Gaurav</span></Typist>
            <button className={css.banner_button} onClick={this.props.handleOnClick}>Explore</button><br/>
            <Link className={css.Link} to="/blog"><span className={css.banner_text}>Jump to Blogs</span></Link>
            <span className={css.banner_arrow}><FaArrowRight/></span>
        </div>
        </>
    );
  }
}

export default Banner;