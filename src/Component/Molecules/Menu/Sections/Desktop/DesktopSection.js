import React from 'react';
import IconButton from '@material-ui/core/IconButton';

const DesktopSection = (props) => {
    const sectionItens = props.SectionItems.map((sectionItem, index) => {
        return (
            <IconButton
                key={`desktop-section-${sectionItem.Label + '-' + index}`} 
                onClick={sectionItem.onClickHandler}
                edge={sectionItem.edge}
                aria-label={sectionItem.IconAriaLabel}
                aria-controls={sectionItem.IconAriaControl}
                aria-haspopup={sectionItem.IconHaspopup}
                color={sectionItem.IconColor}
            >
            {sectionItem.Component}
            </IconButton>
        );
    });

    return (
        <div className={props.class}>
            {sectionItens}
        </div>);
};

export default DesktopSection;