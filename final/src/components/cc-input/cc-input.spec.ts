import { TestWindow } from '@stencil/core/testing';
import { CcInput } from './cc-input';

describe('cc-input', () => {
  it('should build', () => {
    expect(new CcInput()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLCcInputElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [CcInput],
        html: '<cc-input></cc-input>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
