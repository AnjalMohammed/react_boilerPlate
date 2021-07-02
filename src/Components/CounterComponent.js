import React from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from 'antd';

import { StyledButton } from '../styles/StyledComponents';
import { useCounter } from '../contexts/counterContext';

const CounterComponet = props => {
    const history = useHistory();
    const { counter,
        increment,
        decrement,
        loader,
        asyncIncrement
    } = useCounter();
    return (
        <>
            <p>Counter value changes by using redux</p>
            <div className='flex items-center'>
                <Button
                    loading={loader}
                    onClick={increment}>+</Button>
                <p className='mb0 mx2'>
                    Value:
                    {counter}
                </p>
                <Button
                    loading={loader}
                    onClick={decrement}
                >-</Button>
            </div>
            <div>
                <Button
                    type="primary"
                    className='my1'
                    loading={loader}
                    onClick={asyncIncrement}>Click to increment with delay of 3s</Button>
                <StyledButton className='my1 ml1'
                    loading={props.loader}
                    onClick={() => history.push('/another_route')}>Click to go to different route</StyledButton>
            </div>
        </>
    );
}

export default CounterComponet;