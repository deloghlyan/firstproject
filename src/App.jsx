import React from 'react'
import { Route, Routes } from 'react-router';
import Layout from './components/Layout';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Posts from './pages/Posts';

const App = () => {
  return (
    <div>
      <Layout>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/posts' element={<Posts />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/*' element={<NotFound />}/>
        </Routes>
      </Layout>
    </div>
  )
}

export default App