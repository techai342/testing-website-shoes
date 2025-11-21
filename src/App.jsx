import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Categories from './pages/Categories'
import CategoryPage from './pages/CategoryPage'
import ProductDetails from './pages/ProductDetails'
import ContactSeller from './pages/ContactSeller'
import Login from './pages/Login'
import AdminDashboard from './admin/AdminDashboard'
import AddProduct from './admin/AddProduct'
import EditProduct from './admin/EditProduct'
import ProductsList from './admin/ProductsList'
import Footer from './components/Footer'
import ThemeManager from './components/ThemeManager'

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <ThemeManager />
          <Navbar />
          <main className="min-h-screen">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/categories/:categoryId" element={<CategoryPage />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/contact/:id" element={<ContactSeller />} />
              <Route path="/login" element={<Login />} />
              
              {/* Admin Routes */}
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/add-product" element={<AddProduct />} />
              <Route path="/admin/products" element={<ProductsList />} />
              <Route path="/admin/edit/:id" element={<EditProduct />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App
