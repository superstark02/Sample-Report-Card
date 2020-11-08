import React, { Component } from 'react'
import PieChart from '../Charts/PieChart';
import { FaBrain, FaClipboard, FaFileAlt, FaProjectDiagram, FaSpa, FaTachometerAlt } from 'react-icons/fa';
import CustomizedSlider from '../Charts/Slider';
import '../CSS/Pages/Overall.css'
import getDoc from '../Database/getDoc';
import getSubCollection from '../Database/getSubCollection';

export class Overall extends Component {

    state = {
        skills: null,
        defualt: {
            tests: 0,
            attendance: 0
        },
        subjects:null
    }

    componentDidMount() {
        getDoc("Students", this.props.id).then(snap => {
            this.setState({skills:snap})
        })

        getDoc("Students", "default").then(snap => {
            this.setState({defualt:snap})
        })

        getSubCollection("Students","default","Subjects").then(snap=>{
            var array = []
            for(var i = 0; i<snap.length; i++){
                array.push(snap[i].syllabus);
            }
            this.setState({subjects:array})
        })
    }

    render() {
        return (
            <div>
                <div style={{ margin: "40px 0px" }} >
                    {
                        this.state.subjects ? (
                            <PieChart series={this.state.subjects} />
                        ) : (
                            <div></div>
                        )
                    }
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
                                93/{this.state.defualt.tests}
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
                                12/{this.state.defualt.tests}
                            </div>
                        </div>
                    </div>
                </div>
                <h3>
                    Skills
                </h3>
                {
                    this.state.skills ? (
                        <div>
                            <div className="wrap" style={{ width: "fit-content" }} >
                                <FaTachometerAlt color="#1abc9c" size="20px" style={{ marginRight: "10px" }} /> Speed
                            </div>
                            <CustomizedSlider mycolor="#1abc9c" value={this.state.skills.speed} />
                            <div className="wrap" style={{ width: "fit-content" }} >
                                <FaSpa color="#f39c12" size="20px" style={{ marginRight: "10px" }} /> Focus
                            </div>
                            <CustomizedSlider mycolor="#f39c12" value={this.state.skills.focus} />
                            <div className="wrap" style={{ width: "fit-content" }} >
                                <FaBrain color="#af7ac4" size="20px" style={{ marginRight: "10px" }} /> Memory
                            </div>
                            <CustomizedSlider mycolor="#af7ac4" value={this.state.skills.memory} />
                            <div className="wrap" style={{ width: "fit-content" }} >
                                <FaProjectDiagram color="#3498db" size="20px" style={{ marginRight: "10px" }} /> Conceptual
                            </div>
                            <CustomizedSlider mycolor="#3498db" value={this.state.skills.conceptual} />
                        </div>
                    ) : (
                            <div>Please Wait</div>
                        )
                }


            </div>
        )
    }
}

export default Overall
