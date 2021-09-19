import React from 'react'
import { useState, useEffect } from 'react'
import Select from 'react-select'
import Cookies from 'universal-cookie';
import axios from "axios"
import { Link } from 'react-router-dom';
const cookies = new Cookies();


const ViewLecSurveys = () => {
    
    const [lec_id, setLecId] = useState(-1)

    const [lectures, setLectures] = useState([])
    const [showLecture, setshowLecture] = useState(false)
    const [feedback, setFeedback] = useState("")
    

    useEffect(async () => {
        await axios.get(`http://localhost:8001/feedback/getLectures/${cookies.get("studentClass")}`)
        .then(res => {
            console.log(res)
            setLectures(res.data)
        }).catch(err => {
            console.error(err)
        })
    }, [])

    const handleChange = (e) =>{
        setshowLecture(true)
        setLecId(e.target.value)
    }
    
    const calculateFeedbackScore = (feedback) => {
        console.log(feedback)
        let score = 0
        let xs = []
        let feedbacks = []
        let names = []
        for (let i = 0; i < feedback.length; i++) {
            for (const [key, value] of Object.entries(feedback[i])) {
                if (key === "q3") {
                    xs.push(value)
                } else if (key === "q17") {
                    feedbacks.push(value)
                } else if (key === "name") {
                    names.push(value)
                }
                else {
                    score += parseInt(value)
                }
            }
        }
        
        return <>
            Score: {score}
            <br />
            Best lecture aspect:
            {xs.map((x, index) => (
                <>
                    <option key={index}>{x}</option>
                </>
            ))}
            <br />
            General Feedback:
            {feedbacks.map((f, index) => (
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
        </>
    }
    
    return (
        <div>
            <Link to= '/'>
                <button class= 'btn btn-secondary'>Back</button>
            </Link>
            <h1>Lectures</h1>
            {lectures.map((lecture, index) => (
                <>
                    <h3 key={index}>
                        {lecture.title}
                    </h3>
                    {calculateFeedbackScore(lecture.feedback)}
                    <br /><br /><hr />
                </>
            ))}
        </div>
    )
}

export default ViewLecSurveys
