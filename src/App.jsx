import { IconBrandFacebook, IconBrandTwitter } from '@tabler/icons';

export default function App() {
    return (
        <div className='bg-slate-900 grid min-h-screen place-content-center'>
            <div className='flex gap-x-2'>
                {/* Output Sign up semua! */}
                <Button type='button'>
                    <IconBrandTwitter />
                    Login
                </Button>
                <Button type='submit'>
                    <IconBrandFacebook />
                    Register
                </Button>
            </div>
        </div>
    );
}

function Button(props) {
    const { children } = props;
    return (
        <button
            {...props}
            className='[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 flex items-center gap-x-2 bg-blue-600 rounded text-white px-4 py-2'
        >
            {children}
        </button>
    );
}
