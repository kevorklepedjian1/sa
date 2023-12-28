import React from 'react';

function UserDetails({ name, status, image }) {
  return (
    <div className="flex items-center space-x-1">
      {/* Icon */}
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" data-slot="icon" className="h-3 text-white">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
      </svg>

      {/* User Avatar */}
      <img src={image} className="w-6 h-6 rounded-full" />

      {/* User Details */}
      <div className="p-1 text-white">
        {/* User Name */}
        <p className="text-xs">{name}</p>

        {/* User Status */}
        <p className="small opacity-60">{status}</p>
      </div>
    </div>
  );
}

export default UserDetails;
