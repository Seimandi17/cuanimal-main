
import Footer from './Footer';

const MainLayout = ({ children, fullWidth = false }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <main className={`flex-fill pt-4 ${fullWidth ? '' : 'container'}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
