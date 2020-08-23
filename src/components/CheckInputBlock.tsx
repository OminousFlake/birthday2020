import React from 'react';
import { THandleCheck, THandleChange, THandleKeyDown } from '../App';

interface IProps {
    isSuccess: boolean;
    successText: string;
    successButtonText?: string;
    checkAnswer: THandleCheck;
    handleChange: THandleChange;
    goNext: THandleCheck;
    checkOnEnter:THandleKeyDown;
    checkButtonText?: string;
    inputValue: string;
}

const CheckInputBlock = (props: IProps) => {
    return (
        <>
            {props.isSuccess
            ? <div className="buttonBlock success">
                <span className="success_text">
                    {props.successText}
                </span>
                <button onClick={props.goNext} className="button success_button">
                    {props.successButtonText || 'Далее'}
                </button>
            </div>
            : <div className="buttonBlock checking">
                <input
                    onKeyDown={props.checkOnEnter}
                    onChange={props.handleChange}
                    type="text" 
                    className="checking_input"
                    value={props.inputValue}
                />
                <button onClick={props.checkAnswer} className="button checking_button">
                    {props.checkButtonText || 'Проверить'}
                </button>
            </div>
            }
        </>
    );
}

export default CheckInputBlock;