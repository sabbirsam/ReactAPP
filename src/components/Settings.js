import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Settings=()=>{

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');

    const url = `${appLocalizer.apiUrl}/react_app/v1/settings`;
    

    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post( url, {
            email:email,
            name:name,
            pass:pass
        })
        .then( (res)=>{
            console.log(res);
        } )
    }


    return(
        <React.Fragment>
            <h2>React Form</h2>
            <form className="react-form-group" onSubmit={ (e)=> handleSubmit(e)}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={ (e) =>{setEmail(e.target.value)} } />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputName">Name</label>
                    <input className="form-control" id="exampleInputName" aria-describedby="NameHelp" placeholder="Enter Name" value={name} onChange={ (e) =>{setName(e.target.value)} } />
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputName">Password</label>
                    <input type='password' className="form-control" id="exampleInputName" aria-describedby="NameHelp" placeholder="Enter password"  value={pass} onChange={ (e) =>{setPass(e.target.value)} }/>
                </div>
            
                <button type="submit" className="btn btn-primary react-form-btn">Submit</button>
            </form>
        </React.Fragment>
    )
}

export default Settings;