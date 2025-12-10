import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import VoiceAI from './components/VoiceAI'
import Gallery from './components/Gallery'
import Configurator from './components/Configurator'
import TechStack from './components/TechStack'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <VoiceAI />
        <Gallery />
        <Configurator />
        <TechStack />
      </main>
      <Footer />
    </div>
  )
}

export default App
