import React, { Component } from 'react'
import Chart from 'react-apexcharts'

export class Guage extends Component {
    constructor(props) {
        super(props);

        this.state = {
          
            series: [70],
            options: {
              chart: {
                height: 350,
                type: 'radialBar',
              },
              plotOptions: {
                radialBar: {
                  hollow: {
                    size: '60%',
                  }
                },
              },
              stroke: {
                lineCap: 'round'
              },
              labels: ['Syllabus'],
            },
          
          
          };
    }

    render() {
        return (
            <div>
                <Chart options={this.state.options} series={this.state.series} type="radialBar" height={200}  />
            </div>
        )
    }
}

export default Guage
