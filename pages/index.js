import MainLayout from '../components/layouts/Main';
import Card from '../components/template/Card';
import Counter from '../components/widgets/Counter';
import JustSay from '../components/widgets/JustSay';
import Timer from '../components/widgets/Timer';

const Home = () => {
  return (
    <>
      <h2 className="text-2xl">Widgets</h2>
      <div className="pt-3">
        <div className="md:masonry">
          <Card title="JustSay">
            <JustSay />
          </Card>
          <Card title="Counter">
            <Counter />
          </Card>
          <Card title="Timer">
            <Timer />
          </Card>
        </div>
      </div>
    </>
  );
};

Home.Layout = MainLayout;

export default Home;
