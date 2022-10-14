import React from 'react'
import { useState, useEffect } from 'react'

export default function Form() {
    const [inputData, setInputData] = useState(() => { return { name: '', email: '', password: '' } })
    const [flag, setFlag] = useState(false)
    const submitHandler = (e) => {
        e.preventDefault();
        if (inputData.name === '' || inputData.email === '' || inputData.password === '') {
            alert('Please fill all the fields')
        } else {
            setFlag(true)
        }
    }

    useEffect(() => {
        if (flag) {
            alert('Submitted Successfully')
        }
    }, [flag])


    return (
        <>
            <pre>{(flag) ? <h2 className='ui-define'>Hello {inputData.name}, You've Registered Successfully</h2> : ""}</pre>
            <form onSubmit={submitHandler}>
                <div>
                    <input onChange={(e) => {
                        setInputData({ ...inputData, name: e.target.value })
                    }} type="text" value={inputData.name} placeholder='Enter Your Name' name='name'></input>
                </div>
                <div>
                    <input onChange={(e) => {
                        setInputData({ ...inputData, email: e.target.value })
                    }} type="text" value={inputData.email} placeholder='Enter Your Email' name='email'></input>
                </div>
                <div>
                    <input onChange={(e) => {
                        setInputData({ ...inputData, password: e.target.value })
                    }} type="text" value={inputData.password} placeholder='Enter Your Password' name='password'></input>
                </div>
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}
