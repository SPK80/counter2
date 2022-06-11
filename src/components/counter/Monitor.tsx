import React from "react";
// import s from './Monitor.module.css'
import {createStyles, makeStyles, Paper, Theme} from "@material-ui/core";

export type MonitorModeType = 'count' | 'info' | 'error'

type MonitorPropsType = {
    data: string
    mode: MonitorModeType
    isMaxValue: boolean
}

export const Monitor: React.FC<MonitorPropsType> = (props) => {
    
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
            monitor: {},
            maxValue: {
                color: "red",
                fontSize: 32,
            },
            normValue: {
                color: "darkmagenta",
                fontSize: 30,
            },
            info: {
                color: "#007579",
                fontSize: 16,
            },
            error: {
                color: "red",
                fontSize: 16,
            }
        }),
    )
    
    const classes = useStyles();
    let spanClass = classes.monitor;
    switch (props.mode) {
        case "count":
            spanClass += ' ' + (props.isMaxValue ? classes.maxValue : classes.normValue)
            break
        case "info":
            spanClass += ' ' + classes.info
            break
        case "error":
            spanClass += ' ' + classes.error
            break
    }
    
    return <Paper
        variant={"outlined"}
        className={classes.paper}
    > <span className={spanClass}>{props.data}</span> </Paper>
}