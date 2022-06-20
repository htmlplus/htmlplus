import { Alert, Browsers, Example, Examples } from '@app/components';
import { Usage } from '@app/containers';

export const tokens = {
  Alert,
  Browsers,
  Example,
  Examples,
  Usage: () => <Usage />,
  Playground: () => null,
  Api: () => null
};
