import { Input } from "@/components/ui/input"
import { Field, FieldLabel } from "@/components/ui/field"
import { ChangeEvent } from "react";

interface Props {
  id: string;
  type: string;
  placeholder: string;
  title: string;
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function CustomInput({ id, type, placeholder, title, value, handleChange }: Props){
  return (
    <Field>
      <FieldLabel htmlFor={id}>
        {title}
      </FieldLabel>
      <Input 
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </Field>
  )
}