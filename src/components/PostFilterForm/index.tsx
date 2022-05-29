import { ChangeEvent, useRef, useState } from "react";


export interface  PostFilterFormProps {
  onSubmit: (value: string) => void;
}

export default function PostFilterForm ({ onSubmit }:  PostFilterFormProps) {
  const [searchTerm, setSerchTerm] = useState<string>('');
  const typingTimeoutRef = useRef<any>(null);

  const handleSearchTermChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSerchTerm(value);
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    };

    typingTimeoutRef.current = setTimeout(() => {
      onSubmit(value);
    }, 500);
  }
  return (
    <form>
      <input type="text" value={searchTerm} onChange={handleSearchTermChange}  />
    </form>
  );
}
