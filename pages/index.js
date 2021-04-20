import MainLayout from '../components/layouts/Main';
import ModalList from '../components/layouts/ModalList';

const Home = () => {
  return (
    <>
      <h2 className="text-2xl">Widgets</h2>

      <ModalList />
    </>
  );
};

Home.Layout = MainLayout;

export default Home;
