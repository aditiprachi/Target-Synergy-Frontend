import React,{useEffect,useState } from 'react'
import { Bar } from 'react-chartjs-2';
import axios from "axios";


const MCQ = (props) => {
  const url =props.match.params.id;
  const [choices,setChoices] =useState([])
  const [question,setQuestion] =useState("")
  const [Background, setBackground]=useState({
    bgcolor: 'white',
    textcolor: 'black',
    opacity: 100,
  })
  
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
      xAxes: [{
        gridLines: {
          display:false
      }
    }],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
          gridLines: {
            display:false        },   
        },
      ],
    },
  };
  
  useEffect(async () => {
    let result = await axios.get(`https://targetsynergy-backend.herokuapp.com/MCQ/${url}`)
    setQuestion(result.data.question)
    setChoices(result.data.choices)
    console.log(result.data.bg)

    const update={...Background, 
      bgcolor: result.data.bg.bgColor,
       textcolor: result.data.bg.textColor,
       opacity:  (result.data.bg.opacity/10)*0.1
    }
    setBackground(update)
  },[])
  
  choices.map((post,key) => (data.labels[key]=(post.option)))
  choices.map((post,key) => (data.datasets[0].data[key]=(post.votes)))
  
  console.log(Background.opacity)

  return (
    <div>
       
       <div style={{
          backgroundColor: Background.bgcolor,
          opacity: Background.opacity,
          color: Background.textcolor,
          width: '100%',
          height:'100%'}}>
          <h1 className='title'>{question}</h1>
        <div>
        <Bar data={data} options={options} />
        </div>
        </div>
      
        </div>
  )
}

export default MCQ
