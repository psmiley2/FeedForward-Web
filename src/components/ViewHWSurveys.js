import React from 'react'
import { useState, useEffect } from 'react'
import Cookies from 'universal-cookie';
import axios from "axios"
import { Link } from 'react-router-dom';
const cookies = new Cookies();

const ViewHWSurveys = () => {
    const [hw_id, setHWId] = useState(-1)
    
    const [hws, setHws] = useState([])
    const [showHws, setshowHws] = useState(false)

    useEffect(async () => {
        await axios.get(`http://localhost:8001/feedback/getHomeworks/${cookies.get("studentClass")}`)
        .then(res => {
            console.log(res)
            setHws(res.data)
        }).catch(err => {
            console.error(err)
        })
    }, [])

    const [showHW, setshowHW] = useState(false)
    
    const handleChange = (e) =>{
        setshowHW(true)
        setHWId(e.target.value)
    }

    const renderFeedback = (feedback) => {
        let hours = []
        let questions = []
        let names = []
        let workloads = []
        let issues =[]
        for (let i = 0; i < feedback.length; i++) {
            for (const [key, value] of Object.entries(feedback[i])) {
                if (key === "name") {
                    names.push(value)
                } else if (key === "q1") {
                    questions.push(value)
                } else if (key === "q2") {
                    hours.push(value)
                } else if (key === "q3") {
                    workloads.push(value)
                } else if (key === "q4") {
                    issues.push(value)
                }
            }
        }
        
        return <>
            Hours:
            {hours.map((x, index) => (
                <>
                    <option key={index}>{x}</option>
                </>
            ))}
            <br />
            Questions:
            {questions.map((f, index) => (
                <>
                    <option key={index}>{f}</option>
                </>
            ))}
            <br />
            Workloads:
            {workloads.map((f, index) => (
                <>
                    <option key={index}>{f}</option>
                </>
            ))}
            <br />
            Issues:
            {issues.map((f, index) => (
                <>
                    <option key={index}>{f}</option>
                </>
            ))}
            <br />
            Names: 
            {names.map((n, index) => (
                <>
                    <option key={index}>{n}</option>
                </>
            ))}
            hello
        </>
    }

    return (
        <div>
            <Link to= '/'>
                <button class= 'btn btn-secondary'>Back</button>
            </Link>
            <h1>View HW Surveys</h1>
            {hws.map((hw, index) => (
                <>
                    <h3 key={index} value={hw._id}>{hw.title}</h3> 
                    {renderFeedback(hw.feedback)} 
                    <br /><br /><hr />
                </>
            ))}
        </div>
    )
}

export default ViewHWSurveys
