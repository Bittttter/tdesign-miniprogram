/**
 * 该文件为由脚本 `npm run test:demo` 自动生成，如需修改，执行脚本命令即可。请勿手写直接修改，否则会被覆盖
 */

import simulate from 'miniprogram-simulate';
import path from 'path';

const mapper = ['base', 'close', 'cover', 'display', 'theme'];

describe('Toast', () => {
  mapper.forEach((demoName) => {
    it(`Toast ${demoName} demo works fine`, () => {
      const id = load(path.resolve(__dirname, `../../toast/_example/${demoName}/index`), demoName);
      const container = simulate.render(id);
      container.attach(document.createElement('parent-wrapper'));
      expect(container.toJSON()).toMatchSnapshot();
    });
  });
});
