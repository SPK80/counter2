import React from "react";
import {IconButton, Tooltip} from "@material-ui/core";

type ButtonPropsType = {
    onClick: () => void
    disabled?: boolean
    style?: React.CSSProperties
    tooltipTitle?: string
}

export const Button: React.FC<ButtonPropsType> =
    ({
         onClick,
         disabled,
         style,
         tooltipTitle,
         children
     }) => {
        return (tooltipTitle && !disabled) ? (
                <Tooltip title={tooltipTitle}>
                    <IconButton
                        size={"small"}
                        color={"primary"}
                        onClick={onClick}
                        disabled={disabled}
                        style={style}
                    >
                        {children}
                    </IconButton>
                </Tooltip>
            )
            : (
                <IconButton
                    size={"small"}
                    color={"primary"}
                    onClick={onClick}
                    disabled={disabled}
                    style={style}
                >
                    {children}
                </IconButton>
            )
    }