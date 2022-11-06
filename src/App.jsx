import PlaceContentCenter from './components/PlaceContentCenter';
import Button from './components/Button';

export default function App() {
    let name = 'Rama Edwinda Putra';

    function handleClick() {
        name = 'ramepitsme!';
    }

    return (
        <PlaceContentCenter>
            <div>{name}</div>
            <Button onClick={handleClick}>Change Name</Button>
        </PlaceContentCenter>
    );
}
