import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Tagline from './components/Tagline/Tagline';
import InterestForm from './components/InterestForm/InterestForm';
import Features from './components/Features/Features';
import Location from './components/Location/Location';
import InteractivePlot from './components/InteractivePlot/InteractivePlot';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Tagline />
        <InterestForm />
        <Features />
        <Location />
        <InteractivePlot />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
