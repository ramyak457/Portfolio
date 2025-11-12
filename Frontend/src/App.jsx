import Navbar  from "./components/Navbar"
import Home  from "./components/Home"
import About  from "./components/About"
import Projects  from "./components/Projects"
import Skills  from "./components/Skills"
import Contacts  from "./components/Contacts"

function App() {
  

  return (
      <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
          <Navbar />
          <Home />
          <About />
          <Projects />
          <Skills />
          <Contacts />
      </div>
  )
}

export default App