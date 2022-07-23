import { Avatar } from '@app/components';
import { Toc } from '@app/containers';

import { ContributorsProps } from './contributors.types';

export const Contributors = ({ contributors }: ContributorsProps) => {
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
