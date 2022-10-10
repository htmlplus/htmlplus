import compiler from '../compiler/index.js';

const plugins = [];

export const vite = () => {
  const { start, next, finish } = compiler(...plugins);
  return {
    name: 'htmlplus',
    async buildStart() {
      await start();
    },
    async load(id) {
      if (!id.endsWith('.tsx')) return;
      const { isInvalid, script } = await next(id);
      if (isInvalid) return;
      return script!.replace('.scss', '.scss?inline');
    },
    async buildEnd() {
      await finish();
    }
  }
}