import React, { useState } from 'react';
import CheckInputBlock from './CheckInputBlock';
import { THandleChange, THandleCheck, THandleKeyDown } from './../App';

interface IProps {
    goToNextStep: THandleCheck;
}

const films = [
    {
        name: 'これは人々ではありませんか？ これは人よりも悪いです。 これらは街で最高の人です',
        positions: '[7,8,9,12]'
    },

    {
        name: '私の清廉潔白、時間内に裏切ることは裏切ることではありません。 これは予見可能です！',
        positions: '[1,2,3]'
    },

    {
        name: 'ある人が集めたものは、別の人が常に作ることができます',
        positions: '[2,5,6,8]'
    },

    {
        name: '知的な顔はまだ知性の兆候ではありません。 世界のすべてのナンセンスは、この表現を顔に託しています。.. 笑顔の紳士、笑顔',
        positions: '[5,15]'
    },

    {
        name: '愛してる.. 深く 深いところで',
        positions: '[1,10,13]'
    },

    {
        name: '盗んだ、飲んだ、刑務所に！ ロマンス!',
        positions: '[6, 15]'
    },

    {
        name: '例えば、ロンドンでは、犬は男の友人です。 そして、私たちの家のマネージャーは男の友人です',
        positions: '[1,3,4,6,11,14,16,17]'
    },
];

const absolutelyWrongAnswer = 'カーラ|チャールズ';
const nextTaskButtonText = 'さらに';
const checkButtonText = '確認';
const successText = '文字。';

const FilmPage = (props: IProps) => {
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
        if (inputValue === absolutelyWrongAnswer) {
            setIsSuccess(true);
        }
        setInputValue('');
    }

    return (
        <div className="content">
            {films.map((film, index) => {
                return <p className="film" key={`film${index}`}>
                    {film.name}
                    <br></br>
                    <span className="film_addition">{film.positions}</span>
                </p>
            })}
            <CheckInputBlock 
                isSuccess={isSuccess} 
                successText={successText}
                inputValue={inputValue}
                handleChange={handleInputChange}
                successButtonText={nextTaskButtonText}
                checkButtonText={checkButtonText}
                checkAnswer={checkAnswers}
                goNext={props.goToNextStep}
                checkOnEnter={handleKeyDown}
            />
        </div>
    );
}

export default FilmPage;