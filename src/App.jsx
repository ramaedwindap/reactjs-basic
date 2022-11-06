import Button from './components/Button';
import Card from './components/Card';

export default function App() {
    return (
        <div className='bg-slate-100 antialiased flex items-center justify-center min-h-screen '>
            <div className='max-w-md w-full'>
                <Card
                    title='Hello World!'
                    footer={
                        <div className='flex justify-end'>
                            <Button>Register</Button>
                        </div>
                    }>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia inventore porro ipsa delectus ducimus doloribus, quidem iure ex
                    labore, quae iste nemo non quia harum. Culpa ut dolorem ipsum maiores?
                </Card>
            </div>
        </div>
    );
}
