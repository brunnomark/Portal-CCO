import React, { useState  } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AuthForm from '../../../Component/Molecules/Login/AuthForm'
import { Labels } from '../../../Common/Helpers/LabelHelper';

import './Login.scss';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
}));

function Login({ loadAuth }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const classes = useStyles();

  const submit = async () => {
    await loadAuth({ email, password });
  };

  return (
    <div className="login">
      <AuthForm 
        styleClass={classes.textField} 
        valueEmail={email} 
        valuePassword={password} 
        emailChangeHandler={(event) => setEmail(event.target.value)}
        passwordChangeHandler={(event) => setPassword(event.target.value)}/>
      <Button variant="contained" color="primary" onClick={submit}>
        {Labels.Login}
      </Button>
    </div>
  );
}

Login.propTypes = {
  auth: PropTypes.object.isRequired,
  loadAuth: PropTypes.func.isRequired,
};

export default Login;