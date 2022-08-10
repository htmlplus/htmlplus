import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';

import axios from 'axios';

import { Avatar } from '@app/components';
import { Toc } from '@app/containers';

export const Contributors = () => {
  const router = useRouter();

  const [contributors, setContributors] = useState<string[]>([]);

  // TODO
  const url = useMemo(() => {
    const base = 'https://api.github.com/repos/htmlplus/htmlplus/commits?path=';
    switch (router.route) {
      case '/[...content]':
        return `${base}packages/document/src/content/en/${(router.query?.content as string[])?.join('/')}.md`;
      case '/animations':
        return `${base}packages/document/src/pages/animations.tsx`;
      case '/[framework]/api/[component]':
        return `${base}packages/core/src/components/${router.query?.component}`;
      case '/[framework]/component/[component]':
        return `${base}packages/core/src/components/${router.query?.component}`;
    }
  }, [router.asPath, router.route]);

  useEffect(() => {
    if (!url) return;
    axios.get(url)
      .then((response) => {
        return response
          .data
          .map((commit: any) => commit.author?.login)
          .filter((contributor: string, index: number, contributors: string[]) => {
            return contributor && contributors.indexOf(contributor) === index
          })
      }).then(setContributors);
  }, [url])

  if (!contributors?.length) return null;

  return (
    <>
      <h2>
        <Toc.Item level={1}>Contributors</Toc.Item>
      </h2>
      <Avatar.Group hoverable stacked>
        {contributors.reverse().map((contributor) => (
          <Avatar key={contributor} shape="circle" size="sm">
            <img src={`https://github.com/${contributor}.png?size=90`} alt={`Contributor ${contributor}`} />
            <a rel="noopener" href={`https://github.com/${contributor}`} target="_blank"></a>
          </Avatar>
        ))}
      </Avatar.Group>
    </>
  );
};
