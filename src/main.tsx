import ReactDOM from 'react-dom/client'
import './index.css'

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import MasterLayout from './shared/Layouts/MasterLayout.tsx'
import Landing from './components/Landing.tsx'
import Cases from './components/Cases.tsx'
import CaseDescription from './components/CaseDescription.tsx'
import DonationForm from './components/DonationForm.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router>
    <Routes>
      <Route path='/' element={<Navigate to={'/home'}></Navigate>}></Route>
      <Route path="/" element={<MasterLayout></MasterLayout>} >
        <Route path='home' element={<Landing></Landing>}></Route>
        <Route path='Cases' element={<Cases></Cases>}></Route>
        <Route path='Cases/:id' element={<CaseDescription></CaseDescription>}></Route>
        <Route path='Cases/:id/Donation' element={<DonationForm></DonationForm>}></Route>
      </Route>

    </Routes>
  </Router>
)
