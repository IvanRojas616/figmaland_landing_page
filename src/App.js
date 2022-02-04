import ContactForm from './components/ContactForm';
import Features from './components/Features';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className='flex-initial flex-col justify-center items-center h-screen w-full'> 
      <Header/>
      <Features/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}

export default App;
