import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { FullLayout, Meta } from '@layouts';
import { PortfolioBanner } from '@sections/Portfolio/PortfolioBanner';
import { portfolios } from '@constants/portfolio';
import Carousel from '@components/Common/Carousel/Carousel';
import { Button } from '@components/Common';

const PortfolioDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const portfolio = useMemo(() => {
    return portfolios.find((item) => item.id.toString() === id);
  }, [id]);

  return (
    <FullLayout meta={<Meta />}>
      <div className="w-full">
        <div className="portfolio-page pb-0">
          <PortfolioBanner title="Portfolio Details" />
          <div className="section-container py-25">
            <div className="section-content">
              <Carousel loop>
                {(portfolio?.images || []).map((src, i) => {
                  return (
                    <div className="relative h-195 flex-[0_0_100%]" key={i}>
                      <Image src={src} fill className="object-cover" alt="alt" />
                    </div>
                  );
                })}
              </Carousel>
              <div className="flex flex-col lg:flex-row gap-20 mt-10">
                <div className="flex flex-col gap-4">
                  <h2 className="text-6 font-bold">{portfolio?.heading}</h2>
                  {(portfolio?.description || []).map((sentence, index) => (
                    <p key={index}>{sentence}</p>
                  ))}
                  {/* <div className="px-10 py-5">
                    <p className="quote-text">
                      Export tempor illum tamen malis malis eram quae irure esse labore quem cillum
                      quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat
                      irure amet legam anim culpa.{' '}
                    </p>
                    <div className="flex mt-6 gap-6">
                      <img
                        src="/assets/images/img-testimonial-1.jpg"
                        alt="Alison Baker"
                        className="w-20 h-20 rounded-full"
                      />
                      <div className="flex flex-col justify-center">
                        <h4 className="text-5 font-bold mb-1">Alison Baker</h4>
                        <p className="text-gray-300">Designer</p>
                      </div>
                    </div>
                  </div> */}
                </div>
                <div className="w-150 pr-10">
                  <h2 className="text-6 font-bold">Project information</h2>
                  <div className="flex flex-col gap-4 mt-6">
                    <div>
                      <p className="uppercase text-3 text-gray-100">Category</p>
                      <p>{portfolio?.category}</p>
                    </div>
                    <div>
                      <p className="uppercase text-3 text-gray-100">Client</p>
                      <p>{portfolio?.client}</p>
                    </div>
                    <div>
                      <p className="uppercase text-3 text-gray-100">Project Date</p>
                      <p>{portfolio?.date}</p>
                    </div>
                    <div>
                      <p className="uppercase text-3 text-gray-100">Project Url</p>
                      <a href={portfolio?.url} className="text-blue-100" target="_blank">
                        {portfolio?.url}
                      </a>
                    </div>
                    {/* <Button className="rounded-full">Visit Website</Button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FullLayout>
  );
};

export default PortfolioDetail;
