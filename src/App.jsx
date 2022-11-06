import { IconBrandFacebook, IconBrandGithub, IconBrandReact, IconBrandTwitter } from '@tabler/icons';
import Button from './components/Button';

export default function App() {
    const type = 'tambah';
    const onClick = () => console.log('Login with another style ...');
    return (
        <div className='bg-slate-900 grid min-h-screen place-content-center'>
            <div className='flex gap-x-2'>
                <Button {...{ type, onClick }}>
                    <IconBrandGithub />
                    Login
                </Button>
                <Button onClick={() => console.log('Login')} type='button'>
                    <IconBrandTwitter />
                    Login
                </Button>
                <Button className='bg-green-600' onClick={() => console.log('Register')}>
                    <IconBrandFacebook />
                    Register
                </Button>
                <Button onClick={() => console.log('Reset')} type='reset'>
                    <IconBrandReact />
                    Reset
                </Button>
            </div>
        </div>
    );
}
