import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Settings=()=>{
    /**
     * Save 
     */
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');
    const [loader, setLoader] = useState('Save Setting');

    const url = `${appLocalizer.apiUrl}/react_app/v1/settings`;
    

    const handleSubmit = (e)=>{
        e.preventDefault();
        setLoader('Saving...');
        axios.post( url, {
            email:email,
            name:name,
            pass:pass
        },{
            headers:{
                'content-type':'application/json',
                'X-WP-NONCE': appLocalizer.nonce
            }
        } )
        .then( (res)=>{
            setLoader('Save Setting');
            console.log(res);
        } )
    }

    /**
     * Show
     */

    useEffect( ()=>{
        axios.get( url )
        .then( (res) =>{
            setEmail( res.data.email );
            setName( res.data.name );
            setPass( res.data.pass );
        } )
    },[] )

    return(
        <React.Fragment>
        <div className="container">
            <div className="mb-3">
                
                <form className="react-form-group" onSubmit={ (e)=> handleSubmit(e)}>
        
                    <div className="form-group">
                        <label htmlFor="ticket_close">Gmail:</label>
                        <input className="form-control" id="ticket_close" aria-describedby="TicketClose" placeholder="Enter Close Ticket Number " value={email} onChange={ (e) =>{setEmail(e.target.value)} } />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputName">Name</label>
                        <input className="form-control" id="exampleInputName" aria-describedby="NameHelp" placeholder="Enter Name" value={name} onChange={ (e) =>{setName(e.target.value)} } />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputName">Password</label>
                        <input type='password' className="form-control" id="exampleInputName" aria-describedby="NameHelp" placeholder="Enter password"  value={pass} onChange={ (e) =>{setPass(e.target.value)} }/>
                    </div>
                    <button type="submit" className="btn btn-primary react-form-btn">{loader}</button>
                </form>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Settings;