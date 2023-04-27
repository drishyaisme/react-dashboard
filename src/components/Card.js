import React, { useState } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Card.css'

const Card = (props) => {
    const [expanded, setExpanded] = useState(false);
  return (
    <div>
        {
            expanded?
                <ExpendedCard param={props} setExpanded={()=>setExpanded(false)} />:
            <CompactCard param = {props} setExpanded/>
        }
  </div>
  )
}

const CompactCard = ({param, setExpanded=()=>setExpanded(true)}) => {
  const Png = param.png;
  return(
    <div className="CompactCard"
    style={{
      background: param.color.backGround,
      boxShadow: param.color.boxShadow
    }}
  

    >
      <div className="radialBar">
        <CircularProgressbar
        value = {param.barValue}
        text={`${param.barValue}%`}
        />
        <span>{param.title}</span>
      </div>
      <div className="detail">
        <Png/>
        <span>${param.value}</span>
        <span>Last 24 hours</span>
      </div>
    </div>
  )
}

const ExpendedCard = ({param, setExpanded})=>{
  return(
    <div className="ExpendedCard"
    style={{
      background: param.color.backGround,
      boxShadow: param.color.boxShadow
    }}>
     
      <span>{param.title}</span>
      <div className="chartContainer">
        Chart
      </div>
      <span>Last 24 hours</span>

    </div>
  )
}

export default Card