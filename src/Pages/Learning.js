import React, { Component } from 'react'
import { FaAtom, FaCalculator, FaMagnet, FaVials, FaFileAlt, FaDumbbell, FaPlay, FaBook } from 'react-icons/fa';
import Guage from '../Charts/Guage';
import '../CSS/Pages/Learning.css'
import '../CSS/Pages/Overall.css'

const number = [1, 2, 3, 4, 5, 6, 7]

export class Learning extends Component {
    render() {
        return (
            <div>
                <div style={{ display: "flex" }} >
                    <div style={{ width: "fit-content", margin: "10px" }}  >
                        <div className="wrap subject" style={{ backgroundColor: "rgba(252, 66, 123,0.5)", borderColor: "rgba(252, 66, 123,1.0)" }} >
                            <FaCalculator color="white" size="20px" />
                        </div>
                        <div className="subject-label" >
                            Maths
                        </div>
                    </div>
                    <div style={{ width: "fit-content", margin: "10px" }}  >
                        <div className="wrap subject" style={{ backgroundColor: "rgba(27, 156, 252,0.5)", borderColor: "rgba(27, 156, 252,1.0)" }} >
                            <FaVials color="white" size="20px" />
                        </div>
                        <div className="subject-label" >
                            Chemistry
                        </div>
                    </div>
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

                <div className="wrap" >
                    <Guage value={82} mycolor="#339af0" title="Syllabus" />
                    <div style={{ width: "100%" }} >
                        <div style={{ display: "flex", margin: "10px 0px" }} >
                            <div className="test-attempted" >
                                <FaFileAlt size="30px" />
                            </div>
                            <div style={{ margin: "0px 10px" }} >
                                <div>
                                    <b>Tests Atempted</b>
                                </div>
                                <div>
                                    12/13
                                </div>
                            </div>
                        </div>
                        <div style={{ display: "flex", margin: "10px 0px" }} >
                            <div className="test-attempted" >
                                <FaDumbbell size="30px" />
                            </div>
                            <div style={{ margin: "0px 10px" }} >
                                <div>
                                    <b>Your Strength</b>
                                </div>
                                <div>
                                    90%
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="wrap" >
                    <div className="timeline-item" style={{ backgroundColor: "#339af0", color: "white" }} >
                        <div className="wrap" style={{ width: "100px", height: "90px", backgroundColor: "rbga(0,0,0,0.3)" }} >
                            <FaBook size="40px" color="white" />
                        </div>
                        <div style={{ padding: "10px", fontSize: "20px" }} className="wrap" >
                            <div>
                                <b>Go To Notes</b>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ marginTop: "40px" }} >
                    <h2>Timeline</h2>
                </div>

                {
                    number.map(item => {
                        return (
                            <div className="wrap" >
                                <div className="timeline-item" >
                                    <div className="wrap" style={{ width: "100px", height: "90px", backgroundColor: "rbga(0,0,0,0.3)" }} >
                                        <FaPlay color="grey" />
                                    </div>
                                    <div style={{ padding: "10px", display:"flex", flexDirection:"column", justifyContent:"space-between" }} >
                                        <div>
                                            <div>
                                                <b>Topic Name</b>
                                            </div>
                                            <div className="sub-heading" >
                                                Date Studied
                                            </div>
                                        </div>
                                        <div style={{fontSize:"13px"}} >
                                            <div>
                                                Related Notes
                                            </div>
                                            <div style={{fontSize:"12px", color:"#20E647"}} >
                                                You were peresent
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Learning
