import React, { useState, useEffect } from 'react';
import { IStepObject, THandleKeyDown } from './../App';

interface IProps {
    step: IStepObject;
    handleKeyDown: THandleKeyDown;
}

const WarmupPage = (props: IProps) => {
    const [count, setCount] = useState(5);

    useEffect(() => {
        if (!count) return;
        if (props.step.withTimer) {
            const timer = setTimeout(() => {
                setCount(count - 1);
            }, 1000);
            return () => clearTimeout(timer);
        }
    });
    
    return (
        <div className="content">
                <label 
                    htmlFor="welcomepage-input" 
                    className="content_label">
                        {props.step.textContent}
                </label>
                <input onKeyDown={(event) => {
                    if (props.step.withTimer) {
                        if (count) {
                            setCount(count * 2);
                        } else {
                            props.handleKeyDown(event);
                        }
                    } else {
                        props.handleKeyDown(event);
                    }
                }} id="welcomepage-input" type="text" className="content_input"/>
                {props.step.link 
                && <p>
                        <a href={props.step.link} target="_blank" rel="noopener noreferrer">Клик</a>
                    </p>}
                {props.step.image 
                    && <p>
                        <img src={props.step.image} alt="Какой-то мемный клоун"/>
                    </p>}
                {props.step.withTimer
                    && <p>{count}</p>}
            </div>
    )
}

export default WarmupPage;