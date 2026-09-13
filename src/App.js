import Footer from './interfaces/Footer';
import Header from './interfaces/Header';
import AboutSection from './interfaces/sections/AboutSection';
import ContactSection from './interfaces/sections/ContactSection';
import HeroSection from './interfaces/sections/HeroSection';
import ManifestoSection from './interfaces/sections/ManifestoSection';
import ServicesSection from './interfaces/sections/ServicesSection';
import WorkSection from './interfaces/sections/WorkSection';

const App = () => 
{
	return <>
		<Header />
		<HeroSection />
		<ManifestoSection />
		<WorkSection />
		<AboutSection />
		<ServicesSection />
		<ContactSection />
		<Footer />
	</>
}

export default App
