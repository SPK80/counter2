import React from 'react';
import counterStyles from "./Counter.module.css";
import panelStyles from '../common/Panel.module.css'
import {Monitor, MonitorModeType} from "./Monitor";
import {Button} from "../common/Button";

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
    
    return (
        <div className={counterStyles.counter + ' ' + panelStyles.panel}>
            <Monitor
                mode={props.monitorMode}
                data={monitorData}
                isMaxValue={props.counterValue === props.maxValue}
            />
            
            <div className={counterStyles.buttonsPanel}>
                
                <Button
                    onClick={props.onClickInc}
                    disabled={isIncBtnDisabled}
                > inc
                </Button>
                
                <Button
                    onClick={props.onClickReset}
                    disabled={isResetBtnDisabled}
                > reset
                </Button>
                
                <Button
                    onClick={props.onClickSet}
                    disabled={false}
                > set
                </Button>
            
            </div>
        
        </div>
    )
}