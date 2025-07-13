import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReduceState from './components/ReduceState'
import Test from './components/Test';
import { Routes, Route, Link } from 'react-router-dom';
function App() {

  return (
    <>
      <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link> {/* Link to the Home page */}
          </li>
          <li>
            <Link to="/test">Go to Test Page</Link> {/* Link to the Test Page */}
          </li>
        </ul>
      </nav>

      <Routes>
        {/* Define your routes */}
        <Route path="/" element={<ReduceState />} /> {/* Renders Home component for "/" */}
        <Route path="/test" element={<Test/>} /> {/* Renders TestPage component for "/test" */}
      </Routes>
    </div>
    </>
  )
}

export default App
