import { InputHTMLAttributes } from 'react'

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className="w-full border rounded p-2" />
} 