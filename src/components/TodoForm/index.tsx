import { ChangeEvent, FormEvent, useState } from "react";

export interface TodoFormProps {
  inpValue: (value: string) => void;
}

export default function TodoForm({inpValue}: TodoFormProps) {
  const [value, setValue] = useState<string>('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    inpValue(value);
    setValue('');
  }

  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleValueChange} />
    </form>
  );
}
