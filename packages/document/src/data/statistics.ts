import { components, examples, frameworks } from '@app/data';

export const statistics = {
  dowanloads: 0,
  forks: 0,
  platforms: 0,
  stars: 0,
  themes: 0,
  get components() {
    return this.componentsPerFramework * this.frameworks;
  },
  get componentsPerFramework() {
    return components.length;
  },
  get examples() {
    return this.examplesPerFramework * this.frameworks;
  },
  get examplesPerFramework() {
    return examples.filter((example) => example.category == 'preview').length;
  },
  get frameworks() {
    return frameworks.filter((framework) => !framework.disabled).length;
  }
};
