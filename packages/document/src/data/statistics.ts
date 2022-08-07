import { components, examples, frameworks, github } from '@app/data';

export const statistics = {
  // TODO
  dowanloads: 0,
  platforms: 0,
  themes: 0,

  ...github,
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
    return frameworks.filter((framework) => !framework.disabled).length;
  }
};
