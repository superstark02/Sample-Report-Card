import React, { Component } from 'react'
import LineChart from '../Charts/LineChart';
import { FaAtom, FaBalanceScaleRight, FaCalculator, FaMagnet, FaTrophy, FaVials } from 'react-icons/fa';
import '../CSS/Pages/Learning.css'
import SmallGuage from '../Charts/SmallGuage';

const number = [1, 2, 3, 4, 5, 6, 7]

export class Progress extends Component {
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

                <h2>
                    Maths
                </h2>

                <h3>
                    Test Scores
                </h3>
                <LineChart series={
                    [{
                        name: 'Physics',
                        data: [90, 82, 75, 76, 99, 70, 95]
                    }]
                } />

                <div style={{ display: "flex", flexWrap: "wrap" }} >
                    <div style={{ display: "flex", margin: "10px 0px" }} >
                        <div className="attendance" >
                            <FaBalanceScaleRight size="30px" />
                        </div>
                        <div style={{ margin: "0px 10px" }} >
                            <div>
                                <b>Average Score</b>
                            </div>
                            <div>
                                93%
                            </div>
                        </div>
                    </div>

                    <div style={{ display: "flex", margin: "10px 0px" }} >
                        <div className="attendance" >
                            <FaTrophy size="30px" />
                        </div>
                        <div style={{ margin: "0px 10px" }} >
                            <div>
                                <b>Top Score</b>
                            </div>
                            <div>
                                97%
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
                                        <SmallGuage mycolor={"rgb(" + item * 10 + ",255," + item * 20 + ")"} value={item * 10} title={item * 10} />
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
        )
    }
}

export default Progress
