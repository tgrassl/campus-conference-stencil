import { TestWindow } from '@stencil/core/testing';
import { CcCard } from './cc-card';

describe('cc-card', () => {
  it('should build', () => {
    expect(new CcCard()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLCcCardElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [CcCard],
        html: '<cc-card></cc-card>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
