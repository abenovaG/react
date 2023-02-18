import './App.css';
import Header from './components/Header/Header'
import Button from "./components/Button/Button";
import Text from "./components/Text/Text";
import Footer from "./components/Footer/Footer";
import Info from "./components/Info/Info";

function App() {
  return (
    <div className="App">
        <Header />
        <Text />
        <Info />
        <Button title={'Click to read more'}/>
        <Button title={'Follow'}/>
        <Footer />
    </div>
  );
}

export default App;
