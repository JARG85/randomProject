import React from 'react';
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


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const colorRandom = () => {
    let a = String(Math.floor(Math.random() * (256 - 0)) + 0);
    let b = String(Math.floor(Math.random() * (256 - 0)) + 0);
    let c = String(Math.floor(Math.random() * (256 - 0)) + 0);
    return `rgb(${a},${b},${c})`
}

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: labels.map(()=>colorRandom()),
    }
  ],
};

export default function GraficoDeBarras(){
  return <Bar  options={options} data={data} /> 
}
