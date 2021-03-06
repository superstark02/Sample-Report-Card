import React, { Component } from 'react'
import { FaAtom, FaCalculator, FaMagnet, FaVials } from 'react-icons/fa';
import '../CSS/Pages/Learning.css'
import '../CSS/Pages/Overall.css'
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { Maths } from '../Learning/Maths';
import { Chemistry } from '../Learning/Chemistry';


export class Learning extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                <div style={{ display: "flex" }} >
                    <Link to={"/"+this.props.id+"/maths/"} >
                        <div style={{ width: "fit-content" }} className="maths"  >
                            <div className="wrap "  >
                                <FaCalculator color="white" size="30px" />
                            </div>
                            <div className="subject-label" >
                                Maths
                            </div>
                        </div>
                    </Link>

                    <Link to={"/"+this.props.id+"/chemistry/"} >
                    <div style={{ width: "fit-content" }} className="chem" >
                        <div className="wrap " >
                            <FaVials color="white" size="30px" />
                        </div>
                        <div className="subject-label" >
                            Chemistry
                        </div>
                    </div>
                    </Link>

                    <Link >
                    <div style={{ width: "fit-content"}} className="phy" >
                        <div className="wrap" >
                            <FaMagnet color="white" size="30px" />
                        </div>
                        <div className="subject-label" >
                            Physics
                        </div>
                    </div>
                    </Link>

                    <Link >
                    <div style={{ width: "fit-content"}} className="bio" >
                        <div className="wrap" >
                            <FaAtom color="white" size="30px" />
                        </div>
                        <div className="subject-label" >
                            Biology
                        </div>
                    </div>
                    </Link>

                </div>
                <hr></hr>

                
                    <Switch>
                        <Route path="/:name/maths" component={Maths} />
                        <Route path="/:name/chemistry" component={Chemistry} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default Learning
