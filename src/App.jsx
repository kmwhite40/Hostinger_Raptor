import { Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import ServiceDetail from '@/pages/services/ServiceDetail';
import Solutions from '@/pages/Solutions';
import WhoWeServe from '@/pages/WhoWeServe';
import WhyChooseUs from '@/pages/WhyChooseUs';
import Certifications from '@/pages/Certifications';
import Careers from '@/pages/Careers';
import Contact from '@/pages/Contact';
import Schedule from '@/pages/Schedule';
import Blog from '@/pages/Blog';
import Legal from '@/pages/Legal';
import Stub from '@/pages/Stub';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/who-we-serve" element={<WhoWeServe />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/why-choose-us" element={<WhyChooseUs />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/insights" element={<Blog />} />
        <Route path="/privacy-policy" element={<Legal doc="privacy" />} />
        <Route path="/terms-of-service" element={<Legal doc="terms" />} />
        <Route path="*" element={<Stub title="Page not found" />} />
      </Route>
    </Routes>
  );
}
