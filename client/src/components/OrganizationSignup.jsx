import React from 'react'
import TextField from '@mui/material/TextField';

export const OrganizationSignup = (Props) => {
  return (
    <div>
        <TextField className="input" label="Username" name="Name" variant="standard" onChange={(e)=> Props.setUsername(e.target.value)} required/>
        <TextField className="input" label="Email" name="Email" variant="standard" onChange={(e)=> Props.setEmail(e.target.value)} required/>
        <TextField className="input" label="Password" name="Password" variant="standard" type ="password" onChange={(e)=> Props.setPassword(e.target.value)} required/>
        <TextField className="input" label="Confirm Password" name="Confirm_password" variant="standard" type="password" onChange={(e)=> Props.setConfirm_Password(e.target.value)}  required/>
        <TextField className="input" label="City" name="City" variant="standard" onChange={(e)=> Props.setCity(e.target.value)}  required/>
        <TextField className="input" label="State" name="State" variant="standard" onChange={(e)=> Props.setState(e.target.value)} required/>
        <TextField className="input" label="Country" name="Country" variant="standard" onChange={(e)=> Props.setCountry(e.target.value)} />
        <TextField className="input" label="UPI ID" name="UPI_ID" variant="standard" onChange={(e)=> Props.setUPI(e.target.value)} />
        <TextField className="input" label="Purpose of the NGO" name="Purpose" variant="standard" onChange={(e)=> Props.setPurpose(e.target.value)} required/>
        <TextField className="input" label="PAN Number" name="PAN" variant="standard" onChange={(e)=> Props.setPAN(e.target.value)} required/>
    </div>
  )
}
