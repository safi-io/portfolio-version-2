import React from 'react';

export default function Footer() {
  return (
    <section className='flex items-center justify-center text-white gap-1 fixed bottom-0 w-full z-10 bg-black bg-opacity-60 text-sm py-1'>
      <span className='text-sm'>
        &copy;2025 Safi | Made with 
      </span>
      <span className='text-red-500'>&hearts;</span>
    </section>
  );
}
