import React, { Component } from 'react'
import SmallGuage from '../Charts/SmallGuage';
import '../CSS/Pages/Learning.css'
import { FaBalanceScaleRight, FaTrophy } from 'react-icons/fa';
import LineChart from '../Charts/LineChart';
import { getSubDoc } from '../Database/getDoc';

const number = [1, 2, 3, 4, 5, 6, 7]

export class PMaths extends Component {

    state = {
        subject: null,
        default: null
    }

    componentDidMount() {
        getSubDoc("Students", this.props.match.params.name, "Subjects", "maths").then(snap => {
            this.setState({ subject: snap })
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.subject ? (
                        <div>
                            <h2>
                                {this.state.subject.name}
                            </h2>

                            <h3>
                                Test Scores
                            </h3>
                            <LineChart series={
                                [{
                                    name: 'Physics',
                                    data: this.state.subject.marks
                                }]
                            }

                                mycolor={"#fc427b"}

                            />

                            <div style={{ display: "flex", flexWrap: "wrap", margin: "40px 0px" }} >
                                <div style={{ display: "flex", margin: "10px 0px" }} >
                                    <div className="attendance" style={{ backgroundColor: "#fc427b" }}  >
                                        <FaBalanceScaleRight size="30px" />
                                    </div>
                                    <div style={{ margin: "0px 10px" }} >
                                        <div>
                                            <b>Average Score</b>
                                        </div>
                                        <div>
                                            {this.state.subject.averageScore}%
                                        </div>
                                    </div>
                                </div>

                                <div style={{ display: "flex", margin: "10px 0px" }} >
                                    <div className="attendance" style={{ backgroundColor: "#fc427b" }} >
                                        <FaTrophy size="30px" />
                                    </div>
                                    <div style={{ margin: "0px 10px" }} >
                                        <div>
                                            <b>Top Score</b>
                                        </div>
                                        <div>
                                            {this.state.subject.topScore}%
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h3 style={{ margin: "10px 0px" }} >
                                Tests Taken
                            </h3>

                            {
                                number.map(item => {
                                    return (
                                        <div className="wrap" >
                                            <div className="timeline-item" >
                                                <div className="wrap" style={{ width: "80px", height: "90px", backgroundColor: "rbga(0,0,0,0.3)" }} >
                                                    <SmallGuage mycolor={"rgb(0," + 150 + ",0)"} value={item * 10} title={item * 10} />
                                                </div>
                                                <div className="wrap" >
                                                    <div style={{ padding: "10px" }} >
                                                        <div>
                                                            <b>Topics</b>
                                                        </div>
                                                        <div className="sub-heading" >
                                                            dd/mm/yyyy
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    ) : (
                        <div>
                            Please Wait
                        </div>
                    )
                }
            </div>
        )
    }
}

export default PMaths
