import Link from 'next/link';

const Header = () => {
    return (
        <div className='bg-purple-400 py-3'>
            <div className='container mx-auto px-10 flex justify-between'>
                <div>
                    <span>Logo</span>
                </div>
                <div className='flex justify-start items-center gap-5'>
                    <Link href={'/'}>Home</Link>
                    <Link href={'/about'}>About</Link>
                    <Link href={'/services'}>Services</Link>
                    <Link href={'/contact'}>Contact</Link>
                    <Link href={'/login'}>Login</Link>
                    <Link href={'/logout'}>Logout</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;