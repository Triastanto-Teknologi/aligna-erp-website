import Header from './components/Header';
import Hero from './components/Hero';
import OperationalControl from './components/OperationalControl';
import EmpoweringGrowth from './components/EmpoweringGrowth';
import Testimonial from './components/Testimonial';
import BuiltForIndustries from './components/BuiltForIndustries';
import CoreBusinessModules from './components/CoreBusinessModules';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-white">
      <Header />
      <Hero />
      <OperationalControl />
      <EmpoweringGrowth />
      <Testimonial />
      <BuiltForIndustries />
      <CoreBusinessModules />
      <CTABanner />
      <Footer />
    </div>
  );
}
