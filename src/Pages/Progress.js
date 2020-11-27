import React, { Component } from 'react'
import { FaAtom, FaCalculator, FaMagnet, FaVials } from 'react-icons/fa';
import '../CSS/Pages/Learning.css'
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import PMaths from '../Progress/Maths';
import PChemistry from '../Progress/Chemistry';

export class Progress extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>

                    <div style={{ display: "flex" }} >
                        <Link to={"/"+this.props.id+'/progress/maths/'} >
                            <div style={{ width: "fit-content" }} className="maths" >
                                <div className="wrap" >
                                    <FaCalculator color="white" size="30px" />
                                </div>
                                <div className="subject-label" >
                                    Maths
                                </div>
                            </div>
                        </Link>

                        <Link to={"/"+this.props.id+'/progress/chemistry/'} >
                            <div style={{ width: "fit-content" }} className="chem" >
                                <div className="wrap" >
                                    <FaVials color="white" size="30px" />
                                </div>
                                <div className="subject-label" >
                                    Chemistry
                                </div>
                            </div>
                        </Link>

                        <div style={{ width: "fit-content"}} className="phy" >
                            <div className="wrap" >
                                <FaMagnet color="white" size="30px" />
                            </div>
                            <div className="subject-label" >
                                Physics
                            </div>
                        </div>

                        <div style={{ width: "fit-content" }} className="bio" >
                            <div className="wrap "  >
                                <FaAtom color="white" size="30px" />
                            </div>
                            <div className="subject-label" >
                                Biology
                            </div>
                        </div>

                    </div>
                    <hr></hr>
                    <Switch>
                        <Route path="/:name/progress/maths" component={PMaths} />
                        <Route path="/:name/progress/chemistry" component={PChemistry} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default Progress
