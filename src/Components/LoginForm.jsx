import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import * as yup from 'yup';
import { Paper } from '@mui/material';
import logo from '/home/amrutanejkar/Desktop/React/my-app/src/images/logo.png';

const LoginForm=()=> {

  const initialState = {
    name: '',
    email: '',
    password: '',
    errors: {},
    isLogin: true,
    isTouched: {
      name: false,
      email: false,
      password: false
    }
  }
  const [value, setValue] = useState({ showPassword: false })

  const SchemaErrors = {}
  const [formValues, setFormValues] = useState(initialState);
  const {name, email, password,errors, isTouched} = formValues;

  const loginSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email('Invalid email format').required(),
    password: yup.string().required('Password Required').matches(
      /^.*(?=.{6,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      'Password must contain at least 6 characters',
    ),
  })
  const errorHandler = (values) => {
    const { name, email, password } = values;
    loginSchema.validate({
      name, email, password
    }, { abortEarly: false }).then(() => {
      setFormValues({
        ...values,
        isLogin: false,
        errors: {}
      })
    }).catch((allErr) => {
      if (allErr) {
        allErr.inner.forEach((errs) => {
          SchemaErrors[errs.path] = errs.message;
        });
        setFormValues({
          ...values,
          isLogin: true,
          errors: SchemaErrors
        })
      }
    })
  };

  const handleOnBlur = (e, type) => {
    const { v } = e.target;
    if (v === '' || value) {
      isTouched[type] = true;
      const newValue = {
        ...formValues,
        isTouched,
      };
      setFormValues(newValue);
      errorHandler(newValue);
    }
  };

  const getError = (type) => {
    if (isTouched[type]) {
      return errors[type] || ""
    }
    return '';
  }

  const handleOnNameChange = (e) => {
    setFormValues({
      ...formValues,
      name: e.target.value,
    });
    errorHandler({
      ...formValues,
      name: e.target.value
    })
  }

  const handleOnEmailChange = (e) => {
    setFormValues({
      ...formValues,
      email: e.target.value,
    });
    errorHandler({
      ...formValues,
      email: e.target.value
    })
  }

  const handleOnPasswordChange = (e) => {
    setFormValues({
      ...formValues,
      password: e.target.value,
    });
    errorHandler({
      ...formValues,
      password: e.target.value
    });
  };

  const handleOnFocus = (type) => {
    isTouched[type] = true;
  };

  
  let navigate = useNavigate();
  const handleOnClick = () => {
    console.log(formValues);
    // if(name==='Amruta', email==='amruta.nejkar@successive.tech', password==='Test@123'){
    //   navigate("/home", { replace: true });
    // }
    navigate("/post", { replace: true });
  }  

    return (
      <div className='form'>
    <Paper sx={{ width: 500 ,mt: 5, ml:60}} elevation={3}>

    <Box sx={{pt:5, height:650}}>
    <img src={logo} alt="logo" />
    <h1> Login Form </h1>
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <TextField sx={{ width: '270px' }}
        margin="normal"
        required
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
        onFocus={() => handleOnFocus('email')}
        onBlur={(e) => handleOnBlur(e, 'email')}
        helperText={getError('email')}
        error={getError('email'.length)}
        onChange={handleOnEmailChange}
      />
      <TextField sx={{ width: '270px' }}
       margin="normal"
       type="password"
       required
       id="password"
       label="password"
       name="password"
       autoComplete="password"
       autoFocus
       onFocus={() => handleOnFocus('password')}
   onBlur={(e) => handleOnBlur(e, 'password')}
   helperText={getError('password')}
   error={getError('password'.length)}
       onChange={handleOnPasswordChange}
      />
      <Button sx={{ width: '270px' }}
      // <Button sx={{ width: 1 / 4 ,mb:2}}
      type="submit"
      variant="contained"
      onClick={handleOnClick}
      >
        Log In
      </Button>
    </Box>
    </Box>
  </Paper>
  </div>

        
    );
}

export default LoginForm;