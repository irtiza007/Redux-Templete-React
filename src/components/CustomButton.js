import React from 'react';

export default function CustomButton({
  title,
  type = 'button',
  loading = false,
  disabled = false,
  onClick = () => {},
}) {
  return (
    <>
      <div className='form-group'>
        <button
          type={type}
          className='btn btn-primary btn-block'
          onClick={onClick}
          disabled={disabled || loading}
        >
          {loading ? (
            <div className='spinner-border text-light' role='status'>
              <span className='sr-only'>Loading...</span>
            </div>
          ) : (
            title
          )}
        </button>
      </div>
    </>
  );
}
