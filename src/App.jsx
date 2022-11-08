import PlaceContentCenter from './components/PlaceContentCenter';
import Card from './components/Card';
import Button from './components/Button';
import { IconBrandGithub } from '@tabler/icons';

export default function App() {
    return (
        <PlaceContentCenter>
            <Card>
                <Card.Title>Sign up for new account!</Card.Title>
                <Card.Body className='text-black'>
                    <label htmlFor='name'>Name</label>
                    <input className='border-slate-300 shadow-sm rounded-lg' type={'text'} name='name' id='name' />
                </Card.Body>
                <Card.Footer>
                    <Button>
                        <IconBrandGithub /> Register
                    </Button>
                </Card.Footer>
            </Card>
        </PlaceContentCenter>
    );
}
