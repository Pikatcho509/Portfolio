import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppFab from "./components/WhatsAppFab";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />

      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Skills />
        <Contact />
      </main>

      <Footer />

      <WhatsAppFab />
    </div>
  );
}

export default App;
