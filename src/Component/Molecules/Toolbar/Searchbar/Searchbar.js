import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

const Searchbar = (props) => {
    return (
    <div className={props.classes.search}>
        <div className={props.classes.searchIcon}>
            <SearchIcon />
        </div>
        <InputBase
            placeholder={props.placeHolder}
            classes={{
                root: props.classes.inputRoot,
                input: props.classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
        />
    </div>);
};

export default Searchbar;