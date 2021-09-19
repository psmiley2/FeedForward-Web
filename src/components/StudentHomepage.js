import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import Cookies from 'universal-cookie';
import LecForm from './LecForm';
import history from '../history';
import { Link } from 'react-router-dom';
const cookies = new Cookies();


const StudentHomepage = () => {
    const [lectures, setLectures] = useState([]);
    const [hws, setHws] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8001/feedback/getLectures/${cookies.get("studentClass")}`)
        .then(res => {
            console.log(res)
            setLectures(res.data)
        }).catch(err => {
            console.error(err)
        })

        axios.get(`http://localhost:8001/feedback/getHomeworks/${cookies.get("studentClass")}`)
        .then(res => {
            console.log(res)
            setHws(res.data)
        }).catch(err => {
            console.error(err)
        })
    }, [])

    return (
        <div>
            <h1>Student Surveys</h1>
            <div>
                <h2>Lecture Surveys</h2>
                {lectures.map((l, index) => (
                    <div>
                        <Link to="/lec-form">
                            <button onClick={() => {
                                cookies.set('lecture', l._id, { path: '/' })
                            }}>
                                <option key={index}>{l.title}</option>
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
            <div>
                <h2>Hw Surveys</h2>
                {hws.map((hw, index) => (
                    <div>
                        <Link to="/hw-form">
                        <button onClick={() => {
                            cookies.set('homework', hw._id, { path: '/' })
                        }}>
                            <option key={index}>{hw.title}</option>
                        </button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default StudentHomepage
