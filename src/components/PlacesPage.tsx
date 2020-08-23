import React, { useState } from 'react';
import { THandleChange, THandleCheck, THandleKeyDown } from './../App';
import CheckInputBlock from './CheckInputBlock';

interface IProps {
    goToNextStep: THandleCheck;
}

const coords = [
    '17.989879, 25.676575',
    '17.989879, 25.676575',
    '17.989879, 25.676575',
    '17.989879, 25.676575',
];

const absolutelyWrongAnswer = /куница|юл(ька|ёк|яка|ёнок|я|ия)/i;
const successText = 'Good';

const PlacesPage = (props: IProps) => {
    const [isSuccess, setIsSuccess] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange: THandleChange = (event) => {
        setInputValue(event.currentTarget.value);
    }

    const handleKeyDown: THandleKeyDown = (event) => {
        const enterKeyCode = 13;
        if (event.keyCode === enterKeyCode) {
            checkAnswers();
        }
    }

    const checkAnswers: THandleCheck = () => {
        if (absolutelyWrongAnswer.test(inputValue)) {
            setIsSuccess(true);
        }
        setInputValue('');
    }

    return (
        <div className="content">
            {coords.map((coord, index) => {
                return <p className="line" key={`line${index}`}>{coord}</p>
            })}
            <CheckInputBlock 
                isSuccess={isSuccess}
                inputValue={inputValue}
                successText={successText}
                handleChange={handleInputChange}
                checkAnswer={checkAnswers}
                goNext={props.goToNextStep}
                checkOnEnter={handleKeyDown}
            />
        </div>
    );
}

export default PlacesPage;