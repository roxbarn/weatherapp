import React from 'react';
import Button from '../atoms/Button';
import FormInput from '../molecules/FormInput';

const ComplaintForm = props => {
  return (
    <div>
      <form>
        <FormInput type="text" name="name" label="Name" />
        <FormInput type="text" name="email" label="Email Address" />
        <FormInput type="textarea" name="message" label="Message" />
        <Button>Submit</Button>
      </form>
    </div>
  );
};

export default ComplaintForm;

