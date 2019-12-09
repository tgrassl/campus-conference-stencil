import { Component, h } from '@stencil/core';

@Component({
    tag: 'cc-card',
    styleUrl: 'cc-card.scss',
    shadow: true,
})
export class CcCard {

    render() {
        return (
            <div class="card">
                <slot></slot>
            </div>
        );
    }
}
