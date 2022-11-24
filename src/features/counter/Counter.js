import React, { useState } from 'react';

import Button from '../../components/atoms/Button';
import Text from '../../components/atoms/Text';

const Counter = () => {
    const [count, setCount] = useState(0);
    const handleUp = () => setCount(count + 1);
    const handleDown = () => setCount(count - 1);

    return (
        <>
            <div style={style.container}>
                <Button up data="Arttır" onClick={handleUp} />
                <Text text={count} />
                <Button down onClick={handleDown} />
            </div>
        </>
    );
};

const style = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        gap: '2rem',
    },
};

export default Counter;
