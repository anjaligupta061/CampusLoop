import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Marketplace from './pages/Marketplace'
import LostFound from './pages/LostFound'
import NeedBoard from './pages/NeedBoard'
import Messages from './pages/Messages'
import NotFound from './pages/NotFound'
import Profile from './pages/Profile'
import Login from './pages/Login'
import DashBoard from './pages/Dashboard'
import ResourceDetails from './pages/ResourceDetails'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path='/dashboard' element={<DashBoard />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/marketplace/:id" element={<ResourceDetails />} />
        <Route path="/lost-found" element={<LostFound />} />
        <Route path="/need-board" element={<NeedBoard />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App