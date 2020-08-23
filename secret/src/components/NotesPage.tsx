import React, { useState } from 'react';
import { THandleChange, THandleCheck, THandleKeyDown } from './../App';
import CheckInputBlock from './CheckInputBlock';

interface IProps {
    goToNextStep: THandleCheck;
}

const lines = [
    'Поляк на Поляне Сидел',
    'Дорога - Мимолетная Редька-Динозавр',
    'Подорожник Синица Доела',
    'Минутный Переезд в Одинцово',
    'Сидоренко Коляску Умиротворил',
    'Поребрик-Диван Заминировал Рельсы-Придирки',
    'Дороро Подорвал Понтисион',
    'Землянин Помигал Смиту',
    'Соленья Уминает Ребрант',
    'Дмитрий + Михаил = Рейд на Диониса',
    'Подошел, Посидел, вот Поляк!'
];

const absolutelyWrongAnswer = /aladdin|аладдин/i;
const successText = 'Good';

const NotesPage = (props: IProps) => {
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
            {lines.map((line, index) => {
                return <p className="line" key={`line${index}`}>{line}</p>
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

export default NotesPage;