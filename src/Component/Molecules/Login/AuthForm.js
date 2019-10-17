
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { MarginNormal } from '../../../Common/Helpers/StylesHelper';

const AuthForm = (props) => (
    <form>
        <TextField
          id="email"
          label="Email"
          className={props.styleClass}
          value={props.valueEmail}
          onChange={props.emailChangeHandler}
          margin={MarginNormal}
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          className={props.styleClass}
          value={props.valuePassword}
          onChange={props.passwordChangeHandler}
          margin={MarginNormal}
        />
      </form>
);

export default AuthForm;

