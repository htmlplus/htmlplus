import { useMemo } from 'react';

import { ExampleProps } from './example.types';

export const Example = ({ value }: ExampleProps) => {

  // const example = useMemo(() => {
  //   return examples?.find((example) => example.key == value);
  // }, [examples, value]);

  if (!value) return <div>TODO</div>;

  console.log(111, value)

  return (
    <div>
      {value.map((tab) => (
        <div key={tab.path}>
          {/* <a href={`${value}/codesandbox`} target="_blank">
            codesandbox
          </a>
          <a href={`${value}/download`} target="_blank">
            download
          </a> */}
          {tab.content}
        </div>
      ))}
    </div>
  );
};
