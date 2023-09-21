import React from 'react';

import { Input, TextArea, Button } from '@components/Common';
import { EmailIcon, MessageIcon, PhoneIcon, UserIcon } from '@components/Common/icons';

export const ContactSection = () => {
  return (
    <div className="section-container bg-white py-25">
      <div className="section-content flex flex-col justify-center items-center">
        <h3 className="text-6 text-center max-w-150 leading-8">
          Compellingly implement distinctive outsourcing and 24/365 customer service energistically.
        </h3>
        <div className="flex justify-center w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-195 w-full mt-10">
            <div className="flex flex-col gap-5">
              <Input placeholder="First Name" icon={<UserIcon size={15} />} />
              <Input placeholder="Email Address" icon={<EmailIcon size={15} />} />
              <Input placeholder="Phone" icon={<PhoneIcon size={15} />} />
            </div>
            <div>
              <TextArea placeholder="Write Message" icon={<MessageIcon size={15} />} />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center mt-8">
          <Button>Send Message</Button>
        </div>
      </div>
    </div>
  );
};
