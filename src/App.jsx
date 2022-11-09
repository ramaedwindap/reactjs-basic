import PlaceContentCenter from './components/PlaceContentCenter';
import Card from './components/Card';
import Button from './components/Button';
import Input from './components/Input';
import Label from './components/Label';
import { IconBrandGithub } from '@tabler/icons';
import { useState } from 'react';

export default function App() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    return (
        <PlaceContentCenter>
            <Card>
                <Card.Title>Sign up for new account!</Card.Title>
                <Card.Body className='text-slate-800'>
                    <div className='mb-5 p-4 border rounded-lg'>
                        <p>Name = {name || '------'}</p>
                        <p>Email = {email || '------'}</p>
                    </div>
                    <div className='mb-6'>
                        <Label htmlFor='name' value='Name' />
                        <Input value={name} onChange={(event) => setName(event.target.value)} id={'name'} name={'name'} />
                    </div>
                    <div className='mb-6 '>
                        <Label htmlFor='email' value='Email' />
                        <Input value={email} onChange={(event) => setEmail(event.target.value)} id={'email'} name={'email'} />
                    </div>
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
