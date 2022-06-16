import { ContributorsProps } from './contributors.types';

export const Contributors = ({ contributors }: ContributorsProps) => {
  if (!contributors?.length) return null;
  return (
    <section className="contributors">
      <h5>Contributors</h5>
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
