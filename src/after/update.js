import React from 'react';
// import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import UpdateIcon from '@mui/icons-material/Update';
// import "./signup.css"
import "./update.css"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
const theme = createTheme();

export const Update = () => {
  const [rollno,setRollno]=useState(0);
  const [first_name,setFName]=useState("");
  const [last_name,setLName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [conform_password,setCPassword]=useState("");
  const [date_of_birth,setDOB]=useState("");
  const [gender,setGen]=useState("");
  const [phone_no,setPhNo]=useState("");

  const SubmitHandler =(e)=>{
    e.preventDefault();
    const data = {
      sno:rollno,
      firstName: first_name,
      lastName: last_name,
      email:email,
      password:password,
      conformPassword:conform_password,
      dateOfBirth:date_of_birth,
      gender:gender,
      phoneNo:phone_no   
    };

    axios.put('http://localhost:8080/updateDetails', data)
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
}
  


  return (
    <ThemeProvider theme={theme}>
      
      <div className='mainin' >
      </div>
        <div className='formm'>
      <Container className='container' component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor:'secondary.main' }}>
            <UpdateIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
            UPDATE
          </Typography>
          <Box component="form" noValidate  sx={{ mt: 3 }}>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  // autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  // id="firstName"
                  label="First Name"
                  type="text"
                  onChange={ (e) => setFName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  // id="lastName"
                  label="Last Name"
                  name="lastName"
                  type="text"
                  // autoComplete="family-name"
                  onChange={ (e) => setLName(e.target.value)}
                />
              </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="userid"
                      label="User Id"
                      type="number"
                      onChange={ (e) => setRollno(e.target.value)}
                    />
                    </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="Date of Birth"
                      label="Date of Birth"
                      type="text"
                        // autoComplete="dob"
                        onChange={ (e) => setDOB(e.target.value)}
                    />
                    </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  // id="email"
                  label="Email Address"
                  name="email"
                  type="email"
                  // autoComplete="email"
                  onChange={ (e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  // id="password"
                  // autoComplete="new-password"
                  onChange={ (e) => setPassword(e.target.value)}/>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="conform password"
                  label="Conform Password"
                  type="password"
                  // id="password"
                  // autoComplete="new-password"
                  onChange={ (e) => setCPassword(e.target.value)}
                  />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Gender"
                  label="Gender"
                  type="text"
                  // id="grnder"
                  // autoComplete="gender"
                  onChange={ (e) => setGen(e.target.value)}
                  
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="phone no"
                  label="Phone No"
                  type="text"
                  // id="number"
                  // autoComplete="number"
                  onChange={ (e) => setPhNo(e.target.value)}
                  
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="Accept Terms and Conditions."/>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={SubmitHandler}
              sx={{ mt: 3, mb: 2 }}
            >
              Update Details
            </Button>
            
      </form>
          </Box>
        </Box>
        
      </Container>
      </div>
      
    </ThemeProvider>
  );
       
}

export default Update;