import PlaceContentCenter from './components/PlaceContentCenter';
import Button from './components/Button';
import { useState } from 'react';

export default function App() {
    const [name, setName] = useState('Rama');

    function handleClick() {
        setName('ramepitsme!');
        console.log(name);
    }

    return (
        <PlaceContentCenter>
            <div>{name}</div>
            <Button onClick={handleClick}>Change Name</Button>
        </PlaceContentCenter>
    );
}
