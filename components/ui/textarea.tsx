import { TextareaHTMLAttributes } from 'react'

export function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className="w-full border rounded p-2" />
} 