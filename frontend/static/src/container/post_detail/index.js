import React, { Component } from 'react';
import css from './style.css';
import { FaBell, FaBed, FaBath,FaPauseCircle,FaHeart,FaUser, FaDollarSign, FaLandmark, FaAngleDown, FaTextHeight, FaLocationArrow, FaSearchLocation, FaCalendar, FaCalendarWeek, FaCalendarDay, FaFilter, FaDumpster, FaDrumSteelpan, FaStopCircle, FaPlayCircle} from 'react-icons/fa';
import Dropdown from 'react-bootstrap/Dropdown';
import DetailCard from '../../components/detail_card';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
class PostDetail extends Component {
    state={
    }
    componentDidMount(){
    }
    componentWillReceiveProps(){
        
    }
    
    render()
    
     { 
        console.log(this.props)
        
          return (  
        <div>
              {this.props.location!==undefined
                ?<DetailCard item={this.props.location}/>
                :<Loader className={css.loader} type="Bars" color="#FD5C24" height={80} width={80} />}
        </div>
    );
  }
}

export default PostDetail;