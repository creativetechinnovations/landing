import React, { ComponentProps, FC } from 'react';
import classnames from 'classnames';

type InputProps = {
  label?: string;
  className?;
} & ComponentProps<'input'>;

export const Input: FC<InputProps> = ({
  className,
  color = 'yellow',
  name,
  label,
  placeholder,
  required = false,
  ...restProps
}) => {
  return (
    <div className="flex flex-col w-full box-content">
      {label && (
        <span className="text-white text-md mb-2">
          {label} {required ? '*' : ''}
        </span>
      )}
      <input
        className={classnames(
          'h-[40px] px-4 w-full text-white placeholder-white transition-all duration-75 bg-white border-2 border-black rounded-md rounded-r-none',
          className
        )}
        name={name}
        placeholder={placeholder}
        {...restProps}
      />
    </div>
  );
};
