import React, { Component } from "react";
import css from "./style.css";
import NavBar from "../../components/navbar/index.js";
import Banner from "../../components/banner/index.js";
import {
  FaTelegram,
  FaDownload,
  FaAngleDown,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import leader from "./leader.jpg";
import team from "./team.jpg";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import Icon from "@material-ui/core/Icon";
import Divider from "@material-ui/core/Divider";
import ProgressBar from "../../components/progress_bar/index.js";
import Footer from "../../components/footer";
import Popup from "reactjs-popup";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getSkills, getResume, leaveMessage } from "../../core/actions/actions";
import Cookies from 'js-cookie';
class Protfolio extends Component {
  state = {
    sender_name: null,
    sender_email: null,
    sender_message: null,
  };

  componentWillReceiveProps() {
    this.props.Status.GET_RESUME != undefined
      ? this.props.Status.GET_RESUME
      : null;
  }

  componentDidMount() {
    this.props.getSkills();
  }

  myDivToFocus = React.createRef();
  handleOnClick = () => {
    //.current is verification that your element has rendered
    if (this.myDivToFocus.current) {
      this.myDivToFocus.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  };
  handleSubmitLeaveMessage = (e) => {
    var csrftokencookie = Cookies.get('csrftoken');
    alert()
    // e.preventDefault();
    this.props.leaveMessage(
      this.state.sender_name,
      this.state.sender_email,
      this.state.sender_message,
      csrftokencookie
    );
  };
  render() {
    console.log(
      this.props.Status.GET_RESUME != undefined
        ? this.props.Status.GET_RESUME
        : null
    );
    return (
      <div>
        <NavBar className={css.navbar} />
        <Banner handleOnClick={this.handleOnClick} />
        <div className={css.content} ref={this.myDivToFocus}>
          <div className={css.prot_moto}>
            <div className={css.heading}>
              <span className={css.head}>MOTO</span>
              <span className={css.dot}>.</span>
            </div>
            <div className={css.content}>
              <img src="static/assets/leader.jpg" className={css.leader_img} />
              <div className={css.moto_mask}></div>
              <span className={css.moto_text}>
                <p>
                  <li>Leading a big tech enthusisast team</li>
                  <li>Build innovative tech solution of problems.</li>
                </p>
              </span>
            </div>
          </div>
          <div className={css.prot_hire}>
            <div className={css.heading}>
              <span className={css.head}>Why You Hire Me?</span>
              {/* <span className={css.dot">?</span> */}
            </div>
            <div className={css.content}>
              <img src="static/assets/team.jpg" className={css.leader_img} />
              <div className={css.hire_mask}></div>
              <span className={css.content_text}>
                <p>
                  {" "}
                  <li>A team player worked in a team of big team in a MNC.</li>
                  <li>Handled team of 250+ students at college.</li>
                  <li>Aggressive attitude towards problems.</li>
                </p>
              </span>
            </div>
          </div>
          {/* <div className={css.prot_skills"> */}
          <div className={css.prot_skills_heading}>
            <span className={css.prot_skills_head}>SKILLS</span>
            <span className={css.prot_skills_dot}>.</span>
          </div>
          <div className={css.skill_content}>
            {this.props.Status.GET_SKILL != undefined
              ? this.props.Status.GET_SKILL.map((item) => (
                  <>
                    <ExpansionPanel>
                      <ExpansionPanelSummary
                        expandIcon={
                          <FaAngleDown
                            style={{ fontSize: 16, color: "#222" }}
                          />
                        }
                      >
                        <span className={css.skill}>{item.category_name}</span>
                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails>
                        <div className={css.container}>
                          {item.skills_name_set.map((sub_item) => (
                            <>
                              <div className={css.skill_divisions}>
                                <span className={css.card_label}>
                                  {sub_item.skills_name} :
                                </span>
                                <span className={css.card_data}>
                                  <ProgressBar
                                    val={sub_item.efficiency_percent}
                                  />
                                </span>
                              </div>
                              <hr />
                            </>
                          ))}
                        </div>
                      </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <br />
                  </>
                ))
              : null}
          </div>
          {/* </div> */}
          <div className={css.download_contact}>
            <div className={css.cv_button_container}>
              <button
                className={css.cv_button}
                onClick={() => {
                  this.props.getResume();
                }}
              >
                <a className={css.anchor} href="/api/myresume">
                  <FaDownload style={{ fontSize: "21px" }} />
                  &nbsp;download my cv
                </a>
              </button>
              <br />
            </div>
            <div className={css.contact_button_container}>
              <button
                className={css.contact_button}
                data-toggle="modal"
                data-target=".bd-example-modal-sm"
              >
                show my contact info.
              </button>
              <br />
            </div>
            <div
              className="modal fade bd-example-modal-sm"
              stabindex="-1"
              role="dialog"
              aria-labelledby="mySmallModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-sm">
                <div class="modal-content">
                  {/* <div className={css.modal_content}> */}
                  <span className={css.close} data-dismiss="modal">
                    x
                  </span>
                  <FaPhone className={css.phone_icon} />{" "}
                  <span className={css.phone_number}>
                    7000542882 | 8434986336
                  </span>
                  <br />
                  <FaEnvelope className={css.mail_icon} />{" "}
                  <span className={css.my_emails}>gk90731@gmail.com</span>{" "}
                  <br />
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className={css.prot_message}>
            <div className={css.heading}>
              <span className={css.head}>Leave A Message</span>
              {/* <span className={css.dot}>?</span> */}
            </div>
            <form onSubmit={()=>this.handleSubmitLeaveMessage()}>
              <div className={css.input_boxes}>
                <input
                  required
                  className={css.input_name}
                  placeholder="Name"
                  onChange={(e)=>this.setState({sender_name:e.target.value})}
                ></input>
                <input
                  required
                  className={css.input_email}
                  placeholder="Email"
                  onChange={(e)=>this.setState({sender_email:e.target.value})}
                ></input>
                <textarea
                  required
                  className={css.input_message}
                  placeholder="Message"
                  onChange={(e)=>this.setState({sender_message:e.target.value})}
                ></textarea>
              </div>
                <button type="submit">send</button>
              {/* <FaTelegram type="submit" className={css.send_button} /> */}
            </form>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

//function receive data as props on axios call
function mapStateToProps(state) {
  return {
    Status: state.Status,
  };
}

//function to send data for axios call
function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    { getSkills: getSkills, getResume: getResume, leaveMessage: leaveMessage },
    dispatch
  );
}

//connect function -- empowering the component by glueing the mapStateToProps and matchDispatchToProps
export default connect(mapStateToProps, matchDispatchToProps)(Protfolio);
