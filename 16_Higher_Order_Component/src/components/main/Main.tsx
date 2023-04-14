import React, { ChangeEvent, ChangeEventHandler, useEffect } from 'react';
import DangerButton from '../../reusable/DangerButton';
import { WithButton } from '../withButton/WithButton';
import WithInput from '../withInput/WithInput';
import { withTimer } from '../withTimer/WithTimer';

const Sample = ({
    count,
    startTimer,
    endTimer,
}: {
    count: number;
    startTimer: () => void;
    endTimer: () => void;
}) => {
    useEffect(() => {
        startTimer();
    }, [startTimer]);

    useEffect(() => {
        if (count === 10) {
            endTimer();
        }
    }, [count, endTimer]);

    return <p>{count}</p>;
};

function Button({
    style,
    handleClick,
    name,
}: {
    style?: React.CSSProperties;
    handleClick?: (e: React.MouseEvent, param: any) => void;
    name?: string;
}) {
    return (
        <button
            style={style}
            onClick={(event) =>
                handleClick && handleClick(event, { msg: `${name} clicked` })
            }>
            Button
        </button>
    );
}

function Input({
    type,
    handleInput,
}: {
    type?: string;
    handleInput?: ChangeEventHandler<HTMLInputElement>;
}) {
    return <input type={type} onChange={handleInput} />;
}

function Main() {
    const DefaultButton = WithButton(Button);
    const ConfirmButton = WithButton(Button, 'confirm');
    const SuccessButton = WithButton(Button, 'success');

    const TextInput = WithInput(Input, 'text');
    const NumberInput = WithInput(Input, 'number');

    const SampleWithTimer = withTimer(Sample);

    const handleConfirmClick = (e: React.MouseEvent, param: any) => {
        console.log(e);
        console.log(param);
    };

    const handleSuccessClick = (e: React.MouseEvent, param: any) => {
        console.log(e);
        console.log(param);
    };

    const handleDangerClick = (e: React.MouseEvent, param: any) => {
        console.log(e);
        console.log(param);
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log('handleInputChange: ', e.target.value);
    };

    return (
        <div className="main">
            <p>main</p>
            SampleWithTimer: <SampleWithTimer />
            <p>{/* WithNumberInput: <NumberInput /> */}</p>
            <p>
                DefaultButton: <DefaultButton />
            </p>
            <p>
                ConfirmButton:
                <ConfirmButton handleClick={handleConfirmClick} />
            </p>
            <p>
                SuccessButton:
                <SuccessButton handleClick={handleSuccessClick} />
            </p>
            <p>
                DangerButton:
                <DangerButton handleClick={handleDangerClick} />
            </p>
            <p>
                TextInput:
                <TextInput handleInput={handleInputChange} />
            </p>
            <p>
                NumberInput:
                <NumberInput />
            </p>
        </div>
    );
}

export default Main;
