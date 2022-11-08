import { useState } from 'react';
import Button from './Button';

export default function Counter() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount((x) => x + 1);
    }

    return (
        <div>
            <div className={'text-5xl font-bold mb-5'}>{count}</div>
            <div className='mt-5 flex items-center gap-x-2'>
                <Button onClick={handleClick}>+1</Button>
                <Button
                    onClick={() => {
                        handleClick();
                        handleClick();
                        handleClick();
                    }}>
                    +3
                </Button>
            </div>
        </div>
    );
}
