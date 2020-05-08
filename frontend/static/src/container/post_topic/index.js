import React, { Component } from 'react';
import css from './style.css';
import { FaBell, FaBed, FaBath,FaPauseCircle,FaHeart,FaUser, FaDollarSign, FaLandmark, FaAngleDown, FaTextHeight, FaLocationArrow, FaSearchLocation, FaCalendar, FaCalendarWeek, FaCalendarDay, FaFilter, FaDumpster, FaDrumSteelpan, FaStopCircle, FaPlayCircle} from 'react-icons/fa';
import Dropdown from 'react-bootstrap/Dropdown';
import Cards from '../../components/cards';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import NavBar from '../../components/navbar'
class PostTopic extends Component {
    state={
      posts : null
    }
    componentDidMount(){
      axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/api/post/',
        headers: {
          // 'Authorization':"Token 0997d283d37828b28126eb7d3aa008c647816135"
        }
      }).then((res)=>{
        this.setState({posts:res.data})
        console.log(res.data)
      }).catch(err=>console.log(err)); 
    }
    componentWillReceiveProps(){
        
    }
    
    render()
    
     { 
        // console.log(Cookies.get('csrftoken'),"yeah cookie rtendered")
        
          return (  
        <>
        <div className={css.container}>
          <NavBar/>
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              {this.state.posts!=null
                ?<>
                {this.state.posts.map((item) =>  
                  <Cards key={item.id} item={item}/>  
                )}
                <br/></>
                :<Loader className={css.loader} type="Bars" color="#FD5C24" height={80} width={80} />}
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
        </>
    );
  }
}

export default PostTopic;