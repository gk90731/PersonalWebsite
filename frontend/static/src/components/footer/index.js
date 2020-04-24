import React, { Component } from 'react';
import { FaCopyright,FaBell, FaBed, FaBath,FaPauseCircle,FaHeart,FaUser, FaDollarSign, FaLandmark, FaAngleDown, FaTextHeight, FaLocationArrow, FaSearchLocation, FaCalendar, FaCalendarWeek, FaCalendarDay, FaFilter, FaDumpster, FaDrumSteelpan, FaStopCircle, FaPlayCircle, FaHandPointRight, FaToggleOn, FaCompress, FaInfoCircle, FaIdBadge, FaAlignRight} from 'react-icons/fa';
// import Cookies from 'js-cookie';
import css from './style.css';
import '../footer/style.css';
class Footer extends Component {
    state={
    }
    componentWillReceiveProps(){

    }
    
    render()
     { 
          return ( 
        <div className={css.footer}>
            &nbsp;
            <span><FaCopyright/></span>&nbsp;
            <span>All Rights Reserved to Kumar Gaurav</span>
        </div>
    );
  }
}

export default Footer;