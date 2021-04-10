import MainLayout from '../components/layouts/Main';
import WidgetJustSay from '../components/WidgetJustSay';
import WidgetCounter from '../components/WidgetCounter';
import WidgetTimer from '../components/WidgetTimer';
const Home = () => {
  return (
    <>
      <h2 className="text-2xl">Widgets</h2>
      <div className="pt-3">
        <div className="md:masonry">
          <WidgetJustSay />
          <WidgetCounter />
          <WidgetTimer />
        </div>
      </div>
    </>
  );
};

Home.Layout = MainLayout;

export default Home;
