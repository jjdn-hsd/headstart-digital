import React from 'react';

interface FormFieldProps {
  label: string;
  name: string;
  type: string;
  value: string;
  error?: string;
  required?: boolean;
  optional?: boolean;
  placeholder?: string;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type,
  value,
  error,
  required,
  optional,
  placeholder,
  className = '',
  onChange,
}) => {
  const id = `field-${name}`;
  const isTextarea = type === 'textarea';
  const InputComponent = isTextarea ? 'textarea' : 'input';

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-neutral-700 mb-1">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
        {optional && <span className="text-neutral-400 text-sm ml-2">(Optional)</span>}
      </label>
      
      <InputComponent
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        aria-required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`
          w-full px-4 py-2 rounded-md border
          ${error ? 'border-red-500' : 'border-neutral-300'}
          focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent
          ${className}
        `}
      />
      
      {error && (
        <p id={`${id}-error`} className="mt-1 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};