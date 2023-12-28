import React from 'react';
import UserDetails from './UserDetails';
import Message from './Message';
import ImageGallery from './ImageGallery';

// Import images
import img from '../images/avatar.jpg';
import img1 from '../images/dog-image-1.jpg';
import img2 from '../images/dog-image-2.jpg';
import img3 from '../images/dog-image-3.jpg';

function Phone() {
  return (
    <div className="flex justify-center py-14 j">
      <div className="bg-gray-50 w-60 rounded-3xl shadow-xl l border-white" >
        <div className="k w-full h-16 rounded-t-2xl rounded-b-md block">
          <UserDetails name="Samuel Green" status="Available to Walk" image={img} />
        </div>
        <div className="flex flex-col space-y-2 p-2">
          <Message text="That sounds great. I’d be happy with that." />
          <Message text="Could you send over some pictures of your dog, please?" />
        </div>
        <ImageGallery images={[img1, img2, img3]} />
        
        <div className="flex justify-end">
          <div className="flex flex-col space-y-2 p-2">
            <Message text="That sounds great. I’d be happy with that." />
            <Message text="Can you make it?" />
          </div>
        </div>
        <Message text="She looks so happy! The time we discussed works. How long shall I take her out for?" />
        <div className="v p-2 pl-2 w-40 flex justify-between text-white items-center rounded-xl rounded-bl-none ">
          <div className="flex space-x-2 justify-start ">
            <span className="w-3 h-3 border border-white rounded-full opacity-50"></span>
            <p className="small">30 minute walk</p>
          </div>
          <div className="font-bold text-sm mr-2">$29</div>
        </div>
        <div className="v p-2 pl-2 w-40 flex justify-between text-white items-center rounded-xl rounded-bl-none mt-3 ">
          <div className="flex space-x-2 justify-start ">
            <span className="w-3 h-3 border border-white rounded-full opacity-50"></span>
            <p className="small">1 hour walk</p>
          </div>
          <div className="font-bold text-sm r-2l-10">$49</div>
        </div>
        <div className="pt-2">
          <div className="small text-left flex justify-between items-center h-8 rounded-full w-full text-gray-400 p-1 shadow-md ">
            <p className="pl-4">Type a message…</p>
            <div className="w-6 h-6 po rounded-full text-white flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" data-slot="icon" className="w-6 h-3">
                <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Phone;