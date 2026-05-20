import React from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";

const FilterSelect = ({ 
  label, 
  value, 
  onChange, 
  options, 
  disabled = false 
}) => {
  return (
    <div className="flex flex-1 flex-col md:flex-none">
      <label className="text-[11px] font-extrabold uppercase tracking-widest text-secondary-premier mb-1">
        {label}
      </label>
      <div className="flex items-center relative w-full md:w-48">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          className="bg-primary-premier text-white w-full appearance-none rounded-lg border-none px-4 py-3 text-sm font-semibold transition-all focus:ring-2 disabled:opacity-50"
        >
          {options.map((opt, index) => (
            <option key={index} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute right-3">
          <RiArrowDropDownLine color="white" className="w-6 h-6" />
        </span>
      </div>
    </div>
  );
};

export default FilterSelect;