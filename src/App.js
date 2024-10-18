import React, { useRef, useState } from 'react'
import axios from 'axios';


const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:8000/EC/info');
          console.log(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

fetchData();

function CRUD() {
    
    const list = [
        {
            id: 1, 
            name: "Anna",
            roll_number: "IV EC-1",
            email: "anna@gmail.com",
            phnumber: "09123456",
            first_sem_marks: "35",
            second_sem_marks: "30",
            practical_marks: "20",
            tutorial_marks: "10",
            total_marks: "95",
        },
        {
            id: 2, 
            name: "John",
            roll_number: "IV EC-2",
            email: "john@gmail.com",
            phnumber: "09789123",
            first_sem_marks: "30",
            second_sem_marks: "32",
            practical_marks: "20",
            tutorial_marks: "10",
            total_marks: "92",
        },
        {
            id: 3, 
            name: "James",
            roll_number: "IV EC-3",
            email: "james@gmail.com",
            phnumber: "09567342",
            first_sem_marks: "32",
            second_sem_marks: "28",
            practical_marks: "20",
            tutorial_marks: "10",
            total_marks: "90",
        },
        {
            id: 4, 
            name: "Micky",
            roll_number: "IV EC-4",
            email: "micky@gmail.com",
            phnumber: "09231467",
            first_sem_marks: "28",
            second_sem_marks: "28",
            practical_marks: "20",
            tutorial_marks: "10",
            total_marks: "86",
        },
        {
            id: 5, 
            name: "William",
            roll_number: "IV EC-5",
            email: "william@gmail.com",
            phnumber: "09125643",
            first_sem_marks: "28",
            second_sem_marks: "27",
            practical_marks: "20",
            tutorial_marks: "10",
            total_marks: "85",
        },
        
    ]
    const [lists, setList] = useState(list)
    const [updateState, setUpdateState] = useState(-1)
   
          
    return(
        <div className='crud'>
            <div>
            <AddList setList = {setList }/>
            <form onSubmit={handleSubmit}>
            <table>
                {
                    lists.map((current) => (
                        updateState === current.id ? <EditList current={current} lists={lists} setList={setList}/> :
                        <tr>
                            <td>{current.name}</td>
                            <td>{current.roll_number}</td>
                            <td>{current.email}</td>
                            <td>{current.phnumber}</td>
                            <td>{current.first_sem_marks}</td>
                            <td>{current.second_sem_marks}</td>
                            <td>{current.practical_marks}</td>
                            <td>{current.tutorial_marks}</td>
                            <td>{current.total_marks}</td>
                            <td>
                                <button className='edit' onClick={() => handleEdit(current.id)}>Edit</button>
                                <button className='delete' type='button' onClick={() => handleDelete(current.id)}>Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </table>
            </form>
            </div>
        </div>
    )

    function handleEdit(id) {
        setUpdateState(id)
    }
    function handleDelete(id) {
        const newlist = lists.filter((li) => li.id !== id)
        setList(newlist)
    }
    function handleSubmit(event) {
        event.preventDefault()
        const name = event.target.elements.name.value
        const roll_number = event.target.elements.roll_number.value
        const email = event.target.elements.email.value
        const phnumber = event.target.elements.phnumber.value
        const first_sem_marks = event.target.elements.first_sem_marks.value
        const second_sem_marks = event.target.elements.second_sem_marks.value
        const practical_marks = event.target.elements.practical_marks.value
        const tutorial_marks = event.target.elements.tutorial_marks.value
        const total_marks = event.target.elements.total_marks.value
        const newlist = lists.map((li) => (
            li.id === updateState ? {...li, name:name, roll_number: roll_number, email: email, phnumber: phnumber, first_sem_marks: first_sem_marks,
                 second_sem_marks: second_sem_marks, practical_marks: practical_marks, tutorial_marks: tutorial_marks, total_marks: total_marks} : li
        ))

        setList(newlist)
        setUpdateState(-1)
    }
}

function EditList({current, lists, setList}) {
    function handInputname(event) {
        const value = event.target.value;
        const newlist = lists.map((li) => (
            li.id === current.id ? {...li, name :value} : li
        ))

        setList(newlist)
    }
    function handInputroll_number(event) {
        const value = event.target.value;
        const newlist = lists.map((li) => (
            li.id === current.id ? {...li, roll_number :value} : li
        ))

        setList(newlist)
    }
    function handInputemail(event) {
        const value = event.target.value;
        const newlist = lists.map((li) => (
            li.id === current.id ? {...li, email :value} : li
        ))

        setList(newlist)
    }
    function handInputphnumber(event) {
        const value = event.target.value;
        const newlist = lists.map((li) => (
            li.id === current.id ? {...li, phnumber :value} : li
        ))

        setList(newlist)
    }
    function handInputfirst_sem_marks(event) {
        const value = event.target.value;
        const newlist = lists.map((li) => (
            li.id === current.id ? {...li, first_sem_marks :value} : li
        ))

        setList(newlist)
    }
    function handInputsecond_sem_marks(event) {
        const value = event.target.value;
        const newlist = lists.map((li) => (
            li.id === current.id ? {...li, second_sem_marks :value} : li
        ))

        setList(newlist)
    }
    function handInputpractical_marks(event) {
        const value = event.target.value;
        const newlist = lists.map((li) => (
            li.id === current.id ? {...li, practical_marks :value} : li
        ))

        setList(newlist)
    }
    function handInputtutorial_marks(event) {
        const value = event.target.value;
        const newlist = lists.map((li) => (
            li.id === current.id ? {...li, tutorial_marks :value} : li
        ))

        setList(newlist)
    }
    function handInputtotal_marks(event) {
        const value = event.target.value;
        const newlist = lists.map((li) => (
            li.id === current.id ? {...li, total_marks :value} : li
        ))

        setList(newlist)
    }
    return(
        <tr>
            <td><input type="text" onChange={handInputname} name='name' value={current.name}/></td>
            <td><input type="text" onChange={handInputroll_number} name='roll_number' value={current.roll_number}/></td>
            <td><input type="text" onChange={handInputemail} name='email' value={current.email}/></td>
            <td><input type="text" onChange={handInputphnumber} name='phnumber' value={current.phnumber}/></td>
            <td><input type="text" onChange={handInputfirst_sem_marks} name='first_sem_marks' value={current.first_sem_marks}/></td>
            <td><input type="text" onChange={handInputsecond_sem_marks} name='second_sem_marks' value={current.second_sem_marks}/></td>
            <td><input type="text" onChange={handInputpractical_marks} name='practical_marks' value={current.practical_marks}/></td>
            <td><input type="text" onChange={handInputtutorial_marks} name='tutorial_marks' value={current.tutorial_marks}/></td>
            <td><input type="text" onChange={handInputtotal_marks} name='total_marks' value={current.total_marks}/></td>
            <td><button type='submit'>Update</button></td>
        </tr>
    )
}

function AddList({setList}) {
    const nameRef = useRef()
    const roll_numberRef = useRef()
    const emailRef = useRef()
    const phnumberRef = useRef()
    const first_sem_marksRef = useRef()
    const second_sem_marksRef = useRef()
    const practical_marksRef = useRef()
    const tutorial_marksRef = useRef()
    const total_marksRef = useRef()

    function handleSubmit(event) {
        event.preventDefault();
        const name = event.target.elements.name.value;
        const roll_number = event.target.elements.roll_number.value;
        const email = event.target.elements.email.value;
        const phnumber = event.target.elements.phnumber.value;
        const first_sem_marks = event.target.elements.first_sem_marks.value;
        const second_sem_marks = event.target.elements.second_sem_marks.value;
        const practical_marks = event.target.elements.practical_marks.value;
        const tutorial_marks = event.target.elements.tutorial_marks.value;
        const total_marks = event.target.elements.total_marks.value;
        const newlist = {
            id: 6,
            name,
            roll_number,
            email,
            phnumber,
            first_sem_marks,
            second_sem_marks,
            practical_marks,
            tutorial_marks,
            total_marks
        }
        setList((prevList)=> {
            return prevList.concat(newlist)
        })
        nameRef.current.value = ""
        roll_numberRef.current.value = ""
        emailRef.current.value = ""
        phnumberRef.current.value = ""
        first_sem_marksRef.current.value = ""
        second_sem_marksRef.current.value = ""
        practical_marksRef.current.value = ""
        tutorial_marksRef.current.value = ""
        total_marksRef.current.value = ""
    }
    return(
        <form className='addForm' onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Enter Name" ref={nameRef}/>
            <input type="text" name="roll_number" placeholder="Enter roll_number" ref={roll_numberRef}/>
            <input type="text" name="email" placeholder="Enter email" ref={emailRef}/>
            <input type="text" name="phnumber" placeholder="Enter phnumber" ref={phnumberRef}/>
            <input type="text" name="first_sem_marks" placeholder="Enter first_sem_marks" ref={first_sem_marksRef}/>
            <input type="text" name="second_sem_marks" placeholder="Enter second_sem_marks" ref={second_sem_marksRef}/>
            <input type="text" name="practical_marks" placeholder="Enter practical_marks" ref={practical_marksRef}/>
            <input type="text" name="tutorial_marks" placeholder="Enter tutorial_marks" ref={tutorial_marksRef}/>
            <input type="text" name="total_marks" placeholder="Enter total_marks" ref={total_marksRef}/>
            <button type="submit">Add</button>
        </form>
    )
}

export default CRUD;
