import { Input } from "@/components/ui/input"
import { Field, FieldLabel } from "@/components/ui/field"

interface Props {
  id: string;
  type: string;
  placeholder: string;
  title: string;
}

export default function CustomInput({ id, type, placeholder, title }: Props){
  return (
    <Field>
      <FieldLabel htmlFor={id}>
        {title}
      </FieldLabel>
      <Input 
        id={id}
        type={type}
        placeholder={placeholder}
      />
    </Field>
  )
}