import React from 'react';
import * as Utils from '@app/utils';
import { InputProps } from './input.types';

export const Input: React.FC<InputProps> = (props) => {

  const { checked, label, name, placeholder, type = 'text', value, onChange } = props;

  const classes = Utils.classes(
    'input',
    { type },
  );

  return (
    <div className={classes}>
      {(() => {
        switch (type) {
          case 'textarea':
            return (
              <textarea
                name={name}
                onChange={onChange}
                placeholder={placeholder}
                rows={5}
                value={value}
              />
            );
          case 'radio':
            return (
              <label>
                <input
                  checked={checked}
                  name={name}
                  onChange={onChange}
                  placeholder={placeholder}
                  type={type}
                  value={value}
                />
                <div className="custom-radio" />
                {!!label && ` ${label}`}
              </label>
            );
          default:
            return (
              <input
                checked={checked}
                onChange={onChange}
                name={name}
                placeholder={placeholder}
                type={type}
                value={value}
              />
            );
        }
      })()}
    </div>
  );
};
