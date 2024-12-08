'use client'

import { useEffect, useState } from 'react';

const Age = () => {
    const [age, setAge] = useState(0);

    useEffect(() => {
      const birthDate = new Date(2002, 1, 8); // 8 Februari 2002 (bulan dimulai dari 0)
      const today = new Date();
      let calculatedAge = today.getFullYear() - birthDate.getFullYear();
      const isBirthdayPassed =
        today.getMonth() > birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());
  
      if (!isBirthdayPassed) {
        calculatedAge -= 1;
      }
      setAge(calculatedAge);
    }, []);
  
    return (
      <div>
        <p>{age}</p>
      </div>
    );
  }

export default Age