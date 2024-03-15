import { useState } from 'react';

const useCopy = () => {
  const [copied, setCopied] = useState(false);

  const copyContent = (content: string) => {
    navigator.clipboard.writeText(content).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch((error) => {
      console.error('Lỗi copy:', error);
    });
  };

  return { copied, copyContent };
};

export default useCopy;
