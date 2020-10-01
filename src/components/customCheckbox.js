import React from 'react';

export default function CustomCheckbox(props) {
  const { title } = props;
  return (
    <div class='form-group selection-btns text-center'>
      <label className='d-flex justify-content-center align-items-center'>
        <input {...props} type='checkbox' className='mx-2' />
        <small>{title}</small>
      </label>
    </div>
  );
}
