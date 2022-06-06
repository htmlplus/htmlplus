import { useMemo } from 'react';

import { ExampleProps } from './example.types';

export const Example = ({ examples, value }: ExampleProps) => {
  return null
  // const example = useMemo(() => {
  //   return examples?.find((example) => example.key == value);
  // }, [examples, value]);

  // if (!example) return <div>TODO</div>;

  // return (
  //   <div>
  //     {example.files.map((file: any) => (
  //       <div key={file.path}>
  //         <a href={`${value}/codesandbox`} target="_blank">
  //           codesandbox
  //         </a>
  //         {file.content}
  //       </div>
  //     ))}
  //   </div>
  // );
};
