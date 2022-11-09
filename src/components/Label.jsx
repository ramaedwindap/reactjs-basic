export default function Label({ value, children, ...props }) {
    return (
        <label {...props} className={'text-slate-800 mb-1 block'}>
            {value || children}
        </label>
    );
}
