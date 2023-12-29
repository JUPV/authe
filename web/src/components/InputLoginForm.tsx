import React, { useState } from 'react'
import Image from 'next/image'
import passon from '@/assets/icone/passon.svg'
import passoff from '@/assets/icone/passoff.svg'

interface LoginFormInputProps {
  label: string
  type: 'text' | 'password' | 'email'
  placeholder: string
  value: string
  onChange: (value: string) => void
  error: string | null
}

export default function LoginFormInput({
  label,
  type,
  placeholder,
  value,
  onChange,
  error,
}: LoginFormInputProps) {
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="text-sm font-semibold text-gray-600">{label}</div>
      <div className="relative">
        <input
          type={showPassword ? 'text' : type}
          key={label}
          className="inline-flex w-96 items-center justify-start gap-2.5 rounded border border-slate-200 bg-white px-3 py-4 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        {type === 'password' && (
          <span
            className="absolute right-3 top-1/2 -translate-y-1/2 transform cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? (
              <Image src={passon} alt="passon" />
            ) : (
              <Image src={passoff} alt="passoff" />
            )}
          </span>
        )}
      </div>
      {error && <p className="text-xs font-bold text-red-500">{error}</p>}
    </div>
  )
}
