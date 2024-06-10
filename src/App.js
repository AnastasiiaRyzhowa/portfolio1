import './App.css';
import NavigationBar from './components/NavigationBar';
import Header from './components/Header';
import AboutSection from './components/AboutSections';
import ProjectSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <NavigationBar />
      <Header />
      <AboutSection/>
      <ProjectSection/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}

export default App;
