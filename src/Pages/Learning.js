import React, { Component } from 'react'
import { FaAtom, FaCalculator, FaMagnet, FaVials } from 'react-icons/fa';
import '../CSS/Pages/Learning.css'
import '../CSS/Pages/Overall.css'
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import SubjectLearning from '../Components/SubjectLearning';


export class Learning extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                <div style={{ display: "flex" }} >
                    <Link to={"/"+this.props.id+"/subject/maths/"+"fc427b"} >
                        <div style={{ width: "fit-content", margin: "10px" }}  >
                            <div className="wrap subject" style={{ backgroundColor: "rgba(252, 66, 123,0.5)", borderColor: "rgba(252, 66, 123,1.0)" }} >
                                <FaCalculator color="white" size="20px" />
                            </div>
                            <div className="subject-label" >
                                Maths
                            </div>
                        </div>
                    </Link>

                    <Link to={"/"+this.props.id+"/subject/chemistry/"+"1b9cfc"} >
                    <div style={{ width: "fit-content", margin: "10px" }}  >
                        <div className="wrap subject" style={{ backgroundColor: "rgba(27, 156, 252,0.5)", borderColor: "rgba(27, 156, 252,1.0)" }} >
                            <FaVials color="white" size="20px" />
                        </div>
                        <div className="subject-label" >
                            Chemistry
                        </div>
                    </div>
                    </Link>

                    <div style={{ width: "fit-content", margin: "10px" }}  >
                        <div className="wrap subject" style={{ backgroundColor: "rgba(235, 47, 6,0.5)", borderColor: "rgba(235, 47, 6,1.0)" }} >
                            <FaMagnet color="white" size="20px" />
                        </div>
                        <div className="subject-label" >
                            Physics
                        </div>
                    </div>
                    <div style={{ width: "fit-content", margin: "10px" }}  >
                        <div className="wrap subject" style={{ backgroundColor: "rgba(85, 230, 193,0.5)", borderColor: "rgba(85, 230, 193,1.0)" }}  >
                            <FaAtom color="white" size="20px" />
                        </div>
                        <div className="subject-label" >
                            Biology
                        </div>
                    </div>
                </div>
                <hr></hr>

                
                    <Switch>
                        <Route path="/:name/subject/:id/:color" component={SubjectLearning} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default Learning
