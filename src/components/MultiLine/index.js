import React from 'react'
import Chart from 'react-c3-component'
import 'c3/c3.css'
import Pdf from 'react-to-pdf'

export default function SimpleLineChart () {
  const ref = React.createRef()
  return (
    <div>
      <Pdf targetRef={ref} filename='MultiLine.pdf'>
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
      <div ref={ref}>
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
      </div>
    </div>
  )
}
