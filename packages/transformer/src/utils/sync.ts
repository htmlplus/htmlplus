import { getEventName } from './get-event-name';
import { isEvent } from './is-event';
import { updateAttribute } from './update-attribute';

export const sync = (node, prev) => (next = {}) => {

    const prevClass = (prev.class || '').split(' ');
    const nextClass = (next.class || '').split(' ');

    const newClass = (node.className || '')
        .split(' ')
        .filter((key) => !prevClass.includes(key) && !nextClass.includes(key))
        .concat(nextClass)
        .filter((key) => key)
        .join(' ');

    updateAttribute(node, 'class', newClass || undefined);

    if (prev.style || next.style)
        node.setAttribute('style', next.style || '');

    for (const key in prev) {

        const value = prev[key];

        if (!isEvent(key)) continue;

        const name = getEventName(key);

        node.removeEventListener(name, value);
    }

    for (const key in next) {

        const value = next[key];

        if (['class', 'style'].includes(key)) continue;

        if (isEvent(key)) {

            const name = getEventName(key);

            node.addEventListener(name, value);

            continue;
        }

        updateAttribute(node, key, value);
    }

    prev = { ...next };
};