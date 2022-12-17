import { Counter } from './components/Counter/Counter';
import { DOMProvider } from './lib/DOMProvider/DOMProvider';

function App() {
  return (
    <DOMProvider>
      <Counter />
    </DOMProvider>
  );
}

export default App;
