import React from "react";
import { Link } from "react-router-dom";

const channels = [
  { img: "/images/channels/cultured-one.svg", className: "w-full lg:w-20" },
  { img: "/images/channels/toom.svg", className: "w-full lg:w-20" },
  { img: "/images/channels/drama.svg", className: "w-full lg:w-auto" },
  { img: "/images/channels/cultured-two.svg", className: "w-full lg:w-20" },
  { img: "/images/channels/film.svg", className: "w-full lg:w-auto" },
  { img: "/images/channels/irl.svg", className: "w-full lg:w-14" },
];

const ImgBox = ({ children }) => {
  return (
    <div className="w-[22px] lg:w-[34px] h-[22px] lg:h-[34px] flex items-center justify-center rounded bg-primary">
      {children}
    </div>
  );
};

const ChannelBox = ({ img, label, to = "/" }) => {
  return (
    <Link to={to} className="flex items-center space-x-2 lg:space-x-3 w-full">
      <ImgBox>{img}</ImgBox>
      <p className="text-xs lg:text-sm font-bold text-white">{label}</p>
    </Link>
  );
};

const ChannelsDropdownBody = () => {
  return (
    <div className="bg-blue-3 rounded-lg grid lg:grid-cols-[230px,1fr] lg:p-0 gap-6 lg:gap-0 py-4 lg:py-0">
      <div className="lg:py-7 px-5 lg:px-8 flex-col space-y-3 lg:space-y-5">
        <ChannelBox
          label="All Channels"
          img={<img src="images/channels.svg" className="w-[50%]" alt="" />}
        />
        <ChannelBox
          label="All Categories"
          img={<img src="images/all.svg" className="w-[50%]" alt="" />}
        />
      </div>
      <div className="py-4 lg:py-7 px-5 lg:px-8 border-t-1px lg:border-t-0 lg:border-l-1px border-primary">
        <p className="text-base font-bold mb-6 uppercase text-primary">
          Channels
        </p>

        <div className="grid grid-cols-2 gap-6 lg:gap-0 lg:flex flex-wrap items-center lg:-mx-3 lg:-my-3">
          {channels.map((item, i) => (
            <img
              src={item.img}
              key={i}
              alt="abc"
              className={`lg:mx-3 lg:my-3 ${item.className}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChannelsDropdownBody;