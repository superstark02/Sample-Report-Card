import React, { Component } from 'react'
import Chart from 'react-apexcharts'

export class PieChart extends Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [14, 23, 21, 17],
            options: {
              chart: {
                type: 'polarArea',
              },
              stroke: {
                colors: ['#fff']
              },
              labels: ['Biology', 'Chemistry','Maths', 'Physics'],
              fill: {
                opacity: 0.8
              },
              responsive: [{
                breakpoint: 500,
                options: {
                  chart: {
                    width: 320
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }],
              grid:{
                  show:false
              }
            },
        };
    }

    render() {
        return (
            <div >
                <Chart options={this.state.options} series={this.props.series} type="polarArea"  />
            </div>
        )
    }
}

export default PieChart
