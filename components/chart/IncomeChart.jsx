import React, { useEffect, useState } from 'react'

import { Bar } from 'react-chartjs-2'

import {
    Chart as ChartJS,
    CategoryScale, 
    LinearScale, 
    BarElement, 
    Title, 
    Tooltip, 
    Legend
} from 'chart.js'

ChartJS.register(
    CategoryScale, 
    LinearScale, 
    BarElement, 
    Title, 
    Tooltip, 
    Legend
);

const IncomeChart = () => {

    
    
    const [chartData, setChartData] = useState({
        datasets: []
    })

    const [chartOptions, setChartOptions] = useState([])

    useEffect(() => {
        setChartData({
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    id: 2,
                    label: 'Income ₹', 
                    data: [5000, 6000, 10000, 7000, 8500, 9200, 10150, 6700, 8250, 6900],
                    borderColor: 'rgb(0, 100, 999, 0.8)',
                    backgroundColor: 'rgb(0, 100, 999, 0.4)',
                    borderWidth: 1
                },
            ]
        })

        setChartOptions({
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true, 
                    text: 'Daily Revenue'
                }
            },
            maintainAspectRatio: true,
            responsive: true,
        })
    }, [])

  return (
    <div className='p-4 min-h-[12rem] min-w-[22rem] sm:min-h-[18rem] sm:min-w-[30rem] border rounded-lg bg-white'>
        <Bar data={chartData} options={chartOptions} />
    </div>
  )
}

export default IncomeChart