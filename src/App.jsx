import PlaceContentCenter from './components/PlaceContentCenter';
import Button from './components/Button';
import { useState } from 'react';

export default function App() {
    const [count, setCount] = useState(0);

    function handleClick() {
        const nextCount = count + 1;
        setCount(nextCount);
        console.log({ count, nextCount });
    }

    return (
        <PlaceContentCenter>
            <div className={'text-5xl font-bold mb-5'}>{count}</div>
            <Button onClick={handleClick}>Change Name</Button>
        </PlaceContentCenter>
    );
}
