import { React,useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid, TextField } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import DangerousIcon from '@mui/icons-material/Dangerous';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import "./signup.css"
import { message } from 'antd';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
const theme = createTheme();

export const SignUp = () => {
  
  const [rollno,setRollno]=useState(0);
  const [first_name,setFName]=useState("");
  const [last_name,setLName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [conform_password,setCPassword]=useState("");
  const [date_of_birth,setDOB]=useState("");
  const [gender,setGen]=useState("");
  const [phone_no,setPhNo]=useState("");
  const [Error,setError]=useState(false);
  function isFirstFunctionTrue() {
    // Replace this condition with your own logic
    // For example, you might check if some input is valid or if a certain condition is met
    if(password!==conform_password){
      setError(true);
      return false;
    }
    return true;
  }
  function checkAndCall() {
    if (isFirstFunctionTrue()) {
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
      axios.post('http://localhost:8080/addDetails', data)
      // message.loading("please wait");
      message.success("Account Created Successfully");
    }
  }
  const SubmitHandler = (e)=>{
    e.preventDefault();
    checkAndCall();
  }
  
  
  
  return (
    <ThemeProvider theme={theme}>
      
      <div className='main' >
      </div>
        <div className='form'>
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
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate  sx={{ mt: 3 }}>
          <form id='signup-form'>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                InputProps={{
                  sx: {
                    '&:focus-within fieldset, &:focus-visible fieldset': {
                      border: '2px solid blue!important',
                    },
                  },
                }}
                  name="firstName"
                  required
                  fullWidth
                  label="First Name"
                  type="text"
                  onChange={ (e) => setFName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                InputProps={{
                  sx: {
                    '&:focus-within fieldset, &:focus-visible fieldset': {
                      border: '2px solid blue!important',
                    },
                  },
                }}
                  required
                  fullWidth
                  label="Last Name"
                  name="lastName"
                  type="text"
                  onChange={ (e) => setLName(e.target.value)}
                />
              </Grid>
                  <Grid item xs={12}>
                    <TextField
                    InputProps={{
                      sx: {
                        '&:focus-within fieldset, &:focus-visible fieldset': {
                          border: '2px solid blue!important',
                        },
                      },
                    }}
                      required
                      fullWidth
                      name="Roll No"
                      label="Roll No"
                      type="number"
                      onChange={ (e) => setRollno(e.target.value)}
                    />
                    </Grid>
                  <Grid item xs={12}>
                    <TextField
                    InputProps={{
                      sx: {
                        '&:focus-within fieldset, &:focus-visible fieldset': {
                          border: '2px solid blue!important',
                        },
                      },
                    }}
                      required
                      fullWidth
                      name="Date of Birth"
                      label="Date of Birth"
                      type="text"
                      onChange={ (e) => setDOB(e.target.value)}
                    />
                    </Grid>
              <Grid item xs={12}>
                <TextField
                InputProps={{
                  sx: {
                    '&:focus-within fieldset, &:focus-visible fieldset': {
                      border: '2px solid blue!important',
                    },
                  },
                }}
                  required
                  fullWidth
                  label="Email Address"
                  name="email"
                  type="email"
                  onChange={ (e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                InputProps={{
                  sx: {
                    '&:focus-within fieldset, &:focus-visible fieldset': {
                      border: '2px solid blue!important',
                    },
                  },
                }}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  onChange={ (e) => setPassword(e.target.value)}
                  />
              </Grid>
              <Grid item xs={12}>
                <TextField
                InputProps={{
                  sx: {
                    '&:focus-within fieldset, &:focus-visible fieldset': {
                      border: '2px solid blue!important',
                    },
                  },
                }}
                  required
                  fullWidth
                  name="conform password"
                  label="Conform Password"
                  type="password"
                  onChange={ (e) => setCPassword(e.target.value)}
                  />
              </Grid>
              {Error && conform_password!==password?
        <label className='error' style={{color:"red",fontSize:"20px"}}><DangerousIcon style={{color:"red"}}/> Password Doesn't Match</label>:""}
              <Grid item xs={12}>
                <TextField
                InputProps={{
                  sx: {
                    '&:focus-within fieldset, &:focus-visible fieldset': {
                      border: '2px solid blue!important',
                    },
                  },
                }}
                  required
                  fullWidth
                  name="Gender"
                  label="Gender"
                  type="text"
                  onChange={ (e) => setGen(e.target.value)}
                  
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                InputProps={{
                  sx: {
                    '&:focus-within fieldset, &:focus-visible fieldset': {
                      border: '2px solid blue!important',
                    },
                  },
                }}
                  required
                  fullWidth
                  name="phone no"
                  label="Phone No"
                  type="tel"
                  onChange={ (e) => setPhNo(e.target.value)}
                  
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" required/>}
                  label="Accept Terms and Conditions." />
              </Grid>
            </Grid>
            <Button type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }} 
              onClick={SubmitHandler}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/Login"><button>Already have an account? Login</button></Link>
              </Grid>
            </Grid>
      </form>
          </Box>
        </Box>
        
      </Container>
      </div>
      
    </ThemeProvider>
  );
       
}
export default SignUp;