/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Switch } from '@htmlplus/react';

const Switch3D = () => {
  return (
    <div className="center">
      <Switch checked></Switch>
    </div>
  );
};

const Switch3DExample = () => {
  return (
    <div className="ex-switch-3D">
      <Switch3D />
      <style>{`.ex-switch-3D .center {  text-align: center;}.ex-switch-3D plus-switch {  --width: 10rem;  --height: 5rem;  width: calc(var(--width) * 1.25);  height: calc(var(--height) * 1.25);  overflow: visible;  perspective-origin: calc(50% + var(--width)) calc(50% - var(--width));  perspective: 32em;  border-radius: var(--height);}.ex-switch-3D plus-switch::part(root) {  width: calc(var(--width) * 1.25);  height: calc(var(--height) * 1.25);  background: transparent;  border: solid calc(0.125 * var(--height)) #f0f0f0;  box-shadow: 0.5rem 0.875rem 0 -0.25rem #e0e0e0,    0.625rem 0.625rem 0 -0.25rem #e0e0e0,    0.5rem 0.875rem 0.625rem -0.125rem rgb(191 191 191 / 75%),    inset 0.125rem -0.125rem 0.5rem rgb(245 245 245 / 50%),    inset 0.75rem 0.75rem #dfdfdf,    inset 0.75rem 0.75rem 0.75rem rgb(191 191 191 / 85%),    inset 0 1rem 0.75rem rgb(191 191 191 / 65%);  transform: rotatex(90deg) rotate(22.5deg) rotatey(22.5deg);  transform-style: preserve-3d;}.ex-switch-3D plus-switch::part(handle) {  width: var(--height);  height: var(--height);  background: radial-gradient(at 0 50%, #52a066, transparent 2.5rem) 0 50%/65%      50% no-repeat,    radial-gradient(at 50% 0%, #88d1a0 15%, #68b47d 35%, #66b47b, #77c28e 65%)      50%/200%;  transform: translate(var(--translate)) rotatey(-22.5deg) rotate(-22.5deg)    rotatex(-90deg) translatey(-75%) rotate(45deg);  filter: Grayscale(var(--grayscale));}.ex-switch-3D plus-switch[aria-checked='false'] {  --grayscale: 1;  --translate: calc(100% + var(--width) * -0.75);}.ex-switch-3D plus-switch[aria-checked='true'] {  --grayscale: 0;  --translate: calc(100% + var(--width) * -0.15);}`}</style>
    </div>
  )
};

export default Switch3DExample;