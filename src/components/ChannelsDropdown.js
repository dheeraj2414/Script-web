import React from "react";
import ChannelsDropdownBody from "./ChannelsDropdownBody";
import NavDropdown from "./NavDropdown";

function ChannelsDropdown() {
  return (
    <NavDropdown
      componentWrapperClassName="w-[600px]"
      Component={ChannelsDropdownBody}
      title="Channels"
      showDropdown={true}
      childrenClassName="pt-4"
    >
      <ChannelsDropdownBody />
    </NavDropdown>
  );
}

export default ChannelsDropdown;