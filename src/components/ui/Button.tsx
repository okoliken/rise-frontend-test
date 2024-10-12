import React, { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  isLoading = false,
  disabled,
  ...rest
}) => {
  const baseStyles = 'px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all';
  
  const variantStyles = {
    primary: 'bg-teal-1 text-white hover:bg-teal-800',
    secondary: 'bg-gray-500 text-rise-black hover:bg-gray-600 focus:ring-gray-400',
  };

  const disabledStyles = 'opacity-50 cursor-not-allowed';

  return (
    <button
      {...rest}
      className={`${baseStyles} ${variantStyles[variant]} ${disabled || isLoading ? disabledStyles : ''}`}
      disabled={disabled || isLoading}
      aria-busy={isLoading ? 'true' : 'false'}
      aria-disabled={disabled || isLoading}
    >
      {isLoading ? (
        <span role="status" className="animate-spin inline-block mr-2 h-4 w-4 border-2 border-t-2 border-t-transparent border-white rounded-full"></span>
      ) : null}
      {children}
    </button>
  );
};

export default Button;
