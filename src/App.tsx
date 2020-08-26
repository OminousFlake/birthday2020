import React, { useState } from 'react';
import WarmupPage from './components/WarmupPage';
import './App.css';
import TablePage from './components/TablePage';
import FilmPage from './components/FilmPage';
import NotesPage from './components/NotesPage';
import PlacesPage from './components/PlacesPage';

export interface IStepObject {
    textContent: string;
    answer: RegExp;
    link?: string;
    image?: string;
    withTimer?: boolean;
}

export type THandleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => void;
export type THandleCheck = () => void;
export type THandleChange = (event:React.ChangeEvent<HTMLInputElement>) => void;

const warmupSteps: Array<IStepObject> = [
    {
        textContent: 'Готовы начать?',
        answer: /да/i,
    },
    {
        textContent: 'Прямо сейчас?', 
        answer: /да/i,
    },
    {
        textContent: 'Точно?', 
        answer: /да/i,
    },
    {
        textContent: 'Отлично. Первое задание - смотреть в окно 1 час', 
        answer: /.+/,
    },
    {
        textContent: 'О чем мы забыли?', 
        answer: /(о\s)?терпени(и|е)/i,
        link: 'https://www.youtube.com/watch?v=K82vpN3PKK0'
    },

    {
        textContent: 'Проверим: ничего не пиши, пока не будет 0', 
        answer: /.+/i,
        withTimer: true
    },
    {
        textContent: 'Подождали и будет. И так правила: в консоль не смотреть, в коде не рыться. Понятно?', 
        answer: /да|так точно|хорошо|ок/i
    },
    {
        textContent: 'Поехали. Ой, а это кто?',
        answer: /пипо|pepe|peepo(-|\s)?клоун|clown/i,
        image: 'https://s.tcdn.co/c7b/1c0/c7b1c0ac-92db-49d1-8d62-e527476ccd96/1.png'
    },
    {
        textContent: '.мотевто иничоп ,тскет ламолс от-отк ястежаК',
        answer: /юнич|починил(а)?/i
    },
    {
        textContent: 'Спасибо! Пипо любит шутить, но он не злобный, как тот маг из Гарри Поттера',
        answer: /волан(-|\s)де(-|\s)морт/i
    },
    {
        textContent: 'Ой, извини, я отходил, кто там был?',
        answer: /волан(-|\s)де(-|\s)морт/i
    },
    {
        textContent: 'Кто кто?',
        answer: /волан(-|\s)де(-|\s)морт/i
    },
    {
        textContent: 'Ты написала с ошибкой',
        answer: /волан(-|\s)де(-|\s)морт/i
    },
    {
        textContent: 'Опять. Будь, пожалуйста, внимательнее. Исправь',
        answer: /волан(-|\s)де(-|\s)морт/i
    },
    {
        textContent: 'Хм...а теперь в последнием слове',
        answer: /волан(-|\s)де(-|\s)морт/i
    },
    {
        textContent: 'Ладно, ладно. 4 загадки, все такое. Поехали?',
        answer: /да|го|наконец-то|поехали/i
    },
    {
        textContent: 'П.С. подсказок не будет, даже ошибки не покажут',
        answer: /.+/i
    },
];
const warmupStepsNumber = warmupSteps.length - 1;

const App = () => {
    const [globalStep, setGlobalStep] = useState(0);
    const [warmupStep, setWarmupStep] = useState(0);

    const handleKeyDown: THandleKeyDown = (event) => {
        const enterKeyCode = 13;
        if (event.keyCode === enterKeyCode) {
            if (warmupSteps[warmupStep].answer.test(event.currentTarget.value)) {
                if (warmupStep === warmupStepsNumber) {
                    setGlobalStep(globalStep + 1);
                } else {
                    setWarmupStep(warmupStep + 1);
                }
            }
            event.currentTarget.value = '';
        }
    };

    const goToNextStep: THandleCheck = () => {
      setGlobalStep(globalStep + 1);
    }

    function renderPage(stepNumber: number) {
        switch (stepNumber) {
            case 0:
                return <WarmupPage
                    step={warmupSteps[warmupStep]}
                    handleKeyDown={handleKeyDown}
                />
            case 1:
                return <TablePage goToNextStep={goToNextStep}/>
            case 2:
                return <NotesPage goToNextStep={goToNextStep}/>;
            case 3:
                return <FilmPage goToNextStep={goToNextStep}/>
            case 4:
                return <PlacesPage goToNextStep={goToNextStep}/>
            default:
                return <div>
                    <img src="https://thumbs.gfycat.com/YearlyAliveKilldeer-size_restricted.gif" alt="victory"/>
                </div>;
        }
    }

    return (
        <div className="App">
            {renderPage(globalStep)}
        </div>
    );
}

export default App;
