import Header from '../header';
import Footer from '../footer';

const Layout = ({children}) => {
  return (
    <div>
      <Header />
      <div className='min-h-60vh'>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;