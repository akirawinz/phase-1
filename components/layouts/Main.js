import NavBar from '../NavBar';

const MainLayout = ({ children }) => {
  return (
    <>
      <div className="w-100 max-w-4xl mx-auto p-5">
        <h1 className="text-4xl font-bold">Daytech Dashboard</h1>
        <NavBar />
        {children}
      </div>
    </>
  );
};

export default MainLayout;
