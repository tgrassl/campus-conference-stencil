import { TestWindow } from '@stencil/core/testing';
import { CcRating } from './cc-rating';

describe('cc-rating', () => {
  it('should build', () => {
    expect(new CcRating()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLCcRatingElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [CcRating],
        html: '<cc-rating></cc-rating>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
