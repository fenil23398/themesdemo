import React, { Component } from 'react';
import Dygraph from 'dygraphs';
import 'dygraphs/dist/dygraph.min.css'
import data from './data.csv';

class DyGraph extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div id="graph"></div>;
    }


    componentDidMount() {
        // const csvData = 'data.csv'

        // const data = [
        //     `date,total_cases,new_cases
        //     13/03/2020,2,2
        //     20/03/2020,4,2
        //     24/03/2020,12,8
        //     25/03/2020,17,5
        //     26/03/2020,19,2
        //     27/03/2020,28,9
        //     28/03/2020,28,0
        //     29/03/2020,28,0
        //     30/03/2020,50,22`
        // ];
        console.log(data);
        const g = new Dygraph('graph',
            data, {
            axis: {
                x: {
                    valueFormatter: Dygraph.dateString_
                }
            },
            legend: 'always',
            title: 'Covid-19 Cases',
            showRoller: true,
            rollPeriod: 14,
            customBars: true,
            ylabel: 'Cases',
        });
    }

}

export default DyGraph;