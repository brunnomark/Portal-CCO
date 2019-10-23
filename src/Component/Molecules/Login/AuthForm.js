
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import { MarginNormal } from '../../../Common/Helpers/StylesHelper';
import { Labels } from '../../../Common/Helpers/LabelHelper';

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'red',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
  },
})(TextField);

const AuthForm = (props) => {
    return (
    <form>
      <CssTextField
          id="email"
          type="email"
          label={Labels.Email}
          className={props.textField}
          InputLabelProps={{ style: { color: "white" } }}
          InputProps={{ style: { color: "white" } }}
          value={props.valueEmail}
          onChange={props.emailChangeHandler}
          margin={MarginNormal}
        />
        <CssTextField
          id="password"
          type="password"
          label={Labels.Password}
          className={props.textField}
          InputLabelProps={{ style: { color: "white" } }}
          InputProps={{ style: { color: "white" } }}
          value={props.valuePassword}
          onChange={props.passwordChangeHandler}
          margin={MarginNormal}
        />
      </form>);
};

export default AuthForm;

