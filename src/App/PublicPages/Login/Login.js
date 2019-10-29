import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AuthForm from '../../../Component/Molecules/Login/AuthForm'
import { Labels } from '../../../Common/Helpers/LabelHelper';
import Box from '@material-ui/core/Box';

import './Login.scss';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  multilineColor:{
    color: 'white'
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
}));

const Login = ({ loadAuth }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const classes = useStyles();

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  }

  const submit = async () => {
    await loadAuth({ email, password });
  };

  return (
    <div className="login">
      <Box className="box">
        <AuthForm
          textFieldClass="form"
          styleClass={classes.styleClass} 
          valueEmail={email} 
          valuePassword={password} 
          emailChangeHandler={(event) => emailChangeHandler(event)}
          passwordChangeHandler={(event) => setPassword(event.target.value)}/>
        <Button className="button" variant="contained" color="primary" onClick={submit}>
          {Labels.Login}
        </Button>
      </Box>
    </div>
  );
}

Login.propTypes = {
  auth: PropTypes.object.isRequired,
  loadAuth: PropTypes.func.isRequired,
};

export default React.memo(Login);