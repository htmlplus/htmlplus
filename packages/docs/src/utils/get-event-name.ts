import * as Constants from '@app/constants';
import * as Case from 'case';

export const getEventName = (framework, input) => {

    const name = input.replace(Constants.PLATFORM_PREFIX, '');

    if (framework === 'react') return 'on' + Case.pascal(name);

    if (framework === 'vue') return '@' + Case.kebab(name);

    return 'on' + Case.pascal(input);
}