import React from 'react';
import {Button} from "../common/Button";
import {InputNumber} from "../common/InputNumber";
import {BeenhereRounded} from "@material-ui/icons";
import {Box, Container, createStyles, Grid, makeStyles, Paper, Theme} from "@material-ui/core";

type SetupType = {
    onConfirm: () => void
    onChangeMaxValue: (value: number) => void
    onChangeStartValue: (value: number) => void
    maxValue: number
    startValue: number
    isSetButtonDisabled: boolean
    isMaxValueIncorrect: boolean
    isStartValueIncorrect: boolean
}

export const Setup: React.FC<SetupType> = (props) => {
    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            paper: {
                width: 150,
                padding: 10,
            },
        }),
    )
    
    const classes = useStyles();
    
    return (
        <Paper className={classes.paper}>
            <Grid item>
                <InputNumber
                    value={props.maxValue}
                    onChangeValue={props.onChangeMaxValue}
                    caption={'max value:'}
                    error={props.isMaxValueIncorrect}
                />
            </Grid>
            <Grid item>
                <InputNumber
                    value={props.startValue}
                    onChangeValue={props.onChangeStartValue}
                    caption={'start value:'}
                    error={props.isStartValueIncorrect}
                />
            </Grid>
            <Grid item style={{textAlign: "center"}}>
                
                <Button
                    disabled={props.isSetButtonDisabled}
                    onClick={props.onConfirm}
                    style={{display: "inline-block", position: "relative"}}
                > <BeenhereRounded/>
                </Button>
            </Grid>
        
        </Paper>
    )
}