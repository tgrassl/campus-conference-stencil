import { TestWindow } from '@stencil/core/testing';
import { CcButton } from './cc-button';

describe('cc-button', () => {
  it('should build', () => {
    expect(new CcButton()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLCcButtonElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [CcButton],
        html: '<cc-button></cc-button>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
