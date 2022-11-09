/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Breadcrumb } from '@htmlplus/react';

const BreadcrumbSeparator = () => {
  return (
    <div className="center">
      <Breadcrumb separator="-">
        <a href="#">First</a>
        <a href="#">Second</a>
        <a href="#">Third</a>
        <a href="#">Fourth</a>
        <a href="#">Fifth</a>
      </Breadcrumb>
    </div>
  );
};

const BreadcrumbSeparatorExample = () => {
  return (
    <div className="ex-breadcrumb-separator">
      <BreadcrumbSeparator />
      <style>{`.ex-breadcrumb-separator .center {  text-align: center;}.ex-breadcrumb-separator plus-breadcrumb {  display: inline-block;  color: #707070;}.ex-breadcrumb-separator plus-breadcrumb a {  color: inherit;  text-decoration: none;}.ex-breadcrumb-separator plus-breadcrumb a:hover {  text-decoration: underline;}`}</style>
    </div>
  )
};

export default BreadcrumbSeparatorExample;