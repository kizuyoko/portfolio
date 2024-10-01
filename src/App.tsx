import { SocialIcon } from 'react-social-icons'

function App() {
  return (
    <>
      <section className="flex items-center justify-center h-screen bg-custom-image bg-cover bg-center text-white p-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Welcome to Yoko's Portfolio!</h1>
          <p className="mt-2 text-lg">Feel free to explore the features.</p>
          <p className="mt-2 text-lg">If you have any feedback or issues, don't hesitate to contact me via 
            <a href='https://www.linkedin.com/in/kizuyoko' target='_blank' className='text-blue-300'> LinkedIn </a> 
           or  
            <a href='https://github.com/kizuyoko' target='_blank' className='text-blue-300'> GitHub</a>
          .</p>
        </div>
      </section>
      <section className="flex items-center justify-center p-4 pt-20 pb-20">
        <div className="flex flex-col md:flex-row w-full max-w-4xl">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <img src="/path/to/your/image.jpg" alt="Description" className="w-full h-auto" />
          </div>
          <div className="md:w-1/2 md:pl-4">
            <h2 className="text-2xl font-bold">Your Title Here</h2>
            <p className="mt-2 text-lg">Your descriptive text goes here. This is where you can provide more information.</p>
          </div>
        </div>
      </section>
      <footer className="flex justify-center space-x-4 mt-4 p-4 bg-slate-300">
        <SocialIcon url="https://www.linkedin.com/in/kizuyoko" network='linkedin' target="_blank" />
        <SocialIcon url="https://github.com/kizuyoko" network='github' target="_blank" />       
      </footer>
    </>
  )
}

export default App
