import React from 'react'
import Header from './Header'
import Button from './Button'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import AddLecSurvey from './AddLecSurvey'
import AddHWSurvey from './AddHWSurvey'
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const Class = ({example_class}) => { 

    const [showSurvey, setshowSurvey] = useState("")
    
    return (
        <div className='class'>
            <h3>{example_class.text}, Code: {cookies.get("studentClass")} </h3>
            <button style={{"width": "100%"}} className = 'btn btn-block' onClick={() => setshowSurvey("lec")}>Create Lecture Survey</button>
            <button style={{"width": "100%"}} className = 'btn btn-block' onClick={() => setshowSurvey("hw")}>Create Homework Survey</button>
            <Link to= '/view-lec'>
                <button style={{"width": "100%"}} className = 'btn btn-default'>View Previous Lecture Surveys</button>
            </Link>
            <Link to= '/view-hw'>
                <button style={{"width": "100%"}} className = 'btn btn-default'>View Previous HW Surveys</button>
            </Link>
        
            <Link to= '/view-lec-data'>
                <button style={{"width": "100%"}} className = 'btn btn-default'>Lecture Data</button>
            </Link>
               
            <br />

            <div>
                {showSurvey == "hw" && <AddHWSurvey />}
                {showSurvey == "lec" && <AddLecSurvey />}
            </div>
        </div>
    )
}

export default Class