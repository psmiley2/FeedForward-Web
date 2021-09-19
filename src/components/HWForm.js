import React from 'react'
import { useState } from 'react'
import Cookies from 'universal-cookie';
import axios from "axios"
import { Link } from 'react-router-dom';
const cookies = new Cookies();

const HWForm = () => {
    const [name, setName] = useState('')
    const [q1, set_q1] = useState(-1)
    const [q2, set_q2] = useState('')
    const [q3, set_q3] = useState('')
    const [q4, set_q4] = useState('')
    
    const options_q3 = [
        { value: 'Stongly Agree', label: 'Strongly Agree' },
        { value: 'Agree', label: 'Agree' },
        { value: 'Neutral', label: 'Neutral' },
        { value: 'Disagree', label: 'Disagree' },
        { value: 'Stongly Disagree', label: 'Strongly Disagree' },
        
    ]

    const options_q4 = [
        { value: 'Time Management', label: 'Time Management' },
        { value: 'Unclear expectations on course/assignments', label: 'Unclear expectations on course/assignments' },
        { value: 'Difficulty focusing or paying attention', label: 'Difficulty focusing or paying attention' },
        { value: 'Instructor availability / responsiveness', label: 'Instructor availability / responsiveness' },
        { value: 'Insufficient background preparation', label: 'Insufficient background preparation' },
        { value: 'N/A', label: 'N/A' }
    ]

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("hello")

        let body = {
            name,
            q1, 
            q2, 
            q3, 
            q4, 
        }

        await axios.post(`http://localhost:8001/feedback/homework/${cookies.get("homework")}`, body)
            .then(res => {
                console.log(res)
            }).catch(err => {
                console.error(err)
            })  
    }

    return (
        <div>
            <form onSubmit= {handleSubmit}>
                <label>Please input your name (Answers will be anonymous)</label>
                <br />
                <input onChange= {(e) => setName(e.target.value)} type='text'  placeholder= 'Name' />
                <br />
                <label>Which questions did you find most challenging</label>
                <br />
                <input onChange= {(e) => set_q1(e.target.value)} type='text'  placeholder= 'Ex. 1, 3, 7' />
                <br />

                <label>How many hours did you spend on this assignment?</label>
                <br />
                <div style={{display:'flex', flexDirection:'row'}}>
                    <input onChange= {(e) => set_q2(e.target.value)} type='range'  placeholder= 'Number of Questions' min= "0" max="6"/>
                     <p>{q2}</p>
                </div>
                <br />
                <label>The overall workload of the course was appropriate.</label>
                <br />
                <select onChange= {(e) => set_q3(e.target.value)}>
                    {options_q3.map((option) => (
                    <option value={option.value}>{option.label}</option>
                    ))}
                </select>
                <br />
                <label>Which of the following continues to be an issue for you?</label>
                <br />
                <select onChange= {(e) => set_q4(e.target.value)}>
                    {options_q4.map((option) => (
                    <option value={option.value}>{option.label}</option>
                    ))}
                </select>
                <br />
                <button type="submit">Submit</button>
            </form>
            <Link to="/student-homepage">
                <button>Back</button>
            </Link>
        </div>
    )
}

export default HWForm
