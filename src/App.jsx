import './App.css'
import FeatureSectionn from './components/FeatureSectionn'
import Navbar from './components/Navbar'
import HeroSection from './components/heroSection'
import Workflow from './components/Workflow'
import PracingSection from './components/PracingSection'
import Textimonial from './components/Textimonial'
import Footer from './components/Footer'
function App() {
  
  return (
    <>
      <Navbar/>
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection/>
      </div>
      <FeatureSectionn/>
      <Workflow/>
      <PracingSection/>
      <Textimonial/>
      <Footer/>
    </>
  )
}

export default App
