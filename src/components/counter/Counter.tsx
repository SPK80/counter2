import React from 'react';
import {Monitor, MonitorModeType} from "./Monitor";
import {Button} from "../common/Button";
import {AddBox, Cached, Settings} from "@material-ui/icons";
import {createStyles, makeStyles, Paper, Theme} from "@material-ui/core";

type CounterType = {
    startValue: number
    maxValue: number
    counterValue: number
    onClickInc: () => void
    onClickReset: () => void
    onClickSet: () => void
    monitorMode: MonitorModeType
}

export const Counter: React.FC<CounterType> = (props) => {
    const errorMessage = 'Incorrect value'
    const infoMessage = "Enter values and press 'set'"
    
    const isIncBtnDisabled: boolean = props.monitorMode !== "count" || props.counterValue === props.maxValue
    const isResetBtnDisabled: boolean = props.monitorMode !== "count" || props.counterValue === props.startValue
    
    let monitorData = ''
    switch (props.monitorMode) {
        case "count" || "isMaxVal":
            monitorData = props.counterValue.toString()
            break
        case "info":
            monitorData = infoMessage
            break
        case "error":
            monitorData = errorMessage
    }
    
    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            paperRoot: {
                width: 150,
                padding: 10,
            },
            paperButtons: {
                height: 50,
                margin: 10,
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                
            },
        }),
    )
    
    const classes = useStyles();
    
    return (
        <Paper className={classes.paperRoot}>
            <Monitor
                mode={props.monitorMode}
                data={monitorData}
                isMaxValue={props.counterValue === props.maxValue}
            />
            
            <Paper variant={"outlined"} className={classes.paperButtons}>
                <Button
                    onClick={props.onClickInc}
                    disabled={isIncBtnDisabled}
                > <AddBox/>
                </Button>
                
                <Button
                    onClick={props.onClickReset}
                    disabled={isResetBtnDisabled}
                > <Cached/>
                </Button>
                
                <Button
                    onClick={props.onClickSet}
                    disabled={false}
                > <Settings/>
                </Button>
            
            </Paper>
        
        </Paper>
    )
}