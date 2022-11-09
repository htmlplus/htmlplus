/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Avatar } from '@htmlplus/react';

const AvatarSvg = () => {
  return (
    <div className="center">
      <Avatar>
        <svg viewBox="0 0 24 24" stroke="currentColor" fill="none">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <circle cx="12" cy="7" r="4"></circle>
          <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
        </svg>
      </Avatar>
    </div>
  );
};

const AvatarSvgExample = () => {
  return (
    <div className="ex-avatar-svg">
      <AvatarSvg />
      <style>{`.ex-avatar-svg .center {  text-align: center;}`}</style>
    </div>
  )
};

export default AvatarSvgExample;