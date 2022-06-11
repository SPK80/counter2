import React from "react";
import s from './Monitor.module.css'
import {createStyles, makeStyles, Paper, Theme} from "@material-ui/core";

export type MonitorModeType = 'count' | 'info' | 'error'

type MonitorPropsType = {
    data: string
    mode: MonitorModeType
    isMaxValue: boolean
}

export const Monitor: React.FC<MonitorPropsType> = (props) => {
    let className = s.monitor;
    switch (props.mode) {
        case "count":
            className += ' ' + (props.isMaxValue ? s.maxValue : s.normValue)
            break
        case "info":
            className += ' ' + s.info
            break
        case "error":
            className += ' ' + s.error
            break
    }
    
    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            paper: {
                margin: 10,
                padding: 5,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                font: "inherit",
                background: "azure",
            },
        }),
    )
    
    const classes = useStyles();
    
    
    return <Paper
        variant={"outlined"}
        className={classes.paper}
    > <span>{props.data}</span> </Paper>
}