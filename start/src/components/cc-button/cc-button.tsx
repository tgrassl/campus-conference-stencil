import { Component, h } from '@stencil/core';

@Component({
    tag: 'cc-button',
    styleUrl: 'cc-button.scss',
    shadow: true,
})
export class CcButton {

    render() {
        return (
            <div>Button</div>
        );
    }
}
