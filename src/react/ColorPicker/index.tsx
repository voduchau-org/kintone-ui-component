import React, { useState, useEffect, useRef } from "react";
import ColorPickerStyle from "./ColorPickerStyle";
import Picker from "./components/Picker";
import {invertColor, isHexString} from './components/utils'

type ColorPickerProps = {
    color: string
    onChange: (hexString: string) => void
}

function ColorPicker(props: ColorPickerProps) {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [hexString, setHexString] = useState(props.color || "#ff0000");
    const [pickerDisplay, setPickerDisplay] = useState(false);
    const [focus, setFocus] = useState(false);

    const inputProps = {
        type: "text",
        defaultValue: hexString,
        onBlur: handleHexInputChange,
        onFocus: handleHexInputFocus,
        style: getInputStyle()
    };

    function handleHexInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (isHexString(e.target.value)) {
            setHexString(e.target.value);
            /* if (props.onChange) {
                props.onChange(e.target.value)
            } */
        }
    }

    function handlePickerChange(newHex: string) {
        setHexString(newHex);
        
    }

    function handleHexInputFocus() {
        setFocus(true);
        setPickerDisplay(true);
    }

    function handleClickOutside(e: Event) {
        if (wrapperRef && wrapperRef.current && !wrapperRef.current.contains(e.target as Node) && pickerDisplay) {
            setFocus(false);
            setPickerDisplay(false);
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside, true);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside, true);
        };
    });

    function getInputStyle() {
        let style = {
            backgroundColor: hexString,
            color: invertColor(hexString)
        };

        style = { ...style, ...ColorPickerStyle.input };

        if (focus) {
            style = { ...style, ...ColorPickerStyle.inputFocus };
        }
        return style;
    }

    const pickerProps = {
        pickerDisplay: pickerDisplay,
        hexString: hexString,
        onChange: handlePickerChange,
        onCancel: () => {
            setPickerDisplay(false);
            setHexString(props.color);
            props.onChange(props.color)
        },
        onSubmit: (hexString: string) => {
            setPickerDisplay(false);
            setHexString(hexString);
            props.onChange(hexString)
        },
        zIndex: 2000
    };

    return (
        <div ref={wrapperRef}>
            <div>
                <input {...inputProps} key={hexString}/>
            </div>
            <Picker {...pickerProps} />
        </div>
    );
}

export default ColorPicker;
