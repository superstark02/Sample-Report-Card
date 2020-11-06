import React, { Component } from 'react'
import LineChart from '../Charts/LineChart';
import { FaAtom, FaCalculator, FaMagnet, FaVials } from 'react-icons/fa';

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

                <h3>
                    Maths
                </h3>

                <div>
                    Test Scores 
                </div>
                <LineChart series={
                    [{
                        name: 'Physics',
                        data: [90, 82, 75, 76, 99, 70, 95]
                    }]
                } />

                <div style={{margin:"10px 0px"}} >
                    Tests Taken
                </div>
            </div>
        )
    }
}

export default Progress
