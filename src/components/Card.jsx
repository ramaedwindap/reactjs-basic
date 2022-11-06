function Card({ title, footer, children }) {
    return (
        <div className='shadow '>
            <h1 className='text-2xl font-semibold'>{title}</h1>

            <div className='leading-relaxed'>{children}</div>

            <div className='bg-slate-50'>{footer}</div>
        </div>
    );
}

export default Card;
