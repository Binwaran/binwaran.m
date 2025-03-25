import * as React from "react"
import { Check, ChevronDown } from "lucide-react"

const SelectContext = React.createContext()

export const Select = ({ children, value, onValueChange }) => {
  const [open, setOpen] = React.useState(false)

  return (
    <SelectContext.Provider value={{ open, setOpen, value, onValueChange }}>
      <div className="relative">{children}</div>
    </SelectContext.Provider>
  )
}

export const SelectTrigger = ({ children }) => {
  const { open, setOpen } = React.useContext(SelectContext)
  return (
    <button
      className="w-full h-10 px-3 py-2 border rounded-md bg-white text-sm flex justify-between items-center"
      onClick={() => setOpen(!open)}
    >
      {children}
      <ChevronDown className="w-4 h-4 ml-2" />
    </button>
  )
}

export const SelectValue = ({ placeholder }) => {
  const { value } = React.useContext(SelectContext)
  return (
    <span className={`text-sm ${value ? "text-black" : "text-gray-500"}`}>
      {value || placeholder}
    </span>
  )
}

export const SelectContent = ({ children }) => {
  const { open } = React.useContext(SelectContext)
  if (!open) return null
  return (
    <div className="absolute z-10 mt-2 w-full border bg-white rounded-md shadow">
      {children}
    </div>
  )
}

export const SelectItem = ({ children, value }) => {
  const { setOpen, onValueChange } = React.useContext(SelectContext)

  const handleSelect = () => {
    onValueChange(value)
    setOpen(false)
  }

  return (
    <div
      className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center justify-between text-sm"
      onClick={handleSelect}
    >
      {children}
      <Check className="w-4 h-4 text-green-600" />
    </div>
  )
}
