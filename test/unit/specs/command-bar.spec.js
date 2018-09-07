import { createTest, destroyVM } from '../util';
import CommandBar from 'components/command-bar';

describe('CommandBar', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(CommandBar, true);
    expect(vm.$el).to.exist;
  });
});

