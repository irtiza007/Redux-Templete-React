import React from 'react';

export default function CustomTextField(props) {
  const { title, message, error, errorType = 'error' } = props;
  return (
    <>
      <div className='form-group'>
        <div className='label-error-container'>
          <label>{title}</label>
        </div>
        <input className='form-control' {...props} />
        <div className='w-100 text-center'>
          {error && (
            <span
              className={
                errorType !== 'success' ? 'text-danger' : 'text-success'
              }
            >
              {message}
            </span>
          )}
        </div>
      </div>
    </>
  );
}
