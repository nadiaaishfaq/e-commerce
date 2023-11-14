import React from "react";

export default function card({ title, price, description, image }) {
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };
  const truncatedDescription = truncateText(description, 100);

  return (
    <>
      <div class="flex flex-col justify-between w-96 h-[35vh]  rounded-xl bg-gray-200 bg-clip-border text-gray-700 shadow-md">
        <div>
          <div class=" flex justify-center items-center m-auto  overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
            <img alt="" src={image} class="h-48 w-48 " />
          </div>
          <div class="p-6">
            <div class="mb-2 flex items-center justify-between">
              <p class="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                {title}
              </p>
              <p class="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                {price} $
              </p>
            </div>
            <p class="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
              {truncatedDescription}
            </p>
          </div>
        </div>
        <div class="p-4">
          <button
            class="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <link
        rel="stylesheet"
        href="https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css"
      />{" "}
    </>
  );
}
