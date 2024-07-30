"use client";
import { useState, useEffect } from "react";

const SPACE_ID = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const ACCESS_TOKEN = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

export default function Projects() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/master/entries?access_token=${ACCESS_TOKEN}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading)
    return (
      <p className="h-screen w-screen flex justify-center items-center text-lg font-semibold">
        Server is loading...
      </p>
    );
  if (!data) return <p>No profile data found on server...</p>;

  return (
    <div>
      {data.items.map((item, index) => {
        return (
          <section
            key={index}
            className="grid grid-cols-4 flex border-b-2 gap-2"
          >
            <h1 className="text-base font-semibold text-primary pl-5">
              {item.fields.title}
            </h1>
            <p className="text-sm">{item.fields.shortDescription}</p>
            <div>
              <a
                target="_blank"
                href={item.fields.viewDetails}
                className="flex justify-center"
              >
                Link
              </a>
            </div>
            <div className="text-desc font-thin text-sm">
              <h2>Last Update:</h2>
              <h2>{item.sys.updatedAt.slice(0, 10)}</h2>
            </div>
          </section>
        );
      })}
    </div>
  );
}
