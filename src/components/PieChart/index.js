import React from 'react';
import {
    PieChart, Pie, Sector, Cell, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

function GeneratePieChart() {
    const data = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 50 },
        { name: 'Group D', value: 200 },
    ];
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    return (
        <ResponsiveContainer>
            <PieChart >
                <Pie
                    data={data}
                    //  cx={120}
                    //  cy={200}
                    innerRadius={60}
                    outerRadius={70}
                    fill="#8884d8"
                    paddingAngle={10}
                    dataKey="value"
                >
                    {
                        data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                    }
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
        </ResponsiveContainer>
    )
}



export default GeneratePieChart;