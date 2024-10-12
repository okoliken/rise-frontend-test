import React, { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  isLoading?: boolean;
  className?:string
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  isLoading = false,
  disabled,
  className,
  ...rest
}) => {
  const baseStyles = 'px-[0.625rem] py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all';
  
  const variantStyles = {
    primary: 'bg-teal-1 text-white hover:bg-teal-800 focus:ring-rise-teal-1',
    secondary: 'bg-rise-teal-3 text-rise-black hover:bg-teal-700/70 focus:ring-rise-teal-3',
  };

  const disabledStyles = 'opacity-50 cursor-not-allowed';

  return (
    <button
      {...rest}
      className={`${baseStyles} ${className} ${variantStyles[variant]} ${disabled || isLoading ? disabledStyles : ''}`}
      disabled={disabled || isLoading}
      aria-busy={isLoading ? 'true' : 'false'}
      aria-disabled={disabled || isLoading}
    >
      {isLoading ? (
        <span role="status" className="animate-spin inline-block mr-2 h-12 border-2 border-t-2 border-t-transparent border-white rounded-full"></span>
      ) : null}
      {children}
    </button>
  );
};

