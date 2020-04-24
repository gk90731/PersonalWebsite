import React, { Component } from 'react';
import { FaBell, FaBed, FaBath,FaPauseCircle,FaHeart,FaUser, FaDollarSign, FaLandmark, FaAngleDown, FaTextHeight, FaLocationArrow, FaSearchLocation, FaCalendar, FaCalendarWeek, FaCalendarDay, FaFilter, FaDumpster, FaDrumSteelpan, FaStopCircle, FaPlayCircle, FaHandPointRight, FaToggleOn, FaCompress, FaInfoCircle, FaIdBadge, FaAlignRight} from 'react-icons/fa';
// import Cookies from 'js-cookie';
import css from './style.css';
import './style.css'
class ProgressBar extends Component {
    state={
    }
    componentWillReceiveProps(){

    }
    
    render()
     { 
          return ( 
        <>
        <div className={css.progress_bar_box} style={{background: `linear-gradient(to right, rgb(184, 128, 64) `+this.props.val+`%,rgb(255, 255, 254) 0%)`}}>
            
        </div>
        

        </>
    );
  }
}

export default ProgressBar;