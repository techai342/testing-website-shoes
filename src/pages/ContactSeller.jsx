import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "../supabase/client";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    let active = true;

    async function load() {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("id", id)
        .single();

      if (!active) return;

      if (error) {
        console.error("Supabase Error:", error.message);
        setProduct(null);
      } else {
        setProduct(data);
      }
    }

    load();

    return () => {
      active = false;
    };
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="fade-in-up grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* LEFT: Image */}
      <div>
        <div className="rounded-lg overflow-hidden">
          {product.image_url ? (
            <img
              src={product.image_url}
              alt={product.name}
              className="w-full h-96 object-cover"
            />
          ) : (
            <div className="w-full h-96 bg-gray-800 flex items-center justify-center">
              No image
            </div>
          )}
        </div>
      </div>

      {/* RIGHT: Details */}
      <div>
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>

        <p className="text-2xl font-semibold text-bt-red mb-4">
          PKR {product.price}
        </p>

        <p className="mb-4 text-bt-muted">{product.description}</p>

        <div className="mb-4">
          <strong>Size:</strong> {product.size || "N/A"} <br />
          <strong>Color:</strong> {product.color || "N/A"} <br />
          <strong>Location:</strong> {product.location || "N/A"} <br />
          <strong>Seller:</strong>{" "}
          <a
            href={`tel:${product.seller_number}`}
            className="text-bt-red"
          >
            {product.seller_number || "N/A"}
          </a>
        </div>

        <div className="flex gap-3">
          <a
            className="inline-block px-5 py-3 bg-bt-red rounded-md text-black font-semibold"
            href={`https://wa.me/${product.seller_number}`}
          >
            Message on WhatsApp
          </a>

          <Link
            to="/"
            className="inline-block px-5 py-3 border border-gray-700 rounded-md"
          >
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}
