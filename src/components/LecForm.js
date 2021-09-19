import React from 'react'
import { useState } from 'react'
import Cookies from 'universal-cookie';
import axios from "axios"
import { Link } from 'react-router-dom';
const cookies = new Cookies();

const LecForm = () => {
    const [q1, set_q1] = useState(-1)
    const [q2, set_q2] = useState(-1)
    const [q3, set_q3] = useState(-1)
    const [q4, set_q4] = useState(-1)
    const [q5, set_q5] = useState(-1)
    const [q6, set_q6] = useState(-1)
    const [q7, set_q7] = useState(-1)
    const [q8, set_q8] = useState(-1)
    const [q9, set_q9] = useState(-1)
    const [q10, set_q10] = useState(-1)
    const [q11, set_q11] = useState(-1)
    const [q12, set_q12] = useState(-1)
    const [q13, set_q13] = useState(-1)
    const [q14, set_q14] = useState(-1)
    const [q15, set_q15] = useState(-1)
    const [q16, set_q16] = useState(-1)
    const [q17, set_q17] = useState('')
    const [name, setName] = useState('')
    
    
    
    const options_q1 = [
        { value: 9, label: 'Very Low' },
        { value: 6, label: 'Neutral' },
        { value: 3, label: 'High' },
        { value: 0, label: 'Very High' },
    ]
    
    const options_q3 = [
        { value: 'lab review', label: 'lab review' },
        { value: 'hw review', label: 'hw review' },
        { value: 'discussion', label: 'discussion' },
        { value: 'lecture notes/powerpoint', label: 'lecture notes/powerpoint' },
        { value: 'demonstration', label: 'demonstration' },
        { value: 'assigned extra reading', label: 'assigned extra reading' },
    ]

    const options_q4_6 = [
        { value: '9', label: 'Strongly Disagree'},
        { value: '7', label: 'Disagree'},
        { value: '4', label: 'Neutral'},
        { value: '2', label: 'Agree'},
        { value: '0', label: 'Strongly Agree'},
    ]

    const options_small_q = [
        {value: 0, label: 'Fine'},
        {value: 2, label: 'More'},
        {value: 2, label: 'Less'},

    ]
    const handleSubmit = async (e) => {
        e.preventDefault()

        let body = {
            q1, 
            q2, 
            q3, 
            q4, 
            q5, 
            q6, 
            q7, 
            q8, 
            q9, 
            q10,
            q11,
            q12,
            q13,
            q14,
            q15,
            q16,
            q17,
            name
        }

        await axios.post(`http://localhost:8001/feedback/lecture/${cookies.get("lecture")}`, body)
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
                <label>Your interest level about the topics of this lecture is:</label>
                <br />
                <select onChange= {(e) => set_q1(e.target.value)}>
                    {options_q1.map((option) => (
                    <option value={option.value}>{option.label}</option>
                    ))}
                </select>
                <br />
                
                <label>Your recollection of the topics covered within this lecture is
                0 to 10</label>
                <br />
                <div style={{display:'flex', flexDirection:'row'}}>
                    <input onChange= {(e) => set_q2(e.target.value)} type='range'  placeholder= 'Number of Questions' min= "0" max="10"/>
                     <p>{q2}</p>
                </div>
                <br />

                <label>Which aspects of this lecture contribute the most to your learning</label>
                <br />
                <select onChange= {(e) => set_q3(e.target.value)}>
                    {options_q3.map((option) => (
                    <option value={option.value}>{option.label}</option>
                    ))}
                </select>
                <br />
                
                <label>The instructor: N/A, Strongly Disagree, Disagree, Neutral, Agree, Strongly Agree</label>
                <br />
                <br />
                <label>Explained clearly the lecture objectives</label>
                <br />
                <select onChange= {(e) => set_q4(e.target.value)}>
                    {options_q4_6.map((option) => (
                    <option value={option.value}>{option.label}</option>
                    ))}
                </select>
                <br />

                
                <label>Stimulated your interest and was enthusiastic out the ideas presented</label>
                <br />
                <select onChange= {(e) => set_q5(e.target.value)}>
                    {options_q4_6.map((option) => (
                    <option value={option.value}>{option.label}</option>
                    ))}
                </select>
                <br />

                
                <label>Was available and available to answer questions</label>
                <br />
                <select onChange= {(e) => set_q6(e.target.value)}>
                    {options_q4_6.map((option) => (
                    <option value={option.value}>{option.label}</option>
                    ))}
                </select>
                <br />
                <br />

                <label>Which would you prefer</label>
                <br />
                <label>Synchronous Lectures</label>
                <br />
                <select onChange= {(e) => set_q7(e.target.value)}>
                    {options_small_q.map((option) => (
                    <option value={option.value}>{option.label}</option>
                    ))}
                </select>
                <br />

                <label>Asynchronous (Pre-Recorded Lectures</label>
                <br />
                <select onChange= {(e) => set_q8(e.target.value)}>
                    {options_small_q.map((option) => (
                    <option value={option.value}>{option.label}</option>
                    ))}
                </select>
                <br />

                <label>Large Discussions (Everyone)</label>
                <br />
                <select onChange= {(e) => set_q9(e.target.value)}>
                    {options_small_q.map((option) => (
                    <option value={option.value}>{option.label}</option>
                    ))}
                </select>
                <br />

                <label>Small Discussions/Zoom Breakout Rooms</label>
                <br />
                <select onChange= {(e) => set_q10(e.target.value)}>
                    {options_small_q.map((option) => (
                    <option value={option.value}>{option.label}</option>
                    ))}
                </select>
                <br />

                <label>Short Quizzes</label>
                <br />
                <select onChange= {(e) => set_q11(e.target.value)}>
                    {options_small_q.map((option) => (
                    <option value={option.value}>{option.label}</option>
                    ))}
                </select>
                <br />

                <label>Labratories</label>
                <br />
                <select onChange= {(e) => set_q12(e.target.value)}>
                    {options_small_q.map((option) => (
                    <option value={option.value}>{option.label}</option>
                    ))}
                </select>
                <br />

                
                <label>Timed Exam</label>
                <br />
                <select onChange= {(e) => set_q13(e.target.value)}>
                    {options_small_q.map((option) => (
                    <option value={option.value}>{option.label}</option>
                    ))}
                </select>
                <br />

                <label>Written Work</label>
                <br />
                <select onChange= {(e) => set_q14(e.target.value)}>
                    {options_small_q.map((option) => (
                    <option value={option.value}>{option.label}</option>
                    ))}
                </select>
                <br />

                <label>Scheduled Faculty Office Hours</label>
                <br />
                <select onChange= {(e) => set_q15(e.target.value)}>
                    {options_small_q.map((option) => (
                    <option value={option.value}>{option.label}</option>
                    ))}
                </select>
                <br />

                <label>Scheduled TA Office Hours</label>
                <br />
                <select onChange= {(e) => set_q16(e.target.value)}>
                    {options_small_q.map((option) => (
                    <option value={option.value}>{option.label}</option>
                    ))}
                </select>
                <br />
                <label>What could the instructor modify to help you learn more? (Open Ended)</label>
                <br />
                <textarea onChange= {(e) => set_q17(e.target.value)} type='text'  placeholder= 'Type Here'></textarea>
                <br />
                    <button className= 'btn btn'>Submit</button>
            </form>
            <Link to="/student-homepage">
                <button className= 'btn btn'>Back</button>
            </Link>
        </div>
    )
}

export default LecForm
