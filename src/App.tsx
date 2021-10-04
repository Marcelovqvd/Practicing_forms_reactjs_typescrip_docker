import './App.css';
import { Form } from './components/Form';
import { TitleName } from './components/Header/index';

function App() {  
  return (
    <>
      <TitleName title="Título 1" description="teste1" onClick={() => alert("hello")} />
      <Form />
    </>
  )
}

export default App;
