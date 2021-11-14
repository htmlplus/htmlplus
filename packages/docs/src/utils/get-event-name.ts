import * as Constants from '@app/constants';
import * as Utils from '@app/utils';

export const getEventName = (framework, input) => {    
    return `on${Constants.PLATFORM_EVENT_PREFIX}${Utils.toCapitalCase(input)}`;
}