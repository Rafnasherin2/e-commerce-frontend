import React from 'react';
import CheckCircleRounded from '@mui/icons-material/CheckCircleRounded';
import Rating from '@mui/material/Rating';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

function Reviews() {
  return (
    <>
      <div className='mt-10 sm:mt-12 lg:mt-16 px-4 sm:px-8 lg:px-20'>
       
        <div className='border-gray-300 pt-6 pb-4'>
          <div className='flex flex-col sm:flex-row justify-between items-center'>
            <h1 className='font-extrabold text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-center sm:text-left'>
              OUR HAPPY CUSTOMERS
            </h1>

            {/* Arrow icons aligned to the end of the border */}
            <div className='flex mt-4 sm:mt-0 space-x-4'>
              <ArrowBack className="w-6 sm:w-8 cursor-pointer hover:scale-110 transition" />
              <ArrowForward className="w-6 sm:w-8 cursor-pointer hover:scale-110 transition" />
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className='mt-6 sm:mt-10'>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
            {/* Review 1 */}
            <div className="bg-white rounded-2xl p-6 border border-gray-300 h-auto sm:h-[260px] flex flex-col justify-center">
              <div>
                <Rating value={5} />
              </div>
              <div className="flex items-center gap-2 mt-2">
                <p className="font-bold text-lg sm:text-xl md:text-2xl">Sarah M.</p>
                <CheckCircleRounded sx={{ color: 'green' }} />
              </div>
              <p className="mt-2 text-gray-600 text-sm sm:text-base">
                "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
              </p>
            </div>

            {/* Review 2 */}
            <div className="bg-white rounded-2xl p-6 border border-gray-300 h-auto sm:h-[260px] flex flex-col justify-center">
              <div>
                <Rating value={5} />
              </div>
              <div className="flex items-center gap-2 mt-2">
                <p className="font-bold text-lg sm:text-xl md:text-2xl">Alex K.</p>
                <CheckCircleRounded sx={{ color: 'green' }} />
              </div>
              <p className="mt-2 text-gray-600 text-sm sm:text-base">
                "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."
              </p>
            </div>

            {/* Review 3 */}
            <div className="bg-white rounded-2xl p-6 border border-gray-300 h-auto sm:h-[260px] flex flex-col justify-center">
              <div>
                <Rating value={5} />
              </div>
              <div className="flex items-center gap-2 mt-2">
                <p className="font-bold text-lg sm:text-xl md:text-2xl">James L.</p>
                <CheckCircleRounded sx={{ color: 'green' }} />
              </div>
              <p className="mt-2 text-gray-600 text-sm sm:text-base">
                "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reviews;
