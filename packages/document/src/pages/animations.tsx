import { Fragment } from 'react';
import glob from 'fast-glob';
import { capitalCase } from "change-case";

import { LayoutDefault } from '@app/layouts';
import { Toc } from '@app/containers';
import { Animation, Grid } from '@app/components';

// TODO
import '@htmlplus/core/animation/all.js';

const Animations = ({ categories }: any) => {
  return (
    <LayoutDefault>
      <h1>Animations</h1>
      {categories.map((category: any) => (
        <Fragment key={category.key}>
          <h2>
            <Toc.Item>
              {category.title}
            </Toc.Item>
          </h2>
          <Grid gutter="md">
            {category.items.map((item: any) => (
              <Grid.Item class="animation" key={`${category.key}:${item.key}`}>
                <Animation
                  name={item.key}
                  duration={2000}
                  onMouseEnter={(event) => {
                    (event.target as any)['play'] = true;
                  }}
                  onMouseLeave={(event) => {
                    (event.target as any)['play'] = false;
                  }}
                />
                <small>{item.title}</small>
              </Grid.Item>
            ))}
          </Grid>
        </Fragment>
      ))}
    </LayoutDefault>
  );
};

export default Animations;

export const getServerSideProps = async () => {
  const categories: any[] = [];

  const cwd = 'node_modules/@htmlplus/core/animation';

  const files = glob.sync('*/*.js', { cwd }).filter((file) => !file.endsWith('all.js'));

  for (const file of files) {
    const [directoryName, fileName] = file
      .split('.')
      .slice(0, -1)
      .join('.')
      .split('/')
      .filter((section) => !!section);

    if (!categories.some((category) => category.key == directoryName))
      categories.push({
        key: directoryName,
        title: capitalCase(directoryName),
        items: []
      });

    const category = categories.find((category) => category.key == directoryName);

    category.items.push({
      key: fileName,
      title: capitalCase(fileName),
    });
  }

  return {
    props: {
      categories
    }
  };
};