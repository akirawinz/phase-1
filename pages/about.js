import MainLayout from '../components/layouts/Main';
const About = () => {
  return (
    <>
      <h2 className="text-2xl">About</h2>
      <div className="pt-3">
        <div className="p-5 border-1 bg-white rounded-2xl">
          <h2 className="text-lg font-bold text-gray-300">I Love Programing</h2>
          <p>
            Currently, we have only <strong>JustSay</strong> ,{' '}
            <strong>Counter</strong> and <strong>Timer</strong> widgets.
          </p>
          <p>
            Crafted with <span className="text-red-400">♥</span> by Book.
          </p>
        </div>
      </div>
    </>
  );
};

About.Layout = MainLayout;

export default About;
