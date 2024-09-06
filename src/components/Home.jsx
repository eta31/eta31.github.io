import React, {Component} from "react";
import Header1 from "./Header";
import avatar from './assets/eta.png';
import sign from './assets/sign.png';


export default class Home extends Component {
    render(){
        return(
            <React.Fragment>
            <div className="container">
                <Header1 />
            <div className="container">
                <div className="spacer60">
                </div>
                <div className="row">
                    <div className="col-6 col-md-4 align-middle mx-auto">
                        <div className="homepropic">
                          <img src={avatar} className="center-block rounded-circle" alt="..."/>
                        </div>
                    </div>
                    <div className="col-12 col-md-8 ">
                        <h2 className="name-tag-p">I'm <b><span className="nameTag eta-hover-a">Enkhtulga</span> <span className="nameTag eta-hover-a">Tseveenkhuu</span></b></h2>
                        <div className="spacer30"></div>
                        <h3> <span className="eta-hover-reversed">Software engineer</span>  | <span className="eta-hover-reversed">Cancer survivor </span> | <span className="eta-hover-reversed">Science enthusiast</span> </h3>
                        <h3> <span className="eta-hover-reversed">Lifehacker who ♥ coding & gaming </span> | <span className="eta-hover-reversed" role="img" aria-label="Coffee">♪♫  ☕ lover  </span></h3>
                        <div className="spacer30"></div>
                        <h3><span className="name-tag-h3">Objective</span></h3>
                        <p>
                        I'm seeking a dynamic and competitive environment where I can drive meaningful impact and grow alongside a forward-thinking team. I want to leverage my skills to help propel your organization to new heights while building a rewarding and fulfilling career for myself.
                        </p>
                        <div className="spacer30"></div>
                        <p>All the best,</p>
                        <div>
                        <img src={sign} alt="ENKHTULGA" width="250" height="50"/>
                        </div>


                    </div>
                </div>
            </div>
            </div>
            </React.Fragment>
            )
    }
}