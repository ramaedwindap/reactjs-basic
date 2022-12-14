import clsx from 'clsx';

export default function Button({ className = 'bg-black', children, type = 'submit', ...props }) {
    return (
        <button
            type={type}
            {...props}
            className={clsx(className, '[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 flex items-center gap-x-2 rounded text-white px-4 py-2')}>
            {children}
        </button>
    );
}
