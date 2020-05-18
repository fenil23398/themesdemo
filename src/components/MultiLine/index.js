// import React, { Component } from 'react';
// import c3 from 'c3';

// const columns = [
//   ['My Numbers', 30, 200, 100, 400, 150, 250],
//   ['Your Numbers', 50, 20, 10, 40, 15, 25]
// ];

// class Chart extends Component {

//   componentDidMount() {
//     this._updateChart();
//   }
//   componentDidUpdate() {
//     this._updateChart();
//   }
//   _updateChart() {
//     const chart = c3.generate({
//       bindto: '#chart',
//       data: {
//         columns: this.props.columns,
//         type: this.props.chartType
//       }
//     });
//   }
//   render() {
//     return <div id="chart"></div>;
//   }
// }

// class MultiLine extends React.Component {

//   constructor(props) {
//     super(props);
//     this._setBarChart = this._setBarChart.bind(this);
//     this._setLineChart = this._setLineChart.bind(this);
//     this.state = {
//       chartType: 'line'
//     };
//   }
//   _setBarChart() {
//     this.setState({ chartType: 'bar' });
//   }
//   _setLineChart() {
//     this.setState({ chartType: 'line' });
//   }
//   render() {
//     return (
//       <div>
//         <Chart
//           columns={columns}
//           chartType={this.state.chartType} />
//         <p>
//           Chart Type
//           <button onClick={this._setBarChart}>Bar</button>
//           <button onClick={this._setLineChart}>Line</button>
//         </p>
//       </div>
//     );
//   }
// }


// export default MultiLine;

import React from 'react';
import Chart from 'react-c3-component';
import 'c3/c3.css';

export default function SimpleLineChart() {
  return (
    <Chart
      config={{

        data: {
          columns: [
            ['data1', 30, 200, 100, 400, 150, 250],
            ['data2', 50, 20, 10, 40, 15, 25],
            ['data3', 500, 320, 210, 340, 215, 125]
          ],
          type: 'spline'
        },
        zoom: {
          enabled: true
        },
        tooltip: {
          grouped: false // Default true
      }
      }}
    />
  )
}