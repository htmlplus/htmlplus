/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { AspectRatio, Grid } from '@htmlplus/react';

const AspectRatioMore = () => {
  return (
    <Grid>
      <Grid.Item xs="12" sm="6">
        <Grid>
          <Grid.Item xs="12">
            <AspectRatio value="3/2" className="ratio-one">
              <div className="box one">3/2</div>
            </AspectRatio>
          </Grid.Item>
          <Grid.Item xs="12">
            <AspectRatio value="16/9">
              <div className="box two">16/9</div>
            </AspectRatio>
          </Grid.Item>
        </Grid>
      </Grid.Item>
      <Grid.Item xs="12" sm="6">
        <Grid>
          <Grid.Item xs="6">
            <AspectRatio value="1">
              <div className="box three">1/1</div>
            </AspectRatio>
          </Grid.Item>
          <Grid.Item xs="6" alignSelf="end">
            <AspectRatio value="4/3">
              <div className="box four">4/3</div>
            </AspectRatio>
          </Grid.Item>
          <Grid.Item xs="12">
            <AspectRatio value="18/6">
              <div className="box five">18/6</div>
            </AspectRatio>
          </Grid.Item>
        </Grid>
      </Grid.Item>
    </Grid>
  );
};

const AspectRatioMoreExample = () => {
  return (
    <div className="ex-aspect-ratio-more">
      <AspectRatioMore />
      <style>{`.ex-aspect-ratio-more .box {  color: white;  padding: 0.75rem;  margin: 0.25rem;}.ex-aspect-ratio-more .ratio-one {  width: 40.625%;  float: right;}.ex-aspect-ratio-more .one {  background: #08dfc8;}.ex-aspect-ratio-more .two {  background: #ff5449;}.ex-aspect-ratio-more .three {  background: #5f9ee9;}.ex-aspect-ratio-more .four {  background: #ffc903;}.ex-aspect-ratio-more .five {  background: #9073c1;}`}</style>
    </div>
  )
};

export default AspectRatioMoreExample;