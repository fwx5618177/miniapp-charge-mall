import { Image as TaroImage, ImageProps } from '@tarojs/components';
import { useState } from 'react';
import { DEFAULT_THUMB } from '@/constants/images';
import './index.scss';

interface Props extends Omit<ImageProps, 'onError'> {
  fallback?: string;
  className?: string;
}

const Image: React.FC<Props> = ({ 
  src, 
  fallback = DEFAULT_THUMB,
  className = '',
  mode = 'aspectFill',
  ...props 
}) => {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    if (imgSrc !== fallback) {
      setImgSrc(fallback);
    }
  };

  return (
    <TaroImage
      src={imgSrc}
      className={`custom-image ${className}`}
      mode={mode}
      onError={handleError}
      {...props}
    />
  );
};

export default Image; 