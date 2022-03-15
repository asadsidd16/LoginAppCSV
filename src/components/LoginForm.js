import React from 'react';
import {useState} from 'react';
import Papa from 'papaparse';

function LoginForm({ Login, error }) {
    const [details, setDetails] = useState({name: "", username: "", password: ""});
    const [rows, setRows] = React.useState([]);
    //Logic for grabbing the csv data and parsing it using Papaparse npm library
    React.useEffect(() => {
        async function getData() {
            const response = await fetch('./logindata.csv')
            const reader = response.body.getReader()
            const result = await reader.read() // raw array
            const decoder = new TextDecoder('utf-8')
            const csv = decoder.decode(result.value) // the csv text
            const results = Papa.parse(csv, { header: true }) // object with { data, errors, meta }
            const rows = results.data // array of objects
            setRows(rows)
        }
        getData()
    },[])

    //On form submission it sends the rows and details objects to login function for the check
    const submitHandler = ( e )=> {
        e.preventDefault();
        console.log(rows)
        Login(details, rows);
    }

  return (
        <form onSubmit={submitHandler}>
            <div className="form-inner"> 
                <h2>Login</h2>
                {(error !== "") ? (<div className='error'>{error}</div>): ""}
                <div className="form-group">
                    <label htmlFor="name">Username:</label>
                    <input type="text" name="username" id="username"  onChange={e => setDetails({...details, username: e.target.value})} value={details.username}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Password:</label>
                    <input type="password" name="password" id="password"  onChange={e => setDetails({...details, password: e.target.value})} value={details.password}></input>
                </div>
                <input type="submit" value="LOGIN"/>
            </div>
        </form>

  )
}

export default LoginForm;
