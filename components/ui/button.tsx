import { ButtonHTMLAttributes } from 'react'

export function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button {...props} className={`bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors ${props.className}`} />
} 