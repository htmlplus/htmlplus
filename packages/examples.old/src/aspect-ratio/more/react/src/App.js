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

export default AspectRatioMore;
