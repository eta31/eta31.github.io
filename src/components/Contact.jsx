import React, {Component} from "react";
import Header1 from "./Header";
import avatar1 from './assets/eta1.png';
import avatar2 from './assets/eta2.png';
import avatar3 from './assets/eta3.png';
import avatar4 from './assets/eta4.png';
import avatar5 from './assets/eta5.png';


export default class Contact extends Component {
    render(){
        return(
            <React.Fragment>
            <div className="container">
                <Header1 />
            <div className="container">
                <div className="spacer60"></div>
                <div className="row">
                    <div className="page-header mx-auto text-center">
                        <h1 className="timelineh1">Contact me <span className="eta-hover-a">anytime</span></h1>
                        <div className="spacer60"></div>
                        <div className="container">
                            <div className="row justify-content-md-center">
                            <div className="col mx-auto align-middle">
                                <img src={avatar1} className="center-block rounded-circle " alt="ENKHTULGA" width="100" height="100"/>
                                <div className="contactme-div-p eta-hover-reversed"><p>Monday</p></div>
                            </div>
                            <div className="col mx-auto align-middle">
                                <img src={avatar2} className="center-block rounded-circle " alt="ENKHTULGA" width="100" height="100"/>
                                <div className="contactme-div-p eta-hover-reversed"><p>Tuesday</p></div>
                            </div>
                            <div className="col mx-auto align-middle">
                                <img src={avatar3} className="center-block rounded-circle " alt="ENKHTULGA" width="100" height="100"/>
                                <div className="contactme-div-p eta-hover-reversed"><p>Wednesday</p></div>
                            </div>
                            <div className="col mx-auto align-middle">
                                <img src={avatar4} className="center-block rounded-circle " alt="ENKHTULGA" width="100" height="100"/>
                                <div className="contactme-div-p eta-hover-reversed"><p>Thursday</p></div>
                            </div>
                            <div className="col mx-auto align-middle">
                                <img src={avatar5} className="center-block rounded-circle " alt="ENKHTULGA" width="100" height="100"/>
                                <div className="contactme-div-p eta-hover-reversed"><p>Friday <span className="eta-hover-red">TGIF!</span></p></div>
                            </div>
                            </div>
                        </div>
                        <div className="spacer60"></div>
                        <div className="container">
                            <blockquote className="blockquote text-center">
                              <p className="mb-0">Email me with any questions or inquiries. I would be happy to answer your questions and set up meeting with you.</p>
                              <footer className="blockquote-footer">Getting in touch is easy!</footer>
                            </blockquote>
                        </div>
                        <div className="spacer60"></div>
                    </div>

                    <div className="container">
                        <div className="row justify-content-md-center contactme-contact">
                                <div className="col align-middle">
                                    <a className="nav-link socialColor" target = "_blank" href="https://goo.gl/maps/HMw45JhitoF2" rel="noopener noreferrer">
                                    <div className="align-items-center justify-content-md-center">
                                        <div className="contactme-badge danger"><i className="fas fa-map-marker-alt"></i></div>
                                        <div className="contactme-div-p"><p>Mountain View, CA</p></div>
                                    </div>
                                    </a>
                                    <a className="nav-link socialColor" target = "_blank" href="tel:+15106933984" rel="noopener noreferrer">
                                    <div className="align-items-center">
                                        <div className="contactme-badge danger"><i className="fas fa-phone-square"></i></div>
                                        <div className="contactme-div-p"><p>+1 (510) 693 3984</p></div>
                                    </div>
                                    </a>
                                </div>
                                <div className="col align-middle">
                                    <a className="nav-link socialColor" target = "_blank" href="mailto:ts.enkhtulga@gmail.com" rel="noopener noreferrer">
                                    <div className="align-items-center">
                                        <div className=" contactme-badge primary"><i className="fas fa-envelope-square"></i></div>
                                        <div className="contactme-div-p"><p>ts.enkhtulga@gmail.com</p></div>
                                    </div>
                                    </a>
                                    <a className="nav-link socialColor" target = "_blank" href="https://github.com/eta31/" rel="noopener noreferrer">
                                    <div className="align-items-center">
                                        <div className="contactme-badge primary"><i className="fab fa-github fa-lg"></i></div>
                                        <div className="contactme-div-p"><p>Eta</p></div>
                                    </div>
                                    </a>
                                </div>
                                <div className="col align-middle">
                                    <a className="nav-link socialColor" target = "_blank" href="https://www.linkedin.com/in/enkhtulga-eta/" rel="noopener noreferrer">
                                    <div className="align-items-center">
                                        <div className="contactme-badge warning"><i className="fab fa-linkedin-in"></i></div>
                                        <div className="contactme-div-p"><p>Enkhtulga</p></div>
                                    </div>
                                    </a>
                                    <a className="nav-link socialColor" target = "_blank" href="https://twitter.com/Enkhtulga_eta/" rel="noopener noreferrer">
                                    <div className="align-items-center">
                                        <div className="contactme-badge warning"><i className="fab fa-twitter"></i></div>
                                        <div className="contactme-div-p"><p>Eta Ts</p></div>
                                    </div>
                                    </a>
                                </div>
                        </div>
                    </div>
                </div>

            </div>
            </div>
            </React.Fragment>
            );
    }
}