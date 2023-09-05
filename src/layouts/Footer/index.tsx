import Link from 'next/link';
import React from 'react';
import { Input, Button } from '@components/Common';

export const Footer = () => {
  return (
    <section className="footer bg-yellow section-container my-0">
      <div className="mt-32 mb-20">
        <div className="inline-flex pl-24">
          <Link href="/" passHref className="text-sm text-primary">
            <div className="flex">
              <img className="w-12" src="/assets/icons/logo.svg" alt="WeDu" />
              <div className="ml-2">
                <h5 className="text-xl font-bold">WeDu</h5>
                <span className="whitespace-nowrap">Communicate. Collaborate. Create.</span>
              </div>
            </div>
          </Link>
        </div>
        <div className="section-content mt-10">
          <div className="flex justify-between gap-x-10">
            <div>
              <h4 className="text-2xl font-semibold mb-10">Contact</h4>
              <div className="flex gap-x-10">
                <div className="flex flex-col gap-y-10">
                  <p>500 Terry Francine Street<br/> San Francisco, CA 94158</p>
                  <p>General Inquiries:<br/>123-456-7890</p>
                </div>
                <div className="flex flex-col gap-y-10">
                  <p>Sales:<br/>info@mysite.com</p>
                  <p>Customer Care:<br/>info@mysite.com</p>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-2xl font-semibold mb-10">Quick Links</h4>
              <div className="flex flex-col gap-y-6">
                <a className="underline">Terms & Conditions</a>
                <a className="underline">Privacy Policy</a>
              </div>
            </div>
            <div>
              <h4 className="text-2xl font-semibold mb-10">Follow</h4>
              <div className="flex flex-col gap-y-6">
                <p>Sign up to get the latest news on our product.</p>
                <div>
                  <p>Email *</p>
                  <div className="flex mt-2">
                    <Input className="rounded-r-none border-r-0"/>
                    <Button className="rounded-l-none px-6">Subscribe</Button>
                  </div>
                  
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="flex flex-col justify-end gap-y-6">
                <a className="text-xl font-semibold">Linkedin</a>
                <a className="text-xl font-semibold">YouTube</a>
                <a className="text-xl font-semibold">Facebook</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
