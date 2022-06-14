import { OptionProps } from "@blueprintjs/core";

type OptionsArrayField = {
  id: string
} & OptionProps

type TypeEnum = 'text' | 'number' | 'email' | 'color' | 'range' | 'tel' | 'search' | 'file' | 'password' | 'hidden' | 'url' | 'textarea' | 'select' | 'checkbox' | 'radio' | 'date' | 'time' | 'datetime' | ''

export type CreateFormTypeForm = {
  name: string;
  slug: string;
  type: TypeEnum;
  has_relation: boolean;
  options: OptionsArrayField[];
  domain_id: string;
  domain_label_field_id: string
  domain_value_field_id: string
}