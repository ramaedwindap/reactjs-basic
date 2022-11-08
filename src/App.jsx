import PlaceContentCenter from './components/PlaceContentCenter';
import Counter from './components/Counter';

export default function App() {
    return (
        <PlaceContentCenter>
            <Counter initialValue={10} />
        </PlaceContentCenter>
    );
}
