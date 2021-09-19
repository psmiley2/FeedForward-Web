import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import HistoricalData from './HistoricalData'

const ViewLecData = () => {
    const avg_score = 31.58
    let range = ""
    const [range_, setRange] = useState(false)    

    if (avg_score >= 0 && avg_score <= 25 ){
        range ="low"
    }
    else if (avg_score > 25 && avg_score <= 36){
        range = "mid-low"
    }
    else if (avg_score > 36 && avg_score <= 43){
        range = "mid-high"
    }
    else if (avg_score > 43){
        range = "high"
    }

    return (
        <div>
            <Link to= '/'>
                <button class= 'btn btn-secondary'>Back</button>
            </Link>
            <h1>Trends in Teaching</h1>
            <HistoricalData/>
            {range == 'low' && range_ == true &&
                <p> Good work! Students seem to be already very engaged. 
                If you really want to push yourself, here is some of 
                the latest in education research. <br />
                https://scholar.google.com/scholar?hl=en&scisbd=1&as_sdt=0%2C22&q=%22higher+education%22+teaching+methods&btnG=&oq=%22higher+education%22+teaching+me</p> }
            {range == 'mid-low' && range_ == true &&
                <p> Doing well, you are honing in on your skills. Here are some tips to build and maintain student engagement: <br />
                - Connect to real world examples <br />
                - Highlight individual student interests. <br />
                - Fill dead time with collaboration <br />
                - Pose the class questions <br />
                Keep up the good work!</p>
                }

            {range == 'mid-high' && range_ == true &&
                <p> To see quick improvement, try attempting to adopt one of the following techniques mentioned here discussing how to effectively communicate complex ideas more simply. <br />
                    https://teacherhead.com/2013/02/13/great-lessons-6-explaining/ <br />
                    - Repeat things slowly and in different terms/contexts <br />
                    - Use models or tangible examples <br />
                    - Incorporate analogies and videos to help with understanding</p>} 
            {range == 'high'  && range_ == true &&
                <p> Needs much work. Your students seem to be struggling as you might not be describing the information in the most efficient way possible. Try these tips on restructuring the course: <br /> https://journals.sagepub.com/doi/pdf/10.3102/00346543064001001 <br />
                - Emphasize students learning from their peers and collaborating on classwork with instructor guidance <br />
                - Ensure equity in interactions. Call on students and ensure an open space for diverse opinions to be shared. <br />
                - Consider a flipped classroom. Homework done together in class, asynchronous lectures studied at home. 
                </p>}
            
            
            
            
            <button onClick= {() => setRange(true)}>Receive Help Based on Trends</button>
        </div>
    )
}

export default ViewLecData
