import { createTest, destroyVM } from '../util';
import Icon from 'components/icon';

describe('Icon', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Icon, true);
    expect(vm.$el).to.exist;
  });
});

