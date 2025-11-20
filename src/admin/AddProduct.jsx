import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";

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
  const [imagePreview, setImagePreview] = useState("");

  // Service role client - RLS bypass karega
  const supabaseUrl = "https://jwlpkgdgybihfubjztyw.supabase.co";
  const serviceKey = "YOUR_SERVICE_ROLE_KEY_HERE"; // ← YAHAN APNI SERVICE KEY DALO
  
  const supabaseAdmin = createClient(supabaseUrl, serviceKey);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prev => ({ ...prev, [name]: value }));
  };

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    }
  };

  const handleImageUpload = async (file) => {
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { data, error } = await supabaseAdmin.storage
        .from('product images')
        .upload(filePath, file);

      if (error) throw error;

      const { data: { publicUrl } } = supabaseAdmin.storage
        .from('product images')
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
      if (image) {
        imageUrl = await handleImageUpload(image);
      }

      // Service role client use karein - RLS bypass hoga
      const { data, error } = await supabaseAdmin
        .from('products')
        .insert([
          {
            name: product.name,
            price: Number(product.price),
            category: product.category,
            size: product.size,
            color: product.color,
            location: product.location,
            seller_number: product.seller_number,
            description: product.description,
            images: imageUrl ? [imageUrl] : [],
            created_at: new Date().toISOString()
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
      setImagePreview("");
      
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
            onChange={handleImageSelect}
            className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600"
          />
          {image && (
            <div className="mt-3">
              <p className="text-green-400 text-sm mb-2">Selected: {image.name}</p>
              {imagePreview && (
                <img src={imagePreview} alt="Preview" className="w-32 h-32 object-cover rounded border"/>
              )}
            </div>
          )}
        </div>

        {/* Other form fields same as before */}
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

        {/* ... rest of the form same as before ... */}

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
