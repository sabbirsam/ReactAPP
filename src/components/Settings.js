import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Settings=()=>{
    return(
        <React.Fragment>
            <h2>React Form</h2>
            <form className="react-form-group">
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputName">Name</label>
                    <input className="form-control" id="exampleInputName" aria-describedby="NameHelp" placeholder="Enter Name" />
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputName">Password</label>
                    <input type='password' className="form-control" id="exampleInputName" aria-describedby="NameHelp" placeholder="Enter password" />
                </div>
            
                <button type="submit" className="btn btn-primary react-form-btn">Submit</button>
            </form>
        </React.Fragment>
    )
}

export default Settings;