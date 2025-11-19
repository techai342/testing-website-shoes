import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShoeCard from "../components/ShoeCard";
import { supabase } from "../supabase/client"; // ensure this path exists

export default function CategoryPage() {
  const { categoryId } = useParams(); // make sure route param matches
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);

      if (!categoryId) return setLoading(false);

      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("category", categoryId);

      if (error) {
        console.error("Supabase Error:", error.message);
        setProducts([]);
      } else {
        setProducts(data || []);
      }

      setLoading(false);
    }

    load();
  }, [categoryId]);

  return (
    <div className="fade-in-up">
      <h2 className="text-3xl font-bold mb-4">
        {categoryId ? categoryId.replace("-", " ").toUpperCase() : "Category"}
      </h2>

      {loading ? (
        <p>Loading...</p>
      ) : products.length === 0 ? (
        <p className="text-bt-muted">No items in this category.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <ShoeCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
