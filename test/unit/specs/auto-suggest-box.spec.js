import { createTest, destroyVM } from '../util';
import AutoSuggestBox from 'components/auto-suggest-box';

describe('AutoSuggestBox', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(AutoSuggestBox, true);
    expect(vm.$el).to.exist;
  });
});

