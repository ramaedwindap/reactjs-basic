export default function App() {
    return (
        <div className='bg-slate-900 grid min-h-screen place-content-center'>
            <div className='flex gap-x-2'>
                {/* Output Sign up semua! */}
                <Button>Sign in</Button>
                <Button>Sign up</Button>
            </div>
        </div>
    );
}

function Button() {
    return (
        <button className='bg-blue-600 rounded text-white px-4 py-2'>
            Sign Up
        </button>
    );
}
