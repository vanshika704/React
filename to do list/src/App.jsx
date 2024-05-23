import 'bootstrap/dist/css/bootstrap.min.css';
import AppName from './components/appName';
import './App.css'
import './index.css'
import Input from './components/input';
import Text from './components/text';
function App() {
  return (
    <div className="todo-container text-center">
      <AppName/>
      <div className="container mt-4">
        <Input/>
       
      </div>
      <Text/>
    </div>
  );
}

export default App;
