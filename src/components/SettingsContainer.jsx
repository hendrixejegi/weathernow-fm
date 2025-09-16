import React from "react";

import gear from "../assets/images/icon-units.svg";
import arrow from "../assets/images/icon-dropdown.svg";
import check from "../assets/images/icon-checkmark.svg";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const SettingsContainer = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="dropdown-trigger">
        <img src={gear} width={14} alt="" aria-hidden="true" />
        <span>Units</span>
        <img src={arrow} width={9} height={14} alt="" aria-hidden="true" />
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="dropdown-content"
        align="end"
        sideOffset={10}
      >
        <DropdownMenuLabel className="dropdown-label">
          Metrics Menu
        </DropdownMenuLabel>
        <DropdownMenuItem className="dropdown-menu-item">
          <span>Switch to Imperial</span>
          <img src={check} width={14} height={17} alt="" aria-hidden="true" />
        </DropdownMenuItem>

        {/* Temperature group */}

        <DropdownMenuGroup>
          <div className="dropdown-group-label">Temperature</div>
          <DropdownMenuItem className="dropdown-menu-item">
            <span>Celsius &#40;&#176;C&#41;</span>
            <img src={check} width={14} height={17} alt="" aria-hidden="true" />
          </DropdownMenuItem>
          <DropdownMenuItem className="dropdown-menu-item">
            <span>Fahrenheit &#40;&#176;F&#41;</span>
            <img src={check} width={14} height={17} alt="" aria-hidden="true" />
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator className="bg-neutral-600" />

        {/* Wind Speed group */}

        <DropdownMenuGroup>
          <div className="dropdown-group-label">Wind Speed</div>
          <DropdownMenuItem className="dropdown-menu-item">
            <span>km/h</span>
            <img src={check} width={14} height={17} alt="" aria-hidden="true" />
          </DropdownMenuItem>
          <DropdownMenuItem className="dropdown-menu-item">
            <span>mph</span>
            <img src={check} width={14} height={17} alt="" aria-hidden="true" />
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator className="bg-neutral-600" />

        {/* Precipitation group */}

        <DropdownMenuGroup>
          <div className="dropdown-group-label">Precipitation</div>
          <DropdownMenuItem className="dropdown-menu-item">
            <span>Millimeters &#40;mm&#41;</span>
            <img src={check} width={14} height={17} alt="" aria-hidden="true" />
          </DropdownMenuItem>
          <DropdownMenuItem className="dropdown-menu-item">
            <span>Inches &#40;in&#41;</span>
            <img src={check} width={14} height={17} alt="" aria-hidden="true" />
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SettingsContainer;
