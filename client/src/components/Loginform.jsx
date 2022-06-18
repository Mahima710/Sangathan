import React from 'react'
import TextField from '@mui/material/TextField';


export const Loginform = (Props) => {
  return (
    <div>
            <TextField style={{marginTop : "1.5rem"}} className="input" label="Email" name="Email" variant="standard" onChange={(e)=> Props.setEmail(e.target.value)} required />
            <TextField  style={{marginTop : "1.5rem", marginBottom : "2rem"}} className="input" label="Password" name="Password" variant="standard" onChange={(e)=> Props.setPassword(e.target.value)} type ="password"required />
    </div>
  )
}