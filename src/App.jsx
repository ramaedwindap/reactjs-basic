import Button from './components/Button';
import Card from './components/Card';

export default function App() {
    return (
        <div className='bg-slate-100 text-slate-800 antialiased flex items-center justify-center min-h-screen '>
            <div className='max-w-md w-full'>
                <Card>
                    <Card.Title>Card lorem</Card.Title>
                    <Card.Body>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia inventore porro ipsa delectus ducimus doloribus, quidem iure
                        ex labore, quae iste nemo non quia harum. Culpa ut dolorem ipsum maiores?
                    </Card.Body>
                    <Card.Footer>
                        <Button>Lorem</Button>{' '}
                    </Card.Footer>
                </Card>
            </div>
        </div>
    );
}
