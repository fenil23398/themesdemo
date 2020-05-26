import React from 'react'
import Plot from 'react-plotly.js'
import Pdf from "react-to-pdf";

// import { CSVLink, CSVDownload } from "react-csv";
// import { FaFileDownload } from 'react-icons/fa';

export default class PlotLyGraphic extends React.Component {

  state = {
    Data: {
      type: 'scatter',
      x: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      y: [4, 2, -1, 4, -5, -7, 0, 3, 8],
      mode: 'lines+markers',
      name: 'Data',
      showlegend: true,
      hoverinfo: 'all',
      line: {
        color: 'blue',
        width: 2
      },
      marker: {
        color: 'blue',
        size: 8,
        symbol: 'circle'
      }
    },
    Viol: {
      type: 'scatter',
      x: [6, 9],
      y: [-7, 8],
      mode: 'markers',
      name: 'Violation',
      showlegend: true,
      marker: {
        color: 'rgb(255,65,54)',
        line: { width: 3 },
        opacity: 0.5,
        size: 12,
        symbol: 'circle-open'
      }
    },
    CL: {
      type: 'scatter',
      x: [0.5, 10, null, 0.5, 10],
      y: [-5, -5, null, 5, 5],
      mode: 'lines',
      name: 'LCL/UCL',
      showlegend: true,
      line: {
        color: 'red',
        width: 2,
        dash: 'dash'
      }
    },
    Centre: {
      type: 'scatter',
      x: [0.5, 10],
      y: [0, 0],
      mode: 'lines',
      name: 'Centre',
      showlegend: true,
      line: {
        color: 'grey',
        width: 2
      }
    },
    histo: {
      type: 'histogram',
      x: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      y: [4, 2, -1, 4, -5, -7, 0, 3, 8],
      name: 'Distribution',
      orientation: 'h',
      marker: {
        color: 'blue',
        line: {
          color: 'white',
          width: 1
        }
      },
      xaxis: 'x2',
      yaxis: 'y2'
    },
    layout: {
      title: 'Basic SPC Chart',
      xaxis: {
        domain: [0, 0.7], // 0 to 70% of width
        zeroline: false
      },
      yaxis: {
        range: [-10, 10],
        zeroline: false
      },
      xaxis2: {
        domain: [0.8, 1] // 70 to 100% of width
      },
      yaxis2: {
        anchor: 'x2',
        showticklabels: false
      },
      autosize: 'false',
      // automargin: 'true',
      margin: { t: 40, r: 5, l: 25, b: 35 },
      legend: { orientation: 'h' },
      // margin: { "autoexpand" : "true"},
      mapbox: { zoom: '1' }
    }
  }

  render () {
   
    const ref = React.createRef();

    return (
      <div>
      <Pdf targetRef={ref} filename="SPC-chart.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
        <div ref={ref}>
        <Plot
          data={[
            this.state.Data,
            this.state.Viol,
            this.state.CL,
            this.state.Centre,
            this.state.histo
          ]}
          config={{ displayModeBar: false }}
          layout={this.state.layout}
          graphDiv='graph'
          useResizeHandler={true}
          style={{ width: '100%', height: '100%' }}
        />
        </div>
      </div>
    )
  }
}
