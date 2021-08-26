import React,{useEffect,useState } from 'react'
import { Bar } from 'react-chartjs-2';
import axios from "axios";



const Scales =(props) => {
  const url =props.match.params.id;
  const [choices,setChoices] =useState([])
  const [question,setQuestion] =useState("")
  
  const data = {
    labels: [],
    datasets: [
      {
        label: '# of Votes',
        data: [],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  
  useEffect(async () => {
    let result = await axios.get(`https://targetsynergy-backend.herokuapp.com/SC/${url}`)
    setQuestion(result.data.question)
    setChoices(result.data.choices)
  },[])
  
  choices.map((post,key) => (data.labels[key]=(post.option)))
  choices.map((post,key) => (data.datasets[0].data[key]=(post.votes)))
  
  
  return (
    <div>
        <div className='header' >
          <h1 className='title'>{question}</h1>
          <div className='links'>
          </div>
        </div>
        <div style={{width : "50%" , margin:"auto"}}>
        <Bar data={data} options={options} />
        </div>
        
    </div>
  )
}
export default Scales