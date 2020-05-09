import React, { Component } from 'react';
import { FaBell, FaBed, FaBath,FaPauseCircle,FaHeart,FaUser, FaDollarSign, FaLandmark, FaAngleDown, FaTextHeight, FaLocationArrow, FaSearchLocation, FaCalendar, FaCalendarWeek, FaCalendarDay, FaFilter, FaDumpster, FaDrumSteelpan, FaStopCircle, FaPlayCircle, FaHandPointRight, FaToggleOn, FaCompress, FaInfoCircle, FaIdBadge, FaAlignRight} from 'react-icons/fa';
// import Cookies from 'js-cookie';
import css from './style.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
class NavBar extends Component {
    state={
        showMenu:false
    }
    componentWillReceiveProps(){

    }
    
    render()
     { 
          return ( 
        <div className={css.navbar_div}>
            <div className={css.brand}>
                <Link className={css.Link} to="/"><span className={css.main}>TECH</span><span className={css.sub}>nology</span></Link>
            </div>
            <div className={css.desktop_menu}>
                        <Link className={css.Link} to="/"><span>PROTFOLIO</span></Link>
                        <span>PROJECTS</span>
                        <span>INTERESTS</span>
                        <Link className={css.Link} to="/blog"><span>BLOGS</span></Link>
                        <span>CONTACT</span>
                </div>
            <div>
                <div className={css.menu_toggle} onClick={()=>{this.setState({showMenu:!this.state.showMenu})}}>
                    <FaAlignRight className={css.toggle_button}/>
                </div>
                <div className={css.menu} style={{display:this.state.showMenu?"block":null}}>
                    <div className={css.menu_block}>
                        <Link className={css.Link} to="/"><span>PROTFOLIO</span></Link>
                        <div>PROJECTS</div>
                        <div>INTERESTS</div>
                        <Link className={css.Link} to="/blog"><span>BLOGS</span></Link>
                        <div>CONTACT</div>
                    </div>
                    
                </div>s
            </div>
        </div>
    );
  }
}

export default NavBar;