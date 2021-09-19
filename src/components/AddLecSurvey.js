import { useState } from 'react'
import Cookies from 'universal-cookie';
import axios from "axios"
const cookies = new Cookies();

const AddLecSurvey = () => {
    const [title, setTitle] = useState("")

    const handleChange = (e) =>{
        const {name,value} = e.target
        setTitle(value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        let body = {
            title: title
        }

        await axios.post(`http://localhost:8001/create/lecture/${cookies.get("user")}`, body)
            .then(res => {
                console.log(res)
            }).catch(err => {
                console.error(err)
            })
        
        setTitle("")
    }

    return (
        <form onSubmit= {handleSubmit} className='add-lec-survey'>
            <div className= 'form-control'>
                <label>Add Lecture Survey</label>
                <input type='text'  placeholder= 'Lecture Title' required value={title} onChange= {handleChange} />
                <button onSubmit={handleSubmit}>Submit</button>
            </div>
        </form>
    )
}

export default AddLecSurvey

