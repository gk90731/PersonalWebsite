import React, { Component } from 'react';
import css from './style.css';
import NavBar from '../../components/navbar/index.js';
import Banner from '../../components/banner/index.js'
import {FaPlus, FaTelegram, FaDownload} from 'react-icons/fa';

import leader from './leader.jpg';
import team from './team.jpg';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Icon from '@material-ui/core/Icon';
import Divider from '@material-ui/core/Divider';
import ProgressBar from '../../components/progress_bar/index.js';
import Footer from '../../components/footer';
class Protfolio extends Component {
    state={
        
    }
    componentWillReceiveProps(){

    }
    myDivToFocus = React.createRef()
    handleOnClick = () => {
        //.current is verification that your element has rendered
        if(this.myDivToFocus.current){
            this.myDivToFocus.current.scrollIntoView({ 
               behavior: "smooth", 
               block: "nearest"
            })
        }}
        
    render()
     { 
          return ( 
        <div >
            <NavBar className={css.navbar}/>
            <Banner handleOnClick = {this.handleOnClick}/>
            <div className={css.content} ref={this.myDivToFocus}>
                <div className={css.prot_moto}>
                    <div className={css.heading}>
                        <span className={css.head}>MOTO</span>
                        <span className={css.dot}>.</span>
                    </div>
                    <div className={css.content} >
                        <img src="static/assets/leader.jpg" className={css.leader_img}/>
                        <div className={css.moto_mask}></div>
                        <span className={css.content_text} >
                        <p>Lorem Ipsum is simply dummy text of the printing<br/> 
                        and typesetting industry. Lorem Ipsum has been <br />
                        the industry's standard dummy text ever since the 1500s</p>
                        </span>
                    </div>
                </div>
                <div className={css.prot_hire}>
                    <div className={css.heading}>
                        <span className={css.head}>Why You Hire Me?</span>
                        {/* <span className={css.dot">?</span> */}
                    </div>
                    <div className={css.content}>
                        <img src="static/assets/team.jpg" className={css.leader_img}/>
                        <div className={css.moto_mask}></div>
                        <span className={css.content_text}>
                        <p>Lorem Ipsum is simply dummy text of the printing<br/> 
                        and typesetting industry. Lorem Ipsum has been <br/>
                        the industry's standard dummy text ever since the 1500s</p>
                        </span>
                    </div>
                </div>
                {/* <div className={css.prot_skills"> */}
                    <div className={css.prot_skills_heading}>
                        <span className={css.prot_skills_head}>SKILLS</span>
                        <span className={css.prot_skills_dot}>.</span>
                    </div>
                    <div className={css.skill_content}>
                        <ExpansionPanel >
                            <ExpansionPanelSummary expandIcon = {<FaPlus style={{ fontSize: 16, color:'#222' }}/>}>
                                <span className={css.skill}>WebDevelopment</span>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                            <div className={css.container}>
                            <div className={css.skill_divisions}>
                            <span className={css.card_label}>Django :</span>
                            <span className={css.card_data}><ProgressBar val={85} /></span>
                            </div>
                            <hr/>
                            <div className={css.skill_divisions}>
                            <span className={css.card_label}>DRF :</span>
                            <span className={css.card_data}><ProgressBar val={70} className={css.card_data}/></span>
                            </div>
                            <hr/>
                            <div className={css.skill_divisions}>
                            <span className={css.card_label}>React.js :</span>
                            <span className={css.card_data}><ProgressBar val={85} className={css.card_data}/></span>
                            </div>
                            <hr/>
                            <div className={css.skill_divisions}>
                            <span className={css.card_label}>Redux :</span>
                            <span className={css.card_data}><ProgressBar val={90} className={css.card_data}/></span>
                            </div>
                            <hr/>
                            <div className={css.skill_divisions}>
                            <span className={css.card_label}>Django :</span>
                            <span className={css.card_data}><ProgressBar val={85} /></span>
                            </div>
                            <hr/>
                            <div className={css.skill_divisions}>
                            <span className={css.card_label}>DRF :</span>
                            <span className={css.card_data}><ProgressBar val={70} className={css.card_data}/></span>
                            </div>
                            <hr/>
                            <div className={css.skill_divisions}>
                            <span className={css.card_label}>React.js :</span>
                            <span className={css.card_data}><ProgressBar val={85} className={css.card_data}/></span>
                            </div>
                            <hr/>
                            <div className={css.skill_divisions}>
                            <span className={css.card_label}>Redux :</span>
                            <span className={css.card_data}><ProgressBar val={90} className={css.card_data}/></span>
                            </div>
                            </div>
                            </ExpansionPanelDetails>
                            
                        </ExpansionPanel>
                        <br/>
                        <ExpansionPanel >
                        <ExpansionPanelSummary expandIcon = {<FaPlus style={{ fontSize: 16, color:'#222' }}/>}>
                                <span className={css.skill}>Machine Learning</span>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                            <div className={css.container}>
                            <div className={css.skill_divisions}>
                            <span className={css.card_label}>Django :</span>
                            <span className={css.card_data}><ProgressBar val={85} /></span>
                            </div>
                            <hr/>
                            <div className={css.skill_divisions}>
                            <span className={css.card_label}>DRF :</span>
                            <span className={css.card_data}><ProgressBar val={70} /></span>
                            </div>
                            <hr/>
                            <div className={css.skill_divisions}>
                            <span className={css.card_label}>React.js :</span>
                            <span className={css.card_data}><ProgressBar val={85} /></span>
                            </div>
                            <hr/>
                            <div className={css.skill_divisions}>
                            <span className={css.card_label}>Redux :</span>
                            <span className={css.card_data}><ProgressBar val={90} /></span>
                            </div>
                            <hr/>
                            <div className={css.skill_divisions}>
                            <span className={css.card_label}>Django :</span>
                            <span className={css.card_data}><ProgressBar val={85} /></span>
                            </div>
                            <hr/>
                            <div className={css.skill_divisions}>
                            <span className={css.card_label}>DRF :</span>
                            <span className={css.card_data}><ProgressBar val={70} className={css.card_data}/></span>
                            </div>
                            <hr/>
                            <div className={css.skill_divisions}>
                            <span className={css.card_label}>React.js :</span>
                            <span className={css.card_data}><ProgressBar val={85} className={css.card_data}/></span>
                            </div>
                            <hr/>
                            <div className={css.skill_divisions}>
                            <span className={css.card_label}>Redux :</span>
                            <span className={css.card_data}><ProgressBar val={90} className={css.card_data}/></span>
                            </div>
                            </div>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <br/>
                        <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon = {<FaPlus style={{ fontSize: 16, color:'#222' }}/>}>
                                <span className={css.skill}>IOT</span>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                            <div className={css.container}>
                            <div className={css.skill_divisions}>
                            <span className={css.card_label}>Django :</span>
                            <span className={css.card_data}><ProgressBar val={85} /></span>
                            </div>
                            <hr/>
                            <div className={css.skill_divisions}>
                            <span className={css.card_label}>DRF :</span>
                            <span className={css.card_data}><ProgressBar val={70} /></span>
                            </div>
                            <hr/>
                            <div className={css.skill_divisions}>
                            <span className={css.card_label}>React.js :</span>
                            <span className={css.card_data}><ProgressBar val={85} /></span>
                            </div>
                            <hr/>
                            <div className={css.skill_divisions}>
                            <span className={css.card_label}>Redux :</span>
                            <span className={css.card_data}><ProgressBar val={90} /></span>
                            </div>
                            <hr/>
                            <div className={css.skill_divisions}>
                            <span className={css.card_label}>Django :</span>
                            <span className={css.card_data}><ProgressBar val={85} /></span>
                            </div>
                            <hr/>
                            <div className={css.skill_divisions}>
                            <span className={css.card_label}>DRF :</span>
                            <span className={css.card_data}><ProgressBar val={70} className={css.card_data}/></span>
                            </div>
                            <hr/>
                            <div className={css.skill_divisions}>
                            <span className={css.card_label}>React.js :</span>
                            <span className={css.card_data}><ProgressBar val={85} className={css.card_data}/></span>
                            </div>
                            <hr/>
                            <div className={css.skill_divisions}>
                            <span className={css.card_label}>Redux :</span>
                            <span className={css.card_data}><ProgressBar val={90} className={css.card_data}/></span>
                            </div>
                            </div>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <br/>
                        <ExpansionPanel >
                        <ExpansionPanelSummary expandIcon = {<FaPlus style={{ fontSize: 16, color:'#222' }}/>}>
                                <span className={css.skill}>DevOps.</span>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                            <div className={css.container}>
                            <div className={css.skill_divisions}>
                            <span className={css.card_label}>Django :</span>
                            <span className={css.card_data}><ProgressBar val={85} /></span>
                            </div>
                            <hr/>
                            <div className={css.skill_divisions}>
                            <span className={css.card_label}>DRF :</span>
                            <span className={css.card_data}><ProgressBar val={70} /></span>
                            </div>
                            <hr/>
                            <div className={css.skill_divisions}>
                            <span className={css.card_label}>React.js :</span>
                            <span className={css.card_data}><ProgressBar val={85} /></span>
                            </div>
                            <hr/>
                            <div className={css.skill_divisions}>
                            <span className={css.card_label}>Redux :</span>
                            <span className={css.card_data}><ProgressBar val={90} /></span>
                            </div>
                            <hr/>
                            <div className={css.skill_divisions}>
                            <span className={css.card_label}>Django :</span>
                            <span className={css.card_data}><ProgressBar val={85} /></span>
                            </div>
                            <hr/>
                            <div className={css.skill_divisions}>
                            <span className={css.card_label}>DRF :</span>
                            <span className={css.card_data}><ProgressBar val={70} className={css.card_data}/></span>
                            </div>
                            <hr/>
                            <div className={css.skill_divisions}>
                            <span className={css.card_label}>React.js :</span>
                            <span className={css.card_data}><ProgressBar val={85} className={css.card_data}/></span>
                            </div>
                            <hr/>
                            <div className={css.skill_divisions}>
                            <span className={css.card_label}>Redux :</span>
                            <span className={css.card_data}><ProgressBar val={90} className={css.card_data}/></span>
                            </div>
                            </div>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <br/>
                    </div>
                {/* </div> */}
                <div className={css.download_contact}>
                    <div className={css.cv_button_container}>
                        <button className={css.cv_button}><FaDownload style={{fontSize:"21px"}}/>&nbsp;download my cv</button><br/>
                    </div>
                    <div className={css.contact_button_container}>
                    <button className={css.contact_button}>show my contact info.</button><br/>
                    </div>
                </div>
                <div className={css.prot_message}>
                    <div className={css.heading}>
                        <span className={css.head}>Leave A Message</span>
                        {/* <span className={css.dot}>?</span> */}
                    </div>
                    <div className={css.input_boxes}>
                        <input className={css.input_name} placeholder="Name"></input>
                        <input className={css.input_email} placeholder="Email"></input>
                        <textarea className={css.input_message} placeholder="Message"></textarea>
                    </div>
                    <FaTelegram className={css.send_button}/>
                </div>
                
            </div>
            <Footer/>
        </div>
    );
  }
}

export default Protfolio;