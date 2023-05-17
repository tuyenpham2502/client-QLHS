import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, PointElement } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, PointElement);

const ExpensesChart = () => {

    const data: any = {
        labels:["Apr", "May", "Jun"],
        datasets: [{
            label: "Expenses",
            data: [12,10,4],
            borderColor: "#D60A0B",
            backgroundColor: "#D60A0B",
            pointBorderColor: "#D60A0B",
            fill: true,
        },
        ]
    };

    const options: any = {
        plugins: {
            legend: {
                display: false,
            },
            labels: {
                display: false,
                render: 'value',
            },
        },
        scales: {
            y: {
            }
        },
        responsive: true,
        maintainAspectRatio: true,
    };

    return (
        <Bar
            options={options}
            data={data}
                    
            >
        </Bar>
    )
}

export default ExpensesChart

