import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../supabase/client";

export default function ProductsList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('timestamp', { ascending: false });

      if (error) throw error;
      setProducts(data || []);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure to delete this product?")) return;
    
    try {
      const { error } = await supabase
        .from('products')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      alert("Product deleted successfully!");
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
      alert("Error deleting product!");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <p className="text-white text-center">Loading products...</p>;

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-white">All Products ({products.length})</h2>
      
      {products.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-400 text-lg">No products found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <div key={product.id} className="bg-gray-800 rounded-lg p-4 glass-morphism">
              {/* Product Image */}
              {product.images && product.images.length > 0 ? (
                <img 
                  src={product.images[0]} 
                  alt={product.name}
                  className="w-full h-48 object-cover rounded mb-3"
                />
              ) : (
                <div className="w-full h-48 bg-gray-700 rounded mb-3 flex items-center justify-center">
                  <span className="text-gray-400">No Image</span>
                </div>
              )}
              
              <h3 className="text-white font-bold text-lg mb-2">{product.name}</h3>
              <p className="text-gray-300 mb-1">Category: {product.category}</p>
              <p className="text-green-400 font-bold mb-1">PKR {product.price}</p>
              <p className="text-gray-400 text-sm mb-3">{product.description}</p>
              
              <div className="flex gap-2">
                <Link 
                  to={`/admin/edit/${product.id}`}
                  className="flex-1 bg-blue-500 text-white text-center py-2 rounded hover:bg-blue-600 transition"
                >
                  Edit
                </Link>
                <button 
                  onClick={() => handleDelete(product.id)}
                  className="flex-1 bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
