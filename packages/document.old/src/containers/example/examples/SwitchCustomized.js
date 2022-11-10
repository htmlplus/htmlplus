/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Switch } from '@htmlplus/react';

const SwitchCustomized = () => {
  return (
    <div className="container">
      <Switch className="switch-1"></Switch>
      <Switch className="switch-2"></Switch>
    </div>
  );
};

const SwitchCustomizedExample = () => {
  return (
    <div className="ex-switch-customized">
      <SwitchCustomized />
      <style>{`.ex-switch-customized .container {  display: flex;  justify-content: center;  gap: 1rem;}.ex-switch-customized .switch-1[aria-checked='false']::part(root) {  background: #28292c;}.ex-switch-customized .switch-1[aria-checked='false']::part(handle) {  background: #28292c;  box-shadow: inset calc(1.25em * 0.35) calc(1.25em * -0.075) 0 0 #d8dbe0;}.ex-switch-customized .switch-1[aria-checked='true']::part(root) {  background: #d8dbe0;}.ex-switch-customized .switch-1[aria-checked='true']::part(handle) {  background: #28292c;  box-shadow: none;}.ex-switch-customized .switch-2 {  border-radius: 2px;  transition: 0.6s ease all;  font-family: Arial, Helvetica, sans-serif;}.ex-switch-customized .switch-2::part(root) {  background: #ebf7fc;}.ex-switch-customized .switch-2[aria-checked]:not([aria-checked='false'])::part(root) {  background: #fcebeb;}.ex-switch-customized .switch-2::part(handle) {  background: #03a9f4;  transform: translateY(-50%) rotateY(-000deg);  transform-origin: 0% 50%;}.ex-switch-customized .switch-2[aria-checked]:not([aria-checked='false'])::part(handle) {  background-color: #f44336;  transform: translateY(-50%) rotateY(-180deg);}.ex-switch-customized .switch-2::part(root) {  perspective: 70px;}.ex-switch-customized .switch-2::part(slot) {  opacity: 1;  color: #4e4e4e;  font-size: 0.625em;  font-weight: bold;  text-align: center;  line-height: 1;}.ex-switch-customized .switch-2::part(on)::before {  content: 'YES';  left: 0.25em;}.ex-switch-customized .switch-2::part(off)::before {  content: 'NO';  right: 0.25em;}`}</style>
    </div>
  )
};

export default SwitchCustomizedExample;