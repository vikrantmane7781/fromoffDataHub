import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  import faker from 'faker';

/**chart data start */
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  export const options1 = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'No of running days',
      },
    },
  };
  export const options2 = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'No of Non-running days',
      },
    },
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  

export default function CartsDiv() {
  return (
    <div className='ChartAgMain p-3 b-3'>
        <div className='ChartAgMain__FirstSection'>
            
        </div>
        <div class="container p-3 b-3">
            <div class="row">
                <div class="col-sm p-3 b-3" width="100px">
                <Bar options={options1} data={data} />
                </div>
                <div className='col-sm p-3 b-3'>
                <Bar options={options2} data={data} />
                </div>
            </div>
           
        </div>
    </div>
  )
}