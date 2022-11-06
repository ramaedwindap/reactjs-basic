function Card({ children }) {
    return (
        <div className=' bg-white rounded overflow-hidden shadow'>
            <div className='leading-relaxed'>{children}</div>
        </div>
    );
}

function Title({ children }) {
    return (
        <h1 className='p-4 border-b'>
            <div className='text-xl'> {children}</div>
        </h1>
    );
}

function Body({ children }) {
    return <h1 className='p-4 leading-relaxed'>{children}</h1>;
}

function Footer({ children }) {
    return <div className='p-4 flex justify-end bg-slate-50'>{children}</div>;
}

Card.Title = Title;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
