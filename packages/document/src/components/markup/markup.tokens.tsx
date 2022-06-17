import { Alert, Browsers, Example, Examples, Usage } from '@app/components';

export const tokens = {
  Alert,
  Browsers,
  Example,
  Examples,
  Usage: (props = {}) => <Usage {...props} />,
  Playground: () => null,
  Api: () => null
};
