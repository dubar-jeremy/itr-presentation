import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Latout';
import ReactQuery from './pages/react-query/ReactQuery';
import Native from './pages/native/Native';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='react-query' element={<ReactQuery />} />
            <Route path='native' element={<Native />} />
          </Route>
        </Routes>
      </BrowserRouter>
      ,
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
}

export default App;
