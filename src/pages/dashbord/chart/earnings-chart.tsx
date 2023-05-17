import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);


const EarningsChart = ({earningData}:any) => {

    const data:any = {
        labels: earningData?.labels || [],
        datasets: earningData?.datasets || [],
    };
    console.log("earningData", earningData);
    const options:any = { 
       
        scales:{
            y:{
            }
        },
        maintainAspectRatio: true,
    };


    return (
        <Line
            options={options} 
            data={data}
            >

        </Line>
    )
}

export default EarningsChart