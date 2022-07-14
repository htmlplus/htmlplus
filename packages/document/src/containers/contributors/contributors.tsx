import { Toc } from '@app/containers';

import { ContributorsProps } from './contributors.types';

export const Contributors = ({ contributors }: ContributorsProps) => {
  if (!contributors?.length) return null;
  return (
    <>
      <h2>
        <Toc.Item level={1}>Contributors</Toc.Item>
      </h2>
      <ul className="contributors">
        {contributors.reverse().map((contributor) => (
          <li key={contributor}>
            <a rel="noopener" href={`https://github.com/${contributor}`} target="_blank">
              <img
                src={`https://github.com/${contributor}.png?size=90`}
                loading="lazy"
                width="32"
                height="32"
                title={`Contributor ${contributor}`}
              />
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};
