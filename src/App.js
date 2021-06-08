import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Home  } from './pages/Home';
import { Features } from './pages/Features';
import { Gallery } from './pages/Gallery';
import { Contact } from  './pages/Contact';
import { Pricing } from './pages/Pricing';
 
const  App=()=> {
  return (
    // <Contact/>
    <Router>
      <Header/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/features" exact component={Features}/>
        <Route path="/gallery" exact component={Gallery}/>
        <Route path="/contact" exact component={Contact}/>
        <Route path="/pricing" exact component={Pricing}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
