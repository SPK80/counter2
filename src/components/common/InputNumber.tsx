import React, {ChangeEvent} from "react";
import {TextField} from "@material-ui/core";

type InputType = {
    value: number
    inputClassName?: string
    onChangeValue: (value: number) => void
    caption?: string
    error?: boolean
}

export const InputNumber: React.FC<InputType> = (props) => {
    
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = Math.floor(e.currentTarget.valueAsNumber)
        e.currentTarget.value = ''
        if (Number.isNaN(newValue))
            props.onChangeValue(0)
        else
            props.onChangeValue(newValue)
    }
    
    return (
        <TextField
            style={{margin: "0 10%", width: "80%"}}
            variant={"standard"}
            inputProps={{type: "number"}}
            fullWidth
            size={"small"}
            label={props.caption}
            value={props.value}
            onChange={onChangeHandler}
            error={props.error}
        />
    )
}