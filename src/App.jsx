import Header from "./components/Header";
import Hero from "./components/hero/Hero";
import css from "./styles/app.module.scss";

const App = () => {
  return (
    // `${css.container}`: template String
    // access bg-primary in global.scss
    <>
      <div className={`bg-primary ${css.container}`}>
        <Header />
        <Hero />
        {/* <About />
        <Skills />
        <Projects />
        <Footer /> */}
      </div>
    </>
  );
};

export default App;
