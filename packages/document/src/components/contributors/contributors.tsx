import { Text } from '@app/components';

import { ContributorsProps } from './contributors.types';

export const Contributors = ({ contributors }: ContributorsProps) => {
  if (!contributors || contributors.length === 0) return null;
  return (
    <section className="contributors">
      <Text size="5">Contributors</Text>
      <div>
        <ul>
          {contributors.reverse().map((contributor) => (
            <li key={contributor}>
              <a rel="noopener" href={`https://github.com/${contributor}`} target="_blank">
                <span className="img-wrapper">
                  <img
                    src={`https://github.com/${contributor}.png?size=90`}
                    loading="lazy"
                    width="32"
                    height="32"
                    title={`Contributor ${contributor}`}
                    // importance="low"
                  />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
