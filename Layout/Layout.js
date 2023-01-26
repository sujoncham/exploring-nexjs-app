import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const Layout = ({children}) => {
    return (
        <>
            <Header />
            <main className='container mx-auto px-10'>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;