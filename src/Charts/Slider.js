import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "90%",
    }
}));

function ValueLabelComponent(props) {
    const { children, open, value } = props;

    return (
        <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
            {children}
        </Tooltip>
    );
}

ValueLabelComponent.propTypes = {
    children: PropTypes.element.isRequired,
    open: PropTypes.bool.isRequired,
    value: PropTypes.number.isRequired,
};

const PrettoSlider = withStyles({
    root: {
        height: 8,
        color: 'red',
        display: "flex",
        width:"90%"
    },
    thumb: {
        height: 0,
        width: 0,
        backgroundColor: 'transparent',
        border: '0px solid currentColor',
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 4px)',
    },
    track: {
        height: 8,
        borderRadius: 4,
    },
    rail: {
        height: 8,
        borderRadius: 4,
    },
})(Slider);

export default function CustomizedSlider(props) {
    const classes = useStyles();

    return (
        <div className="wrap" >
            <div className={classes.root}>
                <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" style={{ color: props.mycolor }} value={props.value} />
            </div>
            <div>
                {props.value}%
            </div>
        </div>
    );
}