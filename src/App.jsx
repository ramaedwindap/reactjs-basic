import PlaceContentCenter from './components/PlaceContentCenter';
import Counter from './components/Counter';
import { useState } from 'react';

export default function App() {
    const [count, setCount] = useState(0);

    return (
        <PlaceContentCenter>
            <Counter count={count} setCount={setCount} />
        </PlaceContentCenter>
    );
}
