import * as React from "react";
const TeamCard = ({ fullName, occupation, photo, about }) => {
  return (
    <div className="w-full bg-blue-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center group hover:bg-blueTheme transform transition duration-150 hover:scale-105">
      <div className="mb-8">
        <img
          className="object-center object-cover rounded-full h-36 w-36"
          src={photo}
          alt="photo"
        />
      </div>
      <div className="text-center">
        <p className="text-xl text-gray-300 font-semibold group-hover:font-bold mb-2 group-hover:text-white">
          {fullName}
        </p>
        <p className="text-base text-gray-400 font-normal mb-5 group-hover:text-white">
          {occupation}
        </p>
        <p className="text-xs text-gray-200  text-justify hidden group-hover:block">
          {about}
        </p>
      </div>
    </div>
  );
};

export default TeamCard;
