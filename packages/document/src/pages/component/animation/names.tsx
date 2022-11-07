import { Fragment } from 'react';

// TODO
import '@htmlplus/core/animation/names/all.js';
import { capitalCase } from 'change-case';
import glob from 'fast-glob';

import { Animation, Code, Grid } from '@app/components';
import { Toc } from '@app/containers';
import { LayoutDefault } from '@app/layouts';

const Animations = ({ categories }: any) => {
  return (
    <LayoutDefault>
      <h1>Animations</h1>
      <p>TODO</p>
      <h2>
        <Toc.Item level={2}>Usage</Toc.Item>
      </h2>
      <p>Chose one of the ways.</p>
      <p>1) If you need a transition from a category</p>
      <Code language="js">
        {[
          '/* Template */',
          "import '@htmlplus/core/animation/names/[category]/[name].js';",
          '',
          '/* For example */',
          "import '@htmlplus/core/animation/names/flippers/flip.js';"
        ].join('\n')}
      </Code>
      <br />
      <p>2) If you need a category</p>
      <Code language="js">
        {[
          '/* Template */',
          "import '@htmlplus/core/animation/names/[category]/all.js';",
          '',
          '/* For example */',
          "import '@htmlplus/core/animation/names/fading-entrance/all.js';"
        ].join('\n')}
      </Code>
      <br />
      <p>3) If you need all categories</p>
      <Code language="js">{["import '@htmlplus/core/animation/names/transition/all.js';"].join('\n')}</Code>
      <h2>
        <Toc.Item level={2}>Categories</Toc.Item>
      </h2>
      <p>
        Animations are based on those found in the popular{' '}
        <a href="https://animate.style" target="_blank">
          Animate.css
        </a>{' '}
        library.
      </p>
      {categories.map((category: any) => (
        <Fragment key={category.key}>
          <h3>
            <Toc.Item level={3}>{category.title}</Toc.Item>
          </h3>
          <Grid gutter="md">
            {category.items.map((item: any) => (
              <Grid.Item class="animation" key={`${category.key}:${item.key}`}>
                <Animation
                  name={item.key}
                  onMouseEnter={(event) => {
                    (event.target as any)['play'] = false;
                    requestAnimationFrame(() => {
                      (event.target as any)['play'] = true;
                    });
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

export const getStaticProps = async () => {
  const categories: any[] = [];

  const cwd = 'node_modules/@htmlplus/core/animation/names';

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
      title: capitalCase(fileName)
    });
  }

  return {
    props: {
      categories
    }
  };
};
