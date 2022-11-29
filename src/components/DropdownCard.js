import React from "react";
import { Link } from "react-router-dom";

function DropdownCard({ title, subtitle, to = "/", teller }) {
  return (
    <Link to={to} className="group/card cursor-pointer">
      <div className="mb-1">
        <h4 className="text-base xl:text-xl font-medium text-white group-hover/card:text-primary">
          {title}
        </h4>
        {teller && <p className="text-xs text-primary">{teller}</p>}
      </div>
      <p className="text-xs xl:text-sm font-normal">{subtitle}</p>
    </Link>
  );
}

export default DropdownCard;
