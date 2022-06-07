import { useMemo } from 'react';

import { ExampleProps } from './example.types';

export const Example = ({ value }: ExampleProps) => {

  // const example = useMemo(() => {
  //   return examples?.find((example) => example.key == value);
  // }, [examples, value]);

  if (!value) return <div>TODO</div>;

  return null

  // return (
  //   <div>
  //     {example.files.map((file: any) => (
  //       <div key={file.path}>
  //         <a href={`${value}/codesandbox`} target="_blank">
  //           codesandbox
  //         </a>
  //         <a href={`${value}/download`} target="_blank">
  //           download
  //         </a>
  //         {file.content}
  //       </div>
  //     ))}
  //   </div>
  // );
};
