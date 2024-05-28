import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1999-03-19T00:00:01');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  // {
  // //   key: 'countries',
  // //   label: 'Countries visited',
  // //   value: 53,
  // //   link:
  // //     'https://www.google.com/maps,
  // // },
  {
    key: 'location',
    label: 'Current city',
    value: 'Singapore, SG',
  },
  {
    key: 'language',
    label: 'Language',
    value: 'English, Mandarin, Cantonese',
  },
];

export default data;
