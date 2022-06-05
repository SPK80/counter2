import React, {useEffect, useState} from 'react';
import s from './App.module.css'
import {Counter} from "./counter/Counter";
import {Setup} from "./setup/Setup";

function App() {
    
    type viewModeType = 'counter' | 'setup'
    const [viewMode, setViewMode] = useState<viewModeType>('counter')
    
    const defaultStartValue: number = 0;
    const defaultMaxValue: number = 5;
    
    const [startValue, setStartValue] = useState<number>(defaultStartValue)
    const [maxValue, setMaxValue] = useState<number>(defaultMaxValue)
    const [counterValue, setCounterValue] = useState<number>(startValue)
    
    const isStartValueIncorrect = (startValue: number) =>
        startValue < 0 || startValue > 9999
    
    const isMaxValueIncorrect = (startValue: number, maxValue: number) =>
        maxValue < 0 || maxValue > 9999 || maxValue <= startValue
    
    useEffect(() => {
        
        let sv: number = +(localStorage.getItem("startValue") ?? defaultStartValue.toString())
        sv = Number.isNaN(sv) ? 0 : sv
        setStartValue(sv)
        
        let mv: number = +(localStorage.getItem("maxValue") ?? defaultMaxValue.toString())
        mv = Number.isNaN(sv) ? 0 : mv
        setMaxValue(mv)
        
        setCounterValue(sv)
    }, [])
    
    const isErrorInSetup = (startValue: number, maxValue: number) =>
        isStartValueIncorrect(startValue) || isMaxValueIncorrect(startValue, maxValue)
    
    const isSetButtonDisabled = isErrorInSetup(startValue, maxValue)
    
    const onChangeMaxValueHandler = (newMaxValue: number) => {
        setMaxValue(newMaxValue)
    }
    
    const onChangeStartValueHandler = (newStartValue: number) => {
        setStartValue(newStartValue)
    }
    
    const onClickIncHandler = () => {
        setCounterValue(counterValue + 1)
    }
    
    const onClickResetHandler = () => {
        setCounterValue(startValue)
    }
    
    const onClickSetHandler = () => {
        setViewMode("setup")
    };
    
    const onConfirmHandler = () => {
        setStartValue(startValue)
        setMaxValue(maxValue)
        setCounterValue(startValue)
        setViewMode("counter")
        
        localStorage.setItem('startValue', startValue.toString())
        localStorage.setItem('maxValue', maxValue.toString())
    }
    
    return (
        <div className={s.app}>
            {viewMode === 'counter' ?
                <Counter
                    monitorMode={"count"}
                    startValue={startValue}
                    maxValue={maxValue}
                    counterValue={counterValue}
                    onClickInc={onClickIncHandler}
                    onClickReset={onClickResetHandler}
                    onClickSet={onClickSetHandler}
                />
                : <Setup
                    onConfirm={onConfirmHandler}
                    maxValue={maxValue}
                    startValue={startValue}
                    isSetButtonDisabled={isSetButtonDisabled}
                    isStartValueIncorrect={isStartValueIncorrect(startValue)}
                    isMaxValueIncorrect={isMaxValueIncorrect(startValue, maxValue)}
                    onChangeStartValue={onChangeStartValueHandler}
                    onChangeMaxValue={onChangeMaxValueHandler}
                />
            }
        </div>
    );
}

export default App;