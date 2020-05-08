import React, { Component } from 'react';
import css from './style.css';
import { FaBell, FaBed, FaBath,FaPauseCircle,FaHeart,FaUser, FaDollarSign, FaLandmark, FaAngleDown, FaTextHeight, FaLocationArrow, FaSearchLocation, FaCalendar, FaCalendarWeek, FaCalendarDay, FaFilter, FaDumpster, FaDrumSteelpan, FaStopCircle, FaPlayCircle, FaComment, FaStar, FaThumbsUp} from 'react-icons/fa';
import Dropdown from 'react-bootstrap/Dropdown';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { withRouter } from 'react-router';
class Cards extends Component {


    state={
        likes:null
    }


    componentDidMount(){
        this.setState({likes:this.props.item.likes})
    }


    componentWillReceiveProps(){
        
    }
    
    
    render()
    
     { 
        // console.log(Cookies.get('csrftoken'),"yeah cookie rtendered")
        
          return (  
        <div>
            <div className={css.parent_card}> 
                <div className={css.content_card}>
                    <span className={css.author_name}>By {this.props.item.author_name.split(',')}</span>
                    <span className={css.author_details}>{this.props.item.author_detail.split(',')}</span>
                    <span className={css.post_topic_name} id={this.props.item.id} 
                            onClick={(e)=>{this.props.history.push({
                                pathname: '/bolgDetail/'+this.props.item.id,
                                state: { detail: this.props.item }
                              })}}>{this.props.item.title}</span>
                    <span className={css.post_topic_details}>{ReactHtmlParser(this.props.item.content)}</span>
                    <button className={css.read_more} id={this.props.item.id} 
                            onClick={(e)=>{this.props.history.push({
                                pathname: '/bolgDetail/'+this.props.item.id,
                                state: { detail: this.props.item }
                              })}}>read more</button>
                    {/* <span className={css.comment}><FaComment/><span>10</span></span> */}
                    <span className={css.clap}><FaThumbsUp/><span className={css.like_count}>{this.state.likes!=null?this.state.likes:null}</span></span>
                </div>
                <div className={css.picture_card}>
                <img src={this.props.item.image} style={{width:"100%",height:"100%",display:"block"}}/>
                </div>
            </div>
        </div>
    );
  }
}

export default withRouter(Cards);