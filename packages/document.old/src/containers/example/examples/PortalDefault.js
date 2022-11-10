/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Portal } from '@htmlplus/react';

const PortalDefault = () => {
  return (
    <>
      <div id="target"></div>
      <div id="source">
        <Portal target="#target">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </Portal>
      </div>
    </>
  );
};

const PortalDefaultExample = () => {
  return (
    <div className="ex-portal-default">
      <PortalDefault />
      <style>{`.ex-portal-default #target {  color: blue;}.ex-portal-default #source {  color: red;}`}</style>
    </div>
  )
};

export default PortalDefaultExample;