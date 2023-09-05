import React, { ComponentProps, FC } from 'react';
import classnames from 'classnames';

type TextAreaProps = {
  label?: string;
  className?;
} & ComponentProps<'textarea'>;

export const TextArea: FC<TextAreaProps> = ({
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
      <textarea
        className={classnames(
          'h-20 px-4 w-full text-white placeholder-white transition-all duration-75 bg-transparent border-b border-white hover:border-b-[3px]',
          className
        )}
        name={name}
        placeholder={placeholder}
        rows={3}
        {...restProps}
      />
    </div>
  );
};
