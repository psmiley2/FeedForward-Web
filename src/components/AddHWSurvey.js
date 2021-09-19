import {useState} from "react"
import Cookies from 'universal-cookie';
import axios from "axios"
const cookies = new Cookies();

const AddHWSurvey = () => {
    //add handle submit for db
    const [title, setTitle] = useState("")
    const [questions, setQuestions] = useState(0)

    const handleSubmit = async (e) => {
        e.preventDefault()

        let body = {
            title: title,
            questions, questions
        }

        await axios.post(`http://localhost:8001/create/homework/${cookies.get("user")}`, body)
            .then(res => {
                console.log(res)
            }).catch(err => {
                console.error(err)
            })  

        setTitle("")
        setQuestions(0)
    }

    return (
        <form onSubmit= {handleSubmit} className='add-hw-survey'>
            <div className= 'form-control'>
                <label>Add HW Survey</label>
                <input type='text'  placeholder= 'HW Title' required value={title} onChange= {(e) => setTitle(e.target.value)} />
                <input type='number'  placeholder= 'Number of Questions' value={questions} onChange={(e) => setQuestions(e.target.value)} />
                <button onSubmit={handleSubmit}>Submit</button>
            </div>
        </form>
    )
}

export default AddHWSurvey