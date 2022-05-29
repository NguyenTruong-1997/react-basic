import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const randomColor = (currentColor: string) => {
  const colorArr = ['green', 'red', 'black', 'yellow', 'blue'];

  const curIndex = colorArr.indexOf(currentColor);
  let newIndex = curIndex;
  while (curIndex === newIndex) {
    newIndex = Math.trunc(Math.random() * colorArr.length )
  }
  return colorArr[newIndex];
}

export default function useMagicColor () {
  const [color, setColor] = useState<string>('transparent');
  const colorRef = useRef<string>('transparent')

  useEffect(() => {
    const colorInterval = setInterval(()=> {
      const newColor = randomColor(colorRef.current);

      setColor(newColor);
      colorRef.current = newColor;
    }, 1000);
    return (() => {
      clearInterval(colorInterval);
    })
  }, [])

  return color;
}
