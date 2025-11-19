import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../supabase/client";

export default function EditProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    async function fetchProduct() {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("id", id)
        .single();
      if (error) console.error(error);
      else setProduct(data);
    }
    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prev => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!product) return;
    try {
      const { error } = await supabase
        .from("products")
        .update({ ...product, price: Number(product.price) })
        .eq("id", id);
      if (error) throw error;
      alert("Product updated successfully!");
    } catch (err) {
      console.error(err);
      alert("Error updating product!");
    }
  };

  if (!product) return <p>Loading product...</p>;

  return (
    <div className="fade-in-up max-w-2xl mx-auto bg-bt-dark p-6 rounded-lg shadow-3d-card">
      <h2 className="text-2xl font-bold mb-4 text-bt-red">Edit Product</h2>
      <form onSubmit={handleUpdate} className="flex flex-col gap-3">
        <input type="text" name="name" value={product.name} onChange={handleChange} placeholder="Product Name" className="p-2 rounded bg-gray-800 text-white"/>
        <input type="number" name="price" value={product.price} onChange={handleChange} placeholder="Price PKR" className="p-2 rounded bg-gray-800 text-white"/>
        <input type="text" name="category" value={product.category} onChange={handleChange} placeholder="Category" className="p-2 rounded bg-gray-800 text-white"/>
        <input type="text" name="size" value={product.size} onChange={handleChange} placeholder="Size" className="p-2 rounded bg-gray-800 text-white"/>
        <input type="text" name="color" value={product.color} onChange={handleChange} placeholder="Color" className="p-2 rounded bg-gray-800 text-white"/>
        <input type="text" name="location" value={product.location} onChange={handleChange} placeholder="Location" className="p-2 rounded bg-gray-800 text-white"/>
        <input type="text" name="sellerNumber" value={product.sellerNumber} onChange={handleChange} placeholder="Seller Phone" className="p-2 rounded bg-gray-800 text-white"/>
        <textarea name="description" value={product.description} onChange={handleChange} placeholder="Description" className="p-2 rounded bg-gray-800 text-white"/>
        <button type="submit" disabled={uploading} className="bg-bt-red text-black p-2 rounded font-semibold mt-2">
          {uploading ? "Updating..." : "Update Product"}
        </button>
      </form>
    </div>
  );
}
