import { Alert, Browsers, Example, Examples } from '@app/components';
import { Api, Usage } from '@app/containers';

export const tokens = {
  Alert,
  Api,
  Browsers,
  Example,
  Examples,
  Usage: () => <Usage />,
  Playground: () => null,
  // TODO
  h1: (props: any) => (
    <h1>
      <a id="TODO" aria-hidden="true" href="#TODO">
        <div>#</div>
      </a>
      {props.children}
    </h1>
  )
};
