import React from 'react';
import classes from './BuildControl.module.css'
const buildControl = props => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Less} onClick={props.removed} disabled={props.disabled}>Ít thôi</button>
        <button className={classes.More} onClick={props.added}>Thêm nữa</button>
    </div>
)
export default buildControl;