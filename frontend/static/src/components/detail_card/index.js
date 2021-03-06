import React, { Component } from 'react';
import css from './style.css';
import { FaBell, FaBed, FaBath,FaPauseCircle,FaHeart,FaUser, FaDollarSign, FaLandmark, FaAngleDown, FaTextHeight, FaLocationArrow, FaSearchLocation, FaCalendar, FaCalendarWeek, FaCalendarDay, FaFilter, FaDumpster, FaDrumSteelpan, FaStopCircle, FaPlayCircle, FaComment, FaStar, FaThumbsUp, FaShare, FaShareAlt} from 'react-icons/fa';
import Dropdown from 'react-bootstrap/Dropdown';
import {
  FacebookShareButton,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  TelegramIcon,
  WhatsappIcon,
  EmailIcon,
} from "react-share";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import JsxParser from 'react-jsx-parser';
import {Node} from 'react-mathjax2';
import MathJax from 'react-mathjax2';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import axios from 'axios';
import NavBar from '../../components/navbar';



class DetailCard extends Component {


    state={
      visibilityMediaIcons:false,
      likes:null,
      data:null
    }


    componentDidMount(){
        this.props.item.state!=undefined?this.setState({likes:this.props.item.state.detail.likes}):null
        this.props.item.state!=undefined?this.setState({data:this.props.item.state.detail})
        :axios({
          method: 'options',
          url: '/api/post/',
          headers: {
            // 'Authorization':"Token 0997d283d37828b28126eb7d3aa008c647816135"
          }, 
          data: {
            postId:parseInt(window.location.href.split("/").splice(-1))
          }
        }).then((res)=>{
          console.log(res)
          this.setState({data:res.data[0],likes:res.data[0].likes})
        }).catch(err=>console.log(err)); 
    }


    componentWillReceiveProps(){
        
    }


    handleLike = (id) =>{
      axios({
        method: 'put',
        url: '/api/post/',
        headers: {
          // 'Authorization':"Token 0997d283d37828b28126eb7d3aa008c647816135"
        }, 
        data: {
          postId:id
        }
      }).then((res)=>{
        res.data.response==="exists"?this.setState({likes:this.state.likes+1}):console.log("some error")
        console.log(res.data)
      }).catch(err=>console.log(err)); 
    }
    shareUrl = window.location.href
    // title = "Please checkout my new Blog Post on TechnoHub Blogs"
    title = "Please checkout new Blog on TECH nology By :"
    render()
     { 
        // console.log(Cookies.get('csrftoken'),"yeah cookie rtendered")
        // console.log(String(this.shareUrl.split("/").splice(-1))+"i am here....")
        console.log(this.state.data!=null?this.state.data[0]:null+"this is our data")
          return (  
        <>
        <NavBar/>
        {this.state.data!=undefined
        ?<div className={css.container}><div className="container">
            <div className={css.parent_container}>
              <div className={css.background_banner}>
              <img src={this.state.data.image} style={{width:"100%",height:"100%",display:"block"}}/>
              </div>
              <div className={css.content_box}>
                <div className={css.post_heading}>
                {this.state.data.title}
                </div>
                <div className={css.content}>
                  <MathJax.Context>
                  <JsxParser
                      components={{Node}}
                      jsx={this.state.data.content.replace(/&lt;formula/g,"<Node inline>{'").replace(/formula&gt;/g,"'}</Node>")}
                  />
                  </MathJax.Context>
                </div>
                <div className={css.author_name}>By {this.state.data.author_name.split(',')}</div>
                <div className={css.author_detail}>{this.state.data.author_detail.split(',')}</div>
                <div className={css.comment_div}>
                  <span className={css.comment_head}></span>
                  <hr/>
                  <div className={css.name_box}></div>
                  <div className={css.email_box}></div>
                  <div className={css.photo_head}></div>
                  <div className={css.photo_box}></div>
                  <div className={css.comment_box}></div>
                </div>
              </div>
            </div>
        </div>
        
        
        <div className={css.like_share}>
          <div className={css.like_box} onClick={(e)=>{this.handleLike(this.state.data.id)}}>
          <FaThumbsUp className={css.like_icon}/>
          <div className={css.like_count}>{this.state.likes!=null?this.state.likes:null}</div>
          </div>
          <div className={css.share_box} onClick={()=>{this.setState({visibilityMediaIcons:!this.state.visibilityMediaIcons})}}>
          <FaShareAlt className={css.share_icon} />
          </div>
        </div>
        <div className={css.social_media} style={{display:this.state.visibilityMediaIcons?"block":null}}>
          <div>
          <FacebookShareButton
            url={this.shareUrl}
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          </div>

          <div>
          <FacebookMessengerShareButton
            url={this.shareUrl}
            appId="521270401588372"
          >
            <FacebookMessengerIcon size={32} round />
          </FacebookMessengerShareButton>
          </div>

          <div>
          <TwitterShareButton
            url={this.shareUrl}
            title={this.title+this.state.data.author_name.split(',')[0]}
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          </div>

          <div>
            <TelegramShareButton
              url={this.shareUrl}
              title={this.title+this.state.data.author_name.split(',')[0]}
            >
              <TelegramIcon size={32} round />
            </TelegramShareButton>
          </div>

          <div>
            <WhatsappShareButton
              url={this.shareUrl}
              title={this.title+this.state.data.author_name.split(',')[0]}
              separator=":: "
            >
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
          </div>

          <div>
            <LinkedinShareButton url={this.shareUrl}>
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>
          </div>

          <div>
            <EmailShareButton
              url={this.shareUrl}
              subject={this.title+this.state.data.author_name.split(',')[0]}
              body="body"
            >
              <EmailIcon size={32} round />
            </EmailShareButton>
          </div>
          </div></div>:<Loader className={css.loader} type="Bars" color="#FD5C24" height={80} width={80} />}
          
        </>
    );
  }
}

export default DetailCard;