/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Breadcrumb } from '@htmlplus/react';

const BreadcrumbDefault = () => {
  return (
    <div className="center">
      <Breadcrumb separator="/">
        <a href="#">HTMLPLUS</a>
        <a href="#">Core</a>
        <a href="#">UI Components</a>
        <span>Breadcrumb</span>
      </Breadcrumb>
    </div>
  );
};

const BreadcrumbDefaultExample = () => {
  return (
    <div className="ex-breadcrumb-default">
      <BreadcrumbDefault />
      <style>{`.ex-breadcrumb-default .center {  text-align: center;}.ex-breadcrumb-default plus-breadcrumb {  display: inline-block;  color: #707070;}.ex-breadcrumb-default plus-breadcrumb a {  color: inherit;  text-decoration: none;}.ex-breadcrumb-default plus-breadcrumb a:hover {  text-decoration: underline;}`}</style>
    </div>
  )
};

export default BreadcrumbDefaultExample;