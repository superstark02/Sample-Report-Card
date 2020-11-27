import React, { Component } from 'react'
import "../CSS/Pages/Home.css"
import SimpleTabs from '../Tabs/SimpleTabs';
import getDoc from '../Database/getDoc';

export class Home extends Component {

    state = {
        name: ""
    }

    componentDidMount() {
        getDoc("Students", this.props.match.params.student).then(item => {
            this.setState({ name: item.name })
            console.log(item)
        })
    }

    render() {
        return (
            <div>
                <div className="app-bar" >
                    <div style={{color:"rgb(128,128,136)"}} >
                        25 April
                    </div>
                    <div style={{fontSize:"30px", margin:"5px 0px"}} >
                        {this.state.name}
                    </div>
                    <div style={{color:"rgb(128,128,136)"}} >
                        12 - C
                    </div>
                </div>
                <div className="wrap tabs-overlay" >
                    <SimpleTabs id={this.props.match.params.student} />
                </div>
            </div>
        )
    }
}

export default Home
