import { Code } from '@app/components';

import { ExampleProps } from './example.types';

export const Example = ({ value }: ExampleProps) => {

  if (!value) return <div>TODO</div>;

  const language = (tab: any) => {
    switch (tab.key) {
      case 'script':
        return 'jsx'
      case 'style':
        return 'css'
      case 'template':
        return 'html'
    }
  }

  console.log('TODO', value);

  return (
    <div>
      <a href={`${value}/codesandbox`} target="_blank">
        codesandbox
      </a>
      <a href={`${value}/download`} target="_blank">
        download
      </a>
      <a href={''} target="_blank">
        github
      </a>
      {value.map((tab) => (
        <div key={tab.key}>
          <Code language={language(tab)!}>
            {tab.content}
          </Code>
        </div>
      ))}
    </div>
  );
};
