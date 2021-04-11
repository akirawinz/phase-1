import MainLayout from '../components/layouts/Main';
import Card from '../components/template/Card';
const About = () => {
  return (
    <>
      <h2 className="text-2xl">About</h2>
      <Card title="I Love Programing">
        <p>
          Currently, we have only <strong>JustSay</strong> ,{' '}
          <strong>Counter</strong> and <strong>Timer</strong> widgets.
        </p>
        <p>
          Crafted with <span className="text-red-400">♥</span> by Win.
        </p>
      </Card>
    </>
  );
};

About.Layout = MainLayout;

export default About;
