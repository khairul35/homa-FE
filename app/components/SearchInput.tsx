import { ComponentProps } from 'react';

const SearchInput = (props: ComponentProps<'input'>) => {
    return (
        <div className='relative flex items-center border border-gray-300 rounded-md bg-gray-200'>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 34 36" fill="none" className="pl-3">
                <path d="M2 16.9625C2 8.69375 8.375 2 16.25 2" stroke="black" strokeWidth="3.17336" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M30.5011 16.9625C30.5011 25.2312 24.1261 31.925 16.2511 31.925C10.6411 31.925 5.78105 28.523 3.45605 23.5617" stroke="black" strokeWidth="3.17336" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 6.72504H29" stroke="black" strokeWidth="3.17336" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 11.45H24.5" stroke="black" strokeWidth="3.17336" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M32 33.5L29 30.35" stroke="black" strokeWidth="3.17336" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <input
                {...props}
                className="pl-12 pr-4 py-2 bg-transparent border-none focus:outline-none w-full"
            />
        </div>
    );
}

export default SearchInput;
