import React, { useEffect, useState } from "react";
import { supabase } from "../supabase/client";
import { Link } from "react-router-dom";

export default function ProductsList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("timestamp", { ascending: false });
      if (error) throw error;
      setProducts(data || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure to delete this product?")) return;
    try {
      const { error } = await supabase.from("products").delete().eq("id", id);
      if (error) throw error;
      fetchProducts();
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  useEffect(() => { fetchProducts(); }, []);

  if (loading) return <p>Loading products...</p>;

  return (
    <div className="fade-in-up max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-bt-red">All Products</h2>
      <table className="w-full text-left border border-gray-700 rounded">
        <thead className="bg-gray-800">
          <tr>
            <th className="p-2">Name</th>
            <th className="p-2">Category</th>
            <th className="p-2">Price</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(p => (
            <tr key={p.id} className="border-b border-gray-700">
              <td className="p-2">{p.name}</td>
              <td className="p-2">{p.category}</td>
              <td className="p-2">PKR {p.price}</td>
              <td className="p-2 flex gap-2">
                <Link to={`/admin/edit/${p.id}`} className="px-2 py-1 bg-bt-red text-black rounded">Edit</Link>
                <button onClick={() => handleDelete(p.id)} className="px-2 py-1 bg-gray-700 text-white rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
