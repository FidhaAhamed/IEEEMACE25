import Navbar from './Components/Navbar';
import Hero from './Pages/Hero';
import About from './Pages/About';
import WhyIEEE from './Pages/WhyIEEE';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyIEEE />
      </main>
    </>
  );
}
