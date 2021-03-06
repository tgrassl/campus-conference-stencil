/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface CcButton {
    'loading': boolean;
    'primary': boolean;
    'value': string;
  }
  interface CcCard {}
  interface CcInput {
    'placeholder': string;
  }
  interface CcRating {
    'event': string;
  }
}

declare global {


  interface HTMLCcButtonElement extends Components.CcButton, HTMLStencilElement {}
  var HTMLCcButtonElement: {
    prototype: HTMLCcButtonElement;
    new (): HTMLCcButtonElement;
  };

  interface HTMLCcCardElement extends Components.CcCard, HTMLStencilElement {}
  var HTMLCcCardElement: {
    prototype: HTMLCcCardElement;
    new (): HTMLCcCardElement;
  };

  interface HTMLCcInputElement extends Components.CcInput, HTMLStencilElement {}
  var HTMLCcInputElement: {
    prototype: HTMLCcInputElement;
    new (): HTMLCcInputElement;
  };

  interface HTMLCcRatingElement extends Components.CcRating, HTMLStencilElement {}
  var HTMLCcRatingElement: {
    prototype: HTMLCcRatingElement;
    new (): HTMLCcRatingElement;
  };
  interface HTMLElementTagNameMap {
    'cc-button': HTMLCcButtonElement;
    'cc-card': HTMLCcCardElement;
    'cc-input': HTMLCcInputElement;
    'cc-rating': HTMLCcRatingElement;
  }
}

declare namespace LocalJSX {
  interface CcButton {
    'loading'?: boolean;
    'primary'?: boolean;
    'value'?: string;
  }
  interface CcCard {}
  interface CcInput {
    'placeholder'?: string;
  }
  interface CcRating {
    'event'?: string;
  }

  interface IntrinsicElements {
    'cc-button': CcButton;
    'cc-card': CcCard;
    'cc-input': CcInput;
    'cc-rating': CcRating;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'cc-button': LocalJSX.CcButton & JSXBase.HTMLAttributes<HTMLCcButtonElement>;
      'cc-card': LocalJSX.CcCard & JSXBase.HTMLAttributes<HTMLCcCardElement>;
      'cc-input': LocalJSX.CcInput & JSXBase.HTMLAttributes<HTMLCcInputElement>;
      'cc-rating': LocalJSX.CcRating & JSXBase.HTMLAttributes<HTMLCcRatingElement>;
    }
  }
}


