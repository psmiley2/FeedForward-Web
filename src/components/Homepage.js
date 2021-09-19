import React from 'react'
import Classes from './Classes'
import Header from './Header'
import { useState } from 'react'
import AddLecSurvey from './AddLecSurvey'
import AddHWSurvey from './AddHWSurvey'
import Cookies from 'universal-cookie';
const cookies = new Cookies();


export default function Homepage() {
    const [example_classes, setClasses] = useState([
        {
            id: 1,
            text: cookies.get("classTitle"),
        },
    
      ])

    return (
        <div className=  'container'>
            <div>
                <Header />
                <Classes example_classes= {example_classes}/>
            </div>
          
        </div>
       
    )
}
