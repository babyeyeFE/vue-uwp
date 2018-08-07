import { createTest, destroyVM } from '../util';
import Dropdown from 'components/dropdown';

describe('Dropdown', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Dropdown, true);
    expect(vm.$el).to.exist;
  });
});

