import React, { useState } from 'react';
import { THandleCheck, THandleChange } from './../App';

interface IProps {
    goToNextStep: THandleCheck;
}

const rows = [
    [9, 7, 5, 6, 1],
    [4, 6, 5, 6, 7],
    [5, 'keyNumber1', 'keyNumber2', 7, 6],
    [4, 5, 6, 8, 5],
    [6, 8, 4, 1, 9]
];

const secretAnswers = {
    answer1: 2,
    answer2: 8,
};

const TablePage = (props: IProps) => {
    const [isSuccess, setIsSuccess] = useState(false);
    const [inputOneValue, setinputOneValue] = useState('');
    const [inputTwoValue, setinputTwoValue] = useState('');

    function renderInput(cellName: string, callback: THandleChange, index: number) {
        return (
            <div key={`cell${index}`} className="table_cell">
                <input onChange={callback} value={cellName} type="text" className="cell_input"/>
            </div>
        ) 
    }

    function checkAnswers(input1: string, input2: string,) {
        if (Number(input1) === secretAnswers.answer1
            && Number(input2) === secretAnswers.answer2) {
                setIsSuccess(true);
        } else {
            setinputOneValue('');
            setinputTwoValue('');
        }
    }

    function handleInputOneChange(event:React.ChangeEvent<HTMLInputElement>): void {
        setinputOneValue(event.currentTarget.value);
    }

    function handleInputTwoChange(event:React.ChangeEvent<HTMLInputElement>): void {
        setinputTwoValue(event.currentTarget.value);
    }
       
    return (
        <div className="content">
            <div className="table">
                {rows.map((row, rowIndex) => {
                    return <div key={`row${rowIndex}`} className="table_row">
                        {row.map((cell, cellIndex) => {
                            if (typeof cell === 'string') {
                                if (cell === 'keyNumber1') return renderInput(inputOneValue, handleInputOneChange, cellIndex);
                                if (cell === 'keyNumber2') return renderInput(inputTwoValue, handleInputTwoChange, cellIndex);
                                return '';
                            } else {
                                return <div key={`cell${cellIndex}`} className="table_cell">{cell}</div>
                            }
                        })}
                    </div> 
                })}
            </div>
            {isSuccess 
            ? <>
                <p>Yeah</p>
                <button onClick={props.goToNextStep} className="button success_button">
                    Вперед
                </button>
            </>
            : <button onClick={() => {
                checkAnswers(inputOneValue, inputTwoValue);
            }} className="button checking_button">
                Проверить
            </button>
            }
            
        </div>
    );
}

export default TablePage;