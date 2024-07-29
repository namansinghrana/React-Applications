import './App.css'
import ContactForm from './Components/ContactForm/ContactForm.jsx';
import ContactHeader from './Components/ContactHeader/ContactHeader.jsx';
import Navigation from './Components/Navigation/Navigation.jsx'

function App() {
  return( <div>
    <Navigation/>
    <main className='main_container'>
    <ContactHeader/>
    <ContactForm/>
    </main>
  </div>
  );
}

export default App;
