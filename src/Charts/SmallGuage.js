import React, { Component } from 'react'
import Chart from 'react-apexcharts'

export class SmallGuage extends Component {
    constructor(props) {
        super(props);

        this.state = {
          
            series: [props.value],
            options: {
              chart: {
                height: 150,
                type: 'radialBar',
              },
              colors:[props.mycolor],
              plotOptions: {
                radialBar: {
                  hollow: {
                    size: '50%',
                  },
                  dataLabels:{
                    name: {
                      fontSize: "15px",
                      offsetY: 5
                    },
                    value: {
                      show: false
                    }
                  },
                },
              },
              stroke: {
                lineCap: 'round'
              },
              labels: [props.title],
            },
          };
    }

    render() {
        return (
            <div>
                <Chart options={this.state.options} series={this.state.series} type="radialBar" height={100}  />
            </div>
        )
    }
}

export default SmallGuage
