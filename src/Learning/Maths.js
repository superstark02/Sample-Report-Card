import React, { Component } from 'react'
import Guage from '../Charts/Guage';
import  { getSubDoc } from '../Database/getDoc'
import { FaFileAlt, FaDumbbell, FaBook, FaChalkboardTeacher } from 'react-icons/fa';

const number = [1, 2, 3, 4, 5, 6, 7]

export class Maths extends Component {

    state = {
        testAttempted: 0,
        strength: 0,
        syllabus: 0,
        default: 0,
    }

    componentDidMount(){
        getSubDoc("Students",this.props.match.params.name,"Subjects","maths").then(item=>{
            this.setState({testAttempted:item.tests});
            this.setState({strength:item.strength});
        })

        getSubDoc("Students", "default", "Subjects", "maths").then(snap=>{
            this.setState({default:snap})
        })
    }

    render() {
        return (
            <div>
                <div className="wrap" >
                    <Guage value={82} mycolor={"#fc427b"} title="Syllabus" />
                    <div style={{ width: "100%" }} >
                        <div style={{ display: "flex", margin: "10px 0px" }} >
                            <div className="test-attempted" >
                                <FaFileAlt size="30px" color={"#fc427b"} />
                            </div>
                            <div style={{ margin: "0px 10px" }} >
                                <div>
                                    <b>Tests Attempted</b>
                                </div>
                                <div>
                                    {this.state.testAttempted}/{this.state.default.tests}
                                </div>
                            </div>
                        </div>
                        <div style={{ display: "flex", margin: "10px 0px" }} >
                            <div className="test-attempted" >
                                <FaDumbbell size="30px" color={"#fc427b"}  />
                            </div>
                            <div style={{ margin: "0px 10px" }} >
                                <div>
                                    <b>Your Strength</b>
                                </div>
                                <div>
                                    {this.state.strength}%
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="wrap" >
                    <div className="timeline-item" style={{ backgroundColor: "#fc427b", color: "white" }} >
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
                                    <div className="wrap" style={{ width: "90px", height: "90px", backgroundColor: "rbga(0,0,0,0.3)" }} >
                                        <FaChalkboardTeacher color="grey" size="40px" />
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
