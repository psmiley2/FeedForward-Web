import React from 'react'
import Class from './Class'
import { Link } from 'react-router-dom'
import Cookies from 'universal-cookie';
import axios from "axios"
import { useEffect, useState } from 'react';
import {CanvasJSChart} from 'canvasjs-react-charts'
import exampleGraphData from '../utils/exampleGraphData';
const cookies = new Cookies();


const HistoricalData = () => {
    
    const [lectures, setLectures] = useState([]);
    const [hws, setHws] = useState([]);
    const [data, setData] = useState([])

    useEffect(async () => {
        await axios.get(`http://localhost:8001/feedback/getLectures/${cookies.get("studentClass")}`)
        .then(res => {
            console.log(res)
            setHws(res.data)
            options.data[0].dataPoints = []
            let d = [] 
            let scores = []
            let score = 0
            for (let i = 0; i < res.data.length; i++) {
                score = 0 
                for (let j = 0; j < res.data[i].feedback.length; j++) {
                    for (const [key, value] of Object.entries(res.data[i].feedback[j])) {
                        if (key === "q3") {
                            continue
                        } else if (key === "q17") {
                            continue
                        } else if (key === "name") {
                            continue
                        }
                        else {
                            score += parseInt(value)
                        }
                    }
                }
                
                d.push({x: i, y: score})
            }
            setData(exampleGraphData)
        }).catch(err => {
            console.error(err)
        })

    }, [])

    const options = {
        theme: "dark",
        // animationEnabled: true,
        zoomEnabled: true,
        title:{
            text: "Student Engagement Over Time"
        },
        axisX: {
            title:"Time",
            
        },
        axisY:{
            title: "Student Engagement",
            
        },
        data: [{
            type: "scatter",
            markerSize: 15,
            toolTipContent: "Student Engagement Rating: {y}",
            dataPoints: data
        }]
    }

    

    return (
        <div>
            <CanvasJSChart options = {options}
                    // onRef={ref => this.chart = ref}
            />
            {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
        </div>
    )
}
    
export default HistoricalData