import React, { useState } from "react";
import { supabase } from "../supabase/client";

export default function AddProduct() {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    size: "",
    color: "",
    location: "",
    seller_number: "",
    description: "",
  });
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = async (file) => {
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `products/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('product-images')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('product-images')
        .getPublicUrl(filePath);

      return publicUrl;
    } catch (error) {
      console.error('Error uploading image:', error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!product.name || !product.price || !product.category) {
      alert("Please fill all required fields.");
      return;
    }

    try {
      setUploading(true);
      
      let imageUrl = "";
      // Upload image if selected
      if (image) {
        imageUrl = await handleImageUpload(image);
      }

      // Insert product into database
      const { data, error } = await supabase
        .from('products')
        .insert([
          {
            ...product,
            price: Number(product.price),
            images: imageUrl ? [imageUrl] : [],
            timestamp: new Date().toISOString()
          }
        ])
        .select();

      if (error) throw error;

      alert("Product added successfully! ✅");
      
      // Reset form
      setProduct({
        name: "", price: "", category: "", size: "", color: "",
        location: "", seller_number: "", description: "",
      });
      setImage(null);
      
    } catch (error) {
      console.error('Error adding product:', error);
      alert(`Error adding product: ${error.message}`);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-gray-800 p-6 rounded-lg glass-morphism">
      <h2 className="text-2xl font-bold mb-4 text-white">Add New Product</h2>
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Image Upload */}
        <div>
          <label className="text-white block mb-2">Product Image</label>
          <input 
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600"
          />
          {image && (
            <p className="text-green-400 text-sm mt-2">
              Selected: {image.name}
            </p>
          )}
        </div>

        <div>
          <label className="text-white block mb-2">Product Name *</label>
          <input 
            type="text" 
            name="name" 
            value={product.name} 
            onChange={handleChange} 
            placeholder="Enter product name"
            className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="text-white block mb-2">Price (PKR) *</label>
          <input 
            type="number" 
            name="price" 
            value={product.price} 
            onChange={handleChange} 
            placeholder="Enter price"
            className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="text-white block mb-2">Category *</label>
          <select 
            name="category" 
            value={product.category} 
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none"
            required
          >
            <option value="">Select Category</option>
            <option value="school-shoes">School Shoes</option>
            <option value="joggers">Joggers</option>
            <option value="jordans">Jordans</option>
            <option value="sneakers">Sneakers</option>
            <option value="slippers">Slippers</option>
            <option value="casual">Casual</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-white block mb-2">Size</label>
            <input 
              type="text" 
              name="size" 
              value={product.size} 
              onChange={handleChange} 
              placeholder="e.g., 42, M, L"
              className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="text-white block mb-2">Color</label>
            <input 
              type="text" 
              name="color" 
              value={product.color} 
              onChange={handleChange} 
              placeholder="e.g., Black, White, Red"
              className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label className="text-white block mb-2">Location</label>
          <input 
            type="text" 
            name="location" 
            value={product.location} 
            onChange={handleChange} 
            placeholder="e.g., Lahore, Karachi"
            className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="text-white block mb-2">Seller Phone Number</label>
          <input 
            type="text" 
            name="seller_number" 
            value={product.seller_number} 
            onChange={handleChange} 
            placeholder="e.g., +923001234567"
            className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="text-white block mb-2">Description</label>
          <textarea 
            name="description" 
            value={product.description} 
            onChange={handleChange} 
            placeholder="Enter product description"
            rows="3"
            className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none"
          />
        </div>

        <button 
          type="submit" 
          disabled={uploading}
          className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded font-semibold mt-2 transition disabled:bg-gray-600"
        >
          {uploading ? "Adding Product..." : "Add Product"}
        </button>
      </form>
    </div>
  );
}
