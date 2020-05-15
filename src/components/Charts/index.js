import React, { Component } from 'react';
import PlotLyGraphic from '../PlotLyGraph/index';
import DyGraph from '../DyGraph/index';

class Charts extends Component {

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="card shadow">
                            <div className="card-body">
                                {/* <div className="chart-area"> */}
                                    <PlotLyGraphic />
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                    <div className="card shadow">
                            <div className="card-body">
                                {/* <div className="chart-area"> */}
                                    <DyGraph />
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Charts;