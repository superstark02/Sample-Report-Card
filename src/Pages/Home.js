import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import SimpleTabs from '../Tabs/SimpleTabs';
import getDoc from '../Database/getDoc';

export class Home extends Component {

    state = {
        name:""
    }

    componentDidMount(){
        getDoc("Students",this.props.match.params.student).then(item=>{
            this.setState({name:item.name})
            console.log(item)
        })
    }

    render() {
        return (
            <div>
                <AppBar position="static" style={{ backgroundColor: "white", color: "rgba(0,0,0,0.8)" }} >
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                        </IconButton>
                        <Typography variant="h6">
                            {this.state.name}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <div className="wrap" >
                    <SimpleTabs id={this.props.match.params.student} />
                </div>
            </div>
        )
    }
}

export default Home
