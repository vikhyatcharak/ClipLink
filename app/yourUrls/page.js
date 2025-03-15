"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const YourUrls = () => {
  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/generate")
      .then((response) => response.json())
      .then((data) => {
        setUrls(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching URLs:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-amber-600 w-[65vw] mt-12 p-5 pt-8 pb-4 mx-auto rounded-3xl">
      <h1 className="text-white text-2xl font-bold mb-4">Your Shortened URLs</h1>
      
      {loading ? (
        <p className="text-white">Loading...</p>
      ) : urls.length === 0 ? (
        <p className="text-white">No URLs found.</p>
      ) : (
        <ul className="list-none max-h-[70vh] overflow-y-auto">
          {urls.map((item) => (
            <li key={item.shortUrl} className="mb-2 p-2 bg-yellow-300 rounded-lg overflow-y-hidden">
              <p className="text-black">
                <strong>Original:</strong> <a href={item.url} target="_blank" className="underline">{item.url}</a>
              </p>
              <p className="text-black">
                <strong>Shortened:</strong> <Link href={`${process.env.NEXT_PUBLIC_HOST}/${item.shortUrl}`} target="_blank" className="underline">
                  {item.shortUrl}
                </Link>
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default YourUrls
