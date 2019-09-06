import React from 'react';
import useFetch from '../hooks/useFetch';
import data from '../data.json';

const Hero = () => {
  // Returning invalid data due to Content-Type being set to 'html/text'
  // Using mock data from the data.json file
  const hero = useFetch(`https://www.dermstore.com/ajax/challenge.php`);
  console.log(hero);

  return (
    <>
      <div
        style={{
          background: `url(${data.background})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          minHeight: '500px',
        }}
        className="container mx-auto text-center"
      >
        <div className="mx-auto pt-8" style={{ maxWidth: '500px' }}>
          <h1 className="text-5xl mb-6">{data.title}</h1>
          <p className="mb-3">{data.body}</p>
          <a
            href={data.button.href}
            className="px-6 py-3 inline-block bg-black text-white uppercase tracking-loose"
          >
            {data.button.text}
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
