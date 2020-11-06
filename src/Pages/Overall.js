import React, { Component } from 'react'
import PieChart from '../Charts/PieChart';
import { FaBrain, FaClipboard, FaFileAlt, FaProjectDiagram, FaSpa, FaTachometerAlt } from 'react-icons/fa';
import CustomizedSlider from '../Charts/Slider';
import '../CSS/Pages/Overall.css'

export class Overall extends Component {
    render() {
        return (
            <div>
                <div style={{margin:"40px 0px"}} >
                    <PieChart />
                </div>
                <div style={{ display: "flex", flexWrap: "wrap" }} >
                    <div style={{ display: "flex", margin: "10px 0px" }} >
                        <div className="attendance" >
                            <FaClipboard size="30px" />
                        </div>
                        <div style={{ margin: "0px 10px" }} >
                            <div>
                                <b>Attendance</b>
                            </div>
                            <div>
                                93/100
                            </div>
                        </div>
                    </div>

                    <div style={{ display: "flex", margin: "10px 0px" }} >
                        <div className="attendance" >
                            <FaFileAlt size="30px" />
                        </div>
                        <div style={{ margin: "0px 10px" }} >
                            <div>
                                <b>Test Atempted</b>
                            </div>
                            <div>
                                12/13
                            </div>
                        </div>
                    </div>
                </div>
                <h3>
                    Skills
                </h3>
                <div className="wrap" style={{ width: "fit-content" }} >
                    <FaTachometerAlt color="#1abc9c" size="20px" style={{ marginRight: "10px" }} /> Speed
                </div>
                <CustomizedSlider mycolor="#1abc9c" value={70} />
                <div className="wrap" style={{ width: "fit-content" }} >
                    <FaSpa color="#f39c12" size="20px" style={{ marginRight: "10px" }} /> Focus
                </div>
                <CustomizedSlider mycolor="#f39c12" value={50} />
                <div className="wrap" style={{ width: "fit-content" }} >
                    <FaBrain color="#af7ac4" size="20px" style={{ marginRight: "10px" }} /> Memory
                </div>
                <CustomizedSlider mycolor="#af7ac4" value={60} />
                <div className="wrap" style={{ width: "fit-content" }} >
                    <FaProjectDiagram color="#3498db" size="20px" style={{ marginRight: "10px" }} /> Conceptual
                </div>
                <CustomizedSlider mycolor="#3498db" value={78} />

 
            </div>
        )
    }
}

export default Overall
