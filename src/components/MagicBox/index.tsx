import useMagicColor from 'shared/hooks/useMagicColor';

import './MagicBox.scss'

export interface  MagicBoxProps {
}

export default function MagicBox (props:  MagicBoxProps) {
  const color = useMagicColor();
  return (
    <div className='magic-box' style={{backgroundColor: color}}>
      
    </div>
  );
}
