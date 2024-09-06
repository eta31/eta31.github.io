import React, {Component} from "react";
import Header1 from "./Header";
import avatar from './assets/eta-pro.jpeg';
import resume from './assets/resume.pdf'

export default class Profile extends Component {

    render(){
        return(
            <React.Fragment>
            <div className="container">
                <Header1 />
            <div className="container">
                <div className="spacer60"></div>
                <div className="row">
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col-6 col-md-4 align-middle mx-auto">
                                <div className="homepropic">
                                    <img src={avatar} className="center-block rounded-circle" alt="..."/>
                                </div>
                            </div>
                        </div>
                        <div className="spacer30"></div>
                        <div className="page-header mx-auto text-center">
                            <h1 className="timelineh2 eta-hover-reversed">About</h1>
                        </div>
                        <div className="row justify-content-md-center">
                            <div className="col-10">
                                <p className="eta-about">
                                Software engineer with 5+ years of experience in designing and implementing fully automated CI/CD pipelines, reducing deployment time and increasing deployment frequency. Skilled in infrastructure as a code, monitoring alerting systems, building robust software applications to scale, reusable pipelines, end-to-end system-wide testing, and designing scheduled or background processes.
                                </p>
                            </div>
                        </div>
                        <div className="row justify-content-md-center">
                            <a className="btn btn-danger download-resume" target="_blank" href={resume} rel="noopener noreferrer" role="button"> <i className="fas fa-download"></i> Click here to download my complete resume</a>
                        </div>
                    </div>
                </div>
                <div className="spacer60"></div>
                <div className="row">
                    <div className="container">
                         <div className="row">
                            <div className="page-header mx-auto text-center">
                                <h1 className="timelineh1 eta-hover-reversed">Technical Skills</h1>
                            </div>
                         </div>
                        <div className="spacer30">
                        </div>
                        <div className="row">
                            <div className="col">
                               <div className="row align-items-center">
                                    <div className="col-4 mx-auto">
                                        Python
                                    </div>
                                    <div className="col-8 mx-auto">
                                        <div className="progress ">
                                          <div className="progress-bar progress-eta-aqua" role="progressbar" style={{width: '100%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">100%</div>
                                        </div>
                                    </div>
                                </div>
                               <div className="row align-items-center">
                                    <div className="col-4 mx-auto">
                                        Javascript
                                    </div>
                                    <div className="col-8 mx-auto">
                                        <div className="progress ">
                                          <div className="progress-bar progress-eta-aqua" role="progressbar" style={{width: '90%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">90%</div>
                                        </div>
                                    </div>
                                </div>
                               <div className="row align-items-center">
                                    <div className="col-4 mx-auto">
                                        React
                                    </div>
                                    <div className="col-8 mx-auto">
                                        <div className="progress ">
                                          <div className="progress-bar progress-eta-aqua" role="progressbar" style={{width: '70%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">70%</div>
                                        </div>
                                    </div>
                                </div>
                               <div className="row align-items-center">
                                    <div className="col-4 mx-auto">
                                        SQL
                                    </div>
                                    <div className="col-8 mx-auto">
                                        <div className="progress ">
                                          <div className="progress-bar progress-eta-aqua" role="progressbar" style={{width: '90%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">90%</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-4 mx-auto">
                                        HTML5/CSS3
                                    </div>
                                    <div className="col-8 mx-auto">
                                        <div className="progress ">
                                          <div className="progress-bar progress-eta-aqua" role="progressbar" style={{width: '100%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">100%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="row align-items-center">
                                    <div className="col-4 mx-auto">
                                        Azure Cloud
                                    </div>
                                    <div className="col-8 mx-auto">
                                        <div className="progress ">
                                          <div className="progress-bar progress-eta-fuchsia" role="progressbar" style={{width: '80%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">80%</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-4 mx-auto">
                                        Cisco Intersight
                                    </div>
                                    <div className="col-8 mx-auto">
                                        <div className="progress ">
                                          <div className="progress-bar progress-eta-fuchsia" role="progressbar" style={{width: '100%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">100%</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-4 mx-auto">
                                        Vmware
                                    </div>
                                    <div className="col-8 mx-auto">
                                        <div className="progress ">
                                          <div className="progress-bar progress-eta-fuchsia" role="progressbar" style={{width: '100%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">100%</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-4 mx-auto">
                                        Ansible
                                    </div>
                                    <div className="col-8 mx-auto">
                                        <div className="progress ">
                                          <div className="progress-bar progress-eta-fuchsia" role="progressbar" style={{width: '80%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">80%</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-4 mx-auto">
                                        Kubernetes
                                    </div>
                                    <div className="col-8 mx-auto">
                                        <div className="progress ">
                                          <div className="progress-bar progress-eta-fuchsia" role="progressbar" style={{width: '75%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">75%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="row align-items-center">
                                    <div className="col-4 mx-auto">
                                        Jenkins
                                    </div>
                                    <div className="col-8 mx-auto">
                                        <div className="progress ">
                                          <div className="progress-bar progress-eta-green" role="progressbar" style={{width: '100%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">100%</div>
                                        </div>
                                    </div>
                                </div>
                               <div className="row align-items-center">
                                    <div className="col-4 mx-auto">
                                        Azure DevOps
                                    </div>
                                    <div className="col-8 mx-auto">
                                        <div className="progress ">
                                          <div className="progress-bar progress-eta-green" role="progressbar" style={{width: '80%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">80%</div>
                                        </div>
                                    </div>
                                </div>
                               <div className="row align-items-center">
                                    <div className="col-4 mx-auto">
                                        Docker
                                    </div>
                                    <div className="col-8 mx-auto">
                                        <div className="progress ">
                                          <div className="progress-bar progress-eta-green" role="progressbar" style={{width: '90%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">90%</div>
                                        </div>
                                    </div>
                                </div>
                               <div className="row align-items-center">
                                    <div className="col-4 mx-auto">
                                        ELK
                                    </div>
                                    <div className="col-8 mx-auto">
                                        <div className="progress ">
                                          <div className="progress-bar progress-eta-green" role="progressbar" style={{width: '90%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">90%</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-4 mx-auto">
                                        Grafana
                                    </div>
                                    <div className="col-8 mx-auto">
                                        <div className="progress ">
                                          <div className="progress-bar progress-eta-green" role="progressbar" style={{width: '90%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">90%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
                <div className="spacer100"></div>
                <div className="row">
                    <div className="page-header mx-auto text-center">
                        <h1 className="timelineh1 eta-hover-reversed">Work experience</h1>
                    </div>
                    <ul className="timeline">
                        <li>
                          <div className="timeline-badge danger"><i className="fas fa-briefcase"></i></div>
                          <div className="timeline-panel">
                            <div className="timeline-heading">
                            <a className="profile-a" target = "_blank" href="https://en.golomtbank.com/" rel="noopener noreferrer">
                              <h4 className="timeline-title eta-hover-a">Cisco Systems Inc</h4>
                            </a>
                              <p className="timelinep"><i className="fas fa-address-card"></i>   Software DevOps Engineer</p>
                              <p className="timelinep"><small className="text-muted"><i className="far fa-calendar-alt"></i>   Jan 2022 - Mar 2023</small></p>
                              <p><small className="text-muted"><i className="fas fa-map-marker-alt"></i>   San Jose, California, United States</small></p>
                            </div>
                            <div className="timeline-body">
                              <p>Drove a 50% reduction in deployment times and a 15-30% decrease in post-deployment bugs by pioneering CI/CD processes with Jenkins and Docker, automating the provisioning of 100+ VMware ESXi hosts, and leading comprehensive test plan development for Cisco UCS and Intersight Managed Mode.</p>
                            </div>
                          </div>
                        </li>
                        <li className="timeline-inverted">
                          <div className="timeline-badge danger"><i className="fas fa-briefcase"></i></div>
                          <div className="timeline-panel">
                            <div className="timeline-heading">
                            <a className="profile-a" target = "_blank" href="https://en.golomtbank.com/" rel="noopener noreferrer">
                              <h4 className="timeline-title eta-hover-a">Cisco Systems Inc via contract</h4>
                            </a>
                              <p className="timelinep"><i className="fas fa-address-card"></i>   Software Automation Engineer</p>
                              <p className="timelinep"><small className="text-muted"><i className="far fa-calendar-alt"></i>   Feb 2015 - Oct 2017</small></p>
                              <p><small className="text-muted"><i className="fas fa-map-marker-alt"></i>   San Jose, California, United States</small></p>
                            </div>
                            <div className="timeline-body">
                              <p>Enhanced test coverage from 55% to 80% and cut execution time by 30% by integrating automated testing tools and Docker for containerized environments, while crafting 100+ automation scripts monthly, building custom Jenkins pipelines, and managing VMware vSphere 6.x/7.x Enterprise Plus infrastructure.</p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="timeline-badge danger"><i className="fas fa-briefcase"></i></div>
                          <div className="timeline-panel">
                            <div className="timeline-heading">
                            <a className="profile-a" target = "_blank" href="https://en.golomtbank.com/" rel="noopener noreferrer">
                              <h4 className="timeline-title eta-hover-a">Golomt Bank Of Mongolia</h4>
                            </a>
                              <p className="timelinep"><i className="fas fa-address-card"></i>   Software Engineer</p>
                              <p className="timelinep"><small className="text-muted"><i className="far fa-calendar-alt"></i>   Feb 2015 - Oct 2017</small></p>
                              <p><small className="text-muted"><i className="fas fa-map-marker-alt"></i>   Ulaanbaatar, Mongolia</small></p>
                            </div>
                            <div className="timeline-body">
                              <p>Played key role in development, process improvement, analyzing requirements, source code optimizing, testing, bug fixing and deployment.</p>
                            </div>
                          </div>
                        </li>
                        <li className="timeline-inverted">
                          <div className="timeline-badge danger"><i className="fas fa-hands-helping"></i></div>
                          <div className="timeline-panel">
                            <div className="timeline-heading">
                                <a className="profile-a" target = "_blank" href="https://www.adrf.or.kr/" rel="noopener noreferrer">
                                    <h4 className="timeline-title eta-hover-a">Africa Asia Development Relief Foundation</h4>
                                </a>
                              <p className="timelinep"><i className="fas fa-address-card"></i>   Volunteer worker</p>
                              <p className="timelinep"><small className="text-muted"><i className="far fa-calendar-alt"></i>   Feb 2012 - Jan 2015</small></p>
                              <p><small className="text-muted"><i className="fas fa-map-marker-alt"></i>   Ulaanbaatar, Mongolia</small></p>
                            </div>
                            <div className="timeline-body">
                              <p>Student volunteer who helped children study and develop. I have experience in a global volunteer programs and donation programs for improving childhood education in Cambodia, Laos, Thailand, Malaysia, China, Thailand, Korea, Singapore, and Mongolia.</p>
                            </div>
                          </div>
                        </li>
                    </ul>
                </div>
                <div className="row">
                    <div className="page-header mx-auto text-center">
                        <h1 className="timelineh1 eta-hover-reversed" >Education</h1>
                    </div>
                    <ul className="timeline">
                        <li>
                          <div className="timeline-badge primary"><i className="fas fa-graduation-cap"></i></div>
                          <div className="timeline-panel">
                            <div className="timeline-heading">
                                <a className="profile-a" target = "_blank" href="https://www.mum.edu/" rel="noopener noreferrer">
                                    <h4 className="timeline-title eta-hover-a">Maharishi International University</h4>
                                </a>
                              <p className="timelinep"><small className="text-muted"><i className="far fa-calendar-alt"></i>  Oct 2017 - Jun 2021</small></p>
                              <p className="timelinep"><small className="text-muted"><i className="fas fa-certificate"></i>  Master of Computer science</small></p>
                              <p><small className="text-muted"><i className="fas fa-map-marker-alt"></i>  Fairfield, IA</small></p>
                            </div>
                            <div className="timeline-body">
                              <p>Completed master's degree in Computer science with 3.63 GPA</p>
                            </div>
                          </div>
                        </li>
                        <li className="timeline-inverted">
                          <div className="timeline-badge primary"><i className="fas fa-graduation-cap"></i></div>
                          <div className="timeline-panel">
                            <div className="timeline-heading">
                                <a className="profile-a" target = "_blank" href="https://www.must.edu.mn/eng/" rel="noopener noreferrer">
                                  <h4 className="timeline-title eta-hover-a">Mongolian University Of Science and Technology</h4>
                                </a>
                              <p className="timelinep"><small className="text-muted"><i className="far fa-calendar-alt"></i>  Aug 2011 - Jan 2015</small></p>
                              <p className="timelinep"><small className="text-muted"><i className="fas fa-certificate"></i>  Bachelor of Computer science</small></p>
                              <p><small className="text-muted"><i className="fas fa-map-marker-alt"></i>  Ulaanbaatar, Mongolia</small></p>
                            </div>
                            <div className="timeline-body">
                              <p>Completed bachelor's degree within 3.5 years </p>
                            </div>
                          </div>
                        </li>

                    </ul>
                </div>
                <div className="row">
                    <div className="page-header mx-auto text-center">
                        <h1 className="timelineh1 eta-hover-reversed">Awards</h1>
                    </div>
                    <ul className="timeline">
                        <li>
                          <div className="timeline-badge success"><i className="fas fa-trophy"></i></div>
                          <div className="timeline-panel">
                            <div className="timeline-heading">
                                <a className="profile-a" target = "_blank" href="https://new.itpark.mn/a/3f0" rel="noopener noreferrer">
                                  <h4 className="timeline-title eta-hover-a">Championship, Hackathon of IBM Watson IoT</h4>
                                </a>
                              <p className="timelinep"><small className="text-muted"><i className="far fa-calendar-alt"></i>   Jul 2017</small></p>
                              <p><small className="text-muted"><i className="fas fa-map-marker-alt"></i>   Ulaanbaatar, Mongolia</small></p>
                            </div>
                            <div className="timeline-body">
                              <p>It was hackathon and IBM IoT week. First time ever in Mongolia. 300+ participants and Mentors. Our team participated with face recognition application built by Python,OpenCV using IBM WATSON Visual Recognition service. We got Championship. </p>
                            </div>
                          </div>
                        </li>
                        <li className="timeline-inverted">
                          <div className="timeline-badge success"><i className="fas fa-award"></i></div>
                          <div className="timeline-panel">
                            <div className="timeline-heading">
                              <h4 className="timeline-title eta-hover-a">“Best Employee” of IT Division in Golomt bank</h4>
                              <p className="timelinep"><small className="text-muted"><i className="far fa-calendar-alt"></i>   Mar 2017</small></p>
                              <p><small className="text-muted"><i className="fas fa-map-marker-alt"></i>   Ulaanbaatar, Mongolia</small></p>
                            </div>
                            <div className="timeline-body">
                              <p>Anaylzed and refined on deployment life cycle to reducing downtime and risk by 50% and optimized backend service and increased performance speed of transaction to 5 seconds from 30s seconds in average.</p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="timeline-badge success"><i className="fas fa-award"></i></div>
                          <div className="timeline-panel">
                            <div className="timeline-heading">

                                <a className="profile-a" target = "_blank" href="https://en.golomtbank.com/home/bank#view19" rel="noopener noreferrer">
                                    <h4 className="timeline-title eta-hover-a">Scholarship of Golomt bank</h4>
                                </a>
                              <p className="timelinep"><small className="text-muted"><i className="far fa-calendar-alt"></i>   Nov 2014</small></p>
                              <p><small className="text-muted"><i className="fas fa-map-marker-alt"></i>   Ulaanbaatar, Mongolia</small></p>
                            </div>
                            <div className="timeline-body">
                              <p> More than 1,200 students submitted applications for this year's scholarship which were reviewed in a three-stage process by the Foundation's selection panel.The bank implemented longstanding University Students’ Scholarship Programme for every year which provides monthly stipends to 100 students of outstanding academic achievement</p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="timeline-badge success"><i className="fas fa-award"></i></div>
                          <div className="timeline-panel">
                            <div className="timeline-heading">

                            <a className="profile-a" target = "_blank" href="https://zorigsan.mn/en/" rel="noopener noreferrer">
                              <h4 className="timeline-title eta-hover-a">Scholarship of LG group and Zorig Foundation</h4>
                              </a>
                              <p className="timelinep"><small className="text-muted"><i className="far fa-calendar-alt"></i>   Nov 2012</small></p>
                              <p><small className="text-muted"><i className="fas fa-map-marker-alt"></i>   Ulaanbaatar, Mongolia</small></p>
                            </div>
                            <div className="timeline-body">
                              <p>Throughout the long-standing cooperation with the Zorig Foundation and the LG group, 90 students were provided with scholarships. The ZF’s collaboration with LG group has provided grants to students which are given full scholarships.</p>
                            </div>
                          </div>
                        </li>
                        <li className="timeline-inverted">
                          <div className="timeline-badge success"><i className="fas fa-award"></i></div>
                          <div className="timeline-panel">
                            <div className="timeline-heading">

                            <a className="profile-a" target = "_blank" href="https://khanbank.com/en/" rel="noopener noreferrer">
                              <h4 className="timeline-title eta-hover-a">Scholarship of Khanbank</h4>
                              </a>
                              <p className="timelinep"><small className="text-muted"><i className="far fa-calendar-alt"></i>   Aug 2011</small></p>
                              <p><small className="text-muted"><i className="fas fa-map-marker-alt"></i>   Ulaanbaatar, Mongolia</small></p>
                            </div>
                            <div className="timeline-body">
                              <p>More than 1,200 students submitted applications for this year's scholarship, which were reviewed in a three-stage process by the Foundation's selection panel. The selection panel consisted of representatives from Khan Bank, government agencies, educational organizations, and citizens. The selection criterion is based on a student's academic and athletic performance over last three years, grade point average (GPA), financial resources, and active involvement in social activities.</p>
                            </div>
                          </div>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
            </React.Fragment>
            )
    }
}