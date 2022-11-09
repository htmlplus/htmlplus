/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Breadcrumb } from '@htmlplus/react';

const BreadcrumbLimitation = () => {
  return (
    <>
      <div className="container">
        <Breadcrumb separator="/" max={4} offset={0}>
          <a href="#">Item 1</a>
          <a href="#">Item 2</a>
          <a href="#">Item 3</a>
          <a href="#">Item 4</a>
          <a href="#">Item 5</a>
          <a href="#">Item 6</a>
          <a href="#">Item 7</a>
          <a href="#">Item 8</a>
        </Breadcrumb>
      </div>
      <div className="container">
        <Breadcrumb separator="/" max={4} offset={2}>
          <a href="#">Item 1</a>
          <a href="#">Item 2</a>
          <a href="#">Item 3</a>
          <a href="#">Item 4</a>
          <a href="#">Item 5</a>
          <a href="#">Item 6</a>
          <a href="#">Item 7</a>
          <a href="#">Item 8</a>
        </Breadcrumb>
      </div>
      <div className="container">
        <Breadcrumb separator="/" max={4} offset={-1}>
          <a href="#">Item 1</a>
          <a href="#">Item 2</a>
          <a href="#">Item 3</a>
          <a href="#">Item 4</a>
          <a href="#">Item 5</a>
          <a href="#">Item 6</a>
          <a href="#">Item 7</a>
          <a href="#">Item 8</a>
        </Breadcrumb>
      </div>
    </>
  );
};

const BreadcrumbLimitationExample = () => {
  return (
    <div className="ex-breadcrumb-limitation">
      <BreadcrumbLimitation />
      <style>{`.ex-breadcrumb-limitation .container {  text-align: center;  margin: 0.75em;}.ex-breadcrumb-limitation plus-breadcrumb {  display: inline-block;  color: #707070;}.ex-breadcrumb-limitation plus-breadcrumb a {  color: inherit;  text-decoration: none;}.ex-breadcrumb-limitation plus-breadcrumb a:hover {  text-decoration: underline;}`}</style>
    </div>
  )
};

export default BreadcrumbLimitationExample;