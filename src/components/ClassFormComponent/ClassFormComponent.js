import React, { Component } from 'react'

export class ClassFormComponent extends Component {
  render() {
    return (
        <React.Fragment>
        <form onSubmit={handleClick}>
            <label htmlFor='FirstName'>FirstName : </label>
            <input id='FirstName' requried  value={FirstName} onChange={(e) => setFirstName(e.target.value)}></input>
            <br/>
            <label htmlFor='LastName'>LastName : </label>
            <input id='LastName' requried value={LastName} onChange={(e)=>{setLastName(e.target.value)}}></input>
            <br/>
            <label htmlFor='Email'>Email : </label>
            <input id='Email' requried value={Email} onChange={(e)=>{setEmail(e.target.value)}}></input>
            <br/>
            <label htmlFor='Password'>Password : </label>
            <input id='Password' requried value={Password} onChange={(e)=>{setPassword(e.target.value)}}></input>
            <br/>
            <label htmlFor='MobileNumber'>Mobile No : </label>
            <input id='MobileNumber' requried value={MobileNumber} onChange={(e)=>{setMobileNumber(e.target.value)}}></input>
            <br/>
            <label htmlFor='Address'>Address : </label>
            <textarea id='Address' requried value={Address} onChange={(e)=>{setAddress(e.target.value)}}></textarea>
            <br/>
            <label for="Platform">Choose a Platform:</label>
            <select id="Platform" requried value={Platform} onChange={(e)=>{setPlatform(e.target.value)}}>
                <option value="Android">Android</option>
                <option value="Windows">Windows</option>
                <option value="MacOS">MacOS</option>
                <option value="Ubuntu" >Ubuntu</option>
            </select>
            <br/>
            <button type='submit'  >Submit</button>
        </form>
    </React.Fragment>
    )
  }
}

export default ClassFormComponent