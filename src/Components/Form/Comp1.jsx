import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import './Comp.css'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Comp2 from './Comp2';
function Comp1() {
  const [input,setInput]=useState({FirstName:'',LastName:'',Email:'',Gender:'',Dob:'',Phone:'',Password:''});
  const [bool,setBool]=useState(false);
  const [data,setData]=useState([]);
  const [passworderror,setPassworderror]=useState('');
  const handleChange=(e,type)=>{
    if(type==='first'){
      setInput((pre)=>{
        return {...pre,FirstName:e.target.value};
      })
    }
    else if(type==='last'){
      setInput((pre)=>{
        return {...pre,LastName:e.target.value};
      })
    }
    else if(type==='email'){
      setInput((pre)=>{
        return {...pre,Email:e.target.value};
      })
    } 
    else if(type==='gender'){
      setInput((pre)=>{
        return {...pre,Gender:e.target.value};
      })
    } 
    else if(type==='dob'){
      setInput((pre)=>{
        return {...pre,Dob:e.target.value};
      })
    } 
    else if(type==='phone'){
      setInput((pre)=>{
        return {...pre,Phone:e.target.value};
      })
    } 
    else if(type==='password'){
      setInput((pre)=>{
        return {...pre,Password:e.target.value};
      })
    } 
  }


  const handleSubmit=(e)=>{
    e.preventDefault();
    setData((pre)=>{
      return [...pre,input];
    })
    setInput((pre)=>{
      return {...pre,FirstName:'',LastName:'',Email:'',Gender:'',Dob:'',Phone:'',Password:''};
    })
    if(bool){
      setBool(false);
    }
    else{
      setBool(true);
    }
  }

  const handleRange=(e,type)=>{
    if(type==='phone'){
     const inputfield=e.target.value;

     const numericfield=inputfield.replace(/\D/g, "");
      setInput((pre)=>{
        return {...pre,Phone:numericfield};
      })
    }
    else if(type==='password'){
      const passdata=e.target.value;
      setInput((pre)=>{
        return {...pre,Password:passdata};
      })
      if(passdata.length < 8){
         setPassworderror('Password must be at least of 8 characters');
      }
      else{
       setPassworderror('');
      }
    }

  }
console.log(data);
  return (
   <div className='row mainbox pb-5 pt-5'> 
<div className='col-sm-12 col-md-3 box4'></div>
   <div className='col-sm-12 col-md-6 box2'>
   <div className='row'>
    <div className='col-sm-12 col-md-12 box1 border bg-light border-dark pt-4 pb-5 ps-4'>
      <form className='pt-2 ps-4 pb-2' onSubmit={handleSubmit}>
          <h2 className='text-primary'>Form Validation</h2>
          <hr className='hr'></hr>
          <label><h5>First Name:</h5></label><br></br>
          <TextField  label="First Name" variant="outlined" onChange={(e) =>handleChange(e,'first')} className='textfield' required value={input.FirstName}/><br></br><br></br>

          <label htmlFor='first'><h5>Last Name:</h5>
          </label><br></br>
          <TextField  label="Last Name"  variant="outlined" required className='textfield' type={'text'} onChange={(e)=>handleChange(e,'last')} value={input.LastName}/><br></br><br></br>

          <label htmlFor='email'><h5>Email:</h5>
          </label><br></br>
                  <TextField  label="example@gmail.com"  variant="outlined" required className='textfield' type={'email'} onChange={(e)=>handleChange(e,'email')} value={input.Email}
                  /><br></br><br></br>

          <h5>Gender:</h5>
                <FormControl className='gender'>
                
                  <InputLabel id="demo-simple-select-helper-label">Gender</InputLabel>
                  <Select required
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={input.Gender}
                    label="Gender"
                   
                    onChange={(e)=>handleChange(e,'gender')}
                  >
                    
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </Select>
                  
                </FormControl><br></br><br></br>

                <label htmlFor='dateofbirth'><h5>Date of Birth:</h5>
                </label><br></br>
                  <TextField   variant="outlined" name='dateofbirth' required className='dob' type={'date'} onChange={(e)=>handleChange(e,'dob')} value={input.Dob}
                  /><br></br><br></br>

                <label htmlFor='phone'><h5>Phone No:</h5>
                  </label><br></br>
                  <TextField  label="Phone No:" type={'text'} variant="outlined" required className='textfield' name='phone' onChange={(e)=>handleRange(e,'phone')} value={input.Phone} maxLength={10}  pattern="[0-9]*"/><br/><br/>


                  <label htmlFor='password'><h5>Password:</h5>
                  </label><br></br>
                  <TextField  label="Password:" type='password' variant="outlined" className='textfield' required min={8} id="password" name='password' onChange={(e)=>handleRange(e,'password')} value={input.Password}/>
                  <p className='text-danger'>{passworderror}</p>

                  <Stack  direction="row">
                <Button variant="contained" type={'submit'} className='ms-2 mt-4 ps-4 pe-4 pt-2 pb-2'>Submit</Button>
                
            </Stack>
      </form>
    </div>
    {bool ? 
    <div className='col-sm-12 col-md-12 box3 border border-dark bg-light mt-5 ps-5 pt-3'>
    <Comp2 data={data} /> 
    <div></div>
   </div>
   :
   <></>
     }  
   </div>
   </div>
   <div className='col-sm-12 col-md-3'>
           
   </div>
   </div>
  
  )
}

export default Comp1
