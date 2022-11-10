/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { components, examples, frameworks } from '@app/data';

export const statistics = {
  platforms: 'TODO',
  themes: 'TODO',
  forks: 2,
  stars: 22,
  watchers: 22,
  dowanloads: 6772,
  downloadsLastWeek: 941,
  downloadsLastMonth: 1517,
  get components(): number {
    return this.componentsPerFramework * this.frameworks;
  },
  get componentsPerFramework(): number {
    return components.length;
  },
  get examples(): number {
    return this.examplesPerFramework * this.frameworks;
  },
  get examplesPerFramework(): number {
    return examples.filter((example) => example.category == 'preview').length;
  },
  get frameworks(): number {
    return frameworks.length;
  }
};