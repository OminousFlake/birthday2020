import React, { useState } from 'react';
import { THandleChange, THandleCheck, THandleKeyDown } from './../App';
import CheckInputBlock from './CheckInputBlock';

interface IProps {
    goToNextStep: THandleCheck;
}

const coords = [
    'Японский астроном Masahiro Koishikawa открыл новый астероид 5751 Zao',
    'Секстилий, 29 дней',
    'И марганец, и кадр, и Вселенная',
    'Малая Пироговская ул., 8, Москва, 119435 [The-]',
    'Большая Серпуховская ул., 14/13, строение 1, 3 этаж. офис 38, Москва, 115093 [?-forma]',
    'Сущевская ул., 19 строение 4, Москва, 127055 [Pho ? Quoc Su]',
    '2-й Донской проезд, 10с4 [?302.ru]'
];

const absolutelyWrongAnswer = /куница|юл(ька|ёк|яка|ёнок|я|ия)/i;
const successText = 'Подарок съел Ктулху';

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