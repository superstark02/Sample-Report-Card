import React, { Component } from 'react'
import Guage from '../Charts/Guage';
import { FaFileAlt, FaDumbbell, FaPlay, FaBook } from 'react-icons/fa';

const number = [1, 2, 3, 4, 5, 6, 7]

export class SubjectLearning extends Component {
    render() {
        return (
            <div>
                <div className="wrap" >
                    <Guage value={82} mycolor={"#"+this.props.match.params.color} title="Syllabus" />
                    <div style={{ width: "100%" }} >
                        <div style={{ display: "flex", margin: "10px 0px" }} >
                            <div className="test-attempted" >
                                <FaFileAlt size="30px" color={"#"+this.props.match.params.color} />
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
                                <FaDumbbell size="30px" color={"#"+this.props.match.params.color}  />
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
                    <div className="timeline-item" style={{ backgroundColor: "#"+this.props.match.params.color, color: "white" }} >
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
                                    <div style={{ padding: "10px", display: "flex", flexDirection: "column", justifyContent: "space-between" }} >
                                        <div>
                                            <div>
                                                <b>Topic Name</b>
                                            </div>
                                            <div className="sub-heading" >
                                                Date Studied
                                            </div>
                                        </div>
                                        <div style={{ fontSize: "13px" }} >
                                            <div>
                                                Related Notes
                                            </div>
                                            <div style={{ fontSize: "12px", color: "#20E647" }} >
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

export default SubjectLearning
