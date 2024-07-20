import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Page1 from './pages/Page1';

function App() {
  return (
    <>
      <ChakraProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Page1 />} />
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </Router>
      </ChakraProvider>
    </>
  );
}

export default App;
