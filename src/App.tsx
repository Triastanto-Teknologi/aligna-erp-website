import { useEffect } from 'react';
import { getCalApi } from '@calcom/embed-react';
import Header from './components/Header';
import Hero from './components/Hero';
import OperationalControl from './components/OperationalControl';
import EmpoweringGrowth from './components/EmpoweringGrowth';
// import Testimonial from './components/Testimonial';
import BuiltForIndustries from './components/BuiltForIndustries';
import CoreBusinessModules from './components/CoreBusinessModules';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';
import StructuredData from './components/StructuredData';

export default function App() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi();
      cal('ui', {
        theme: 'light',
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
    })();
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-clip bg-white">
      <StructuredData />
      <Header />
      <main>
        <Hero />
        <OperationalControl />
        <EmpoweringGrowth />
        {/* <Testimonial /> */}
        <BuiltForIndustries />
        <CoreBusinessModules />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
