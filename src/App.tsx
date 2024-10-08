import Header from './componenmts/Header'
import Footer from './componenmts/Fotter'
import ProjectList from './componenmts/ProjectList'
import ProjectListTitle from './componenmts/ProjectListTitle'

function App() {
  return (
    <>
      <Header />
      <main>
        <ProjectListTitle />
        <ProjectList />
      </main>
      <Footer />
    </>
  )
}

export default App
