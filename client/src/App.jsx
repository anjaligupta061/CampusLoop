import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Marketplace from './pages/Marketplace'
import LostFound from './pages/LostFound'
import NeedBoard from './pages/NeedBoard'
import Messages from './pages/Messages'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/lost-found" element={<LostFound />} />
        <Route path="/need-board" element={<NeedBoard />} />
        <Route path="/messages" element={<Messages />} />
      </Route>
    </Routes>
  )
}

export default App