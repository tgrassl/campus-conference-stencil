import { Component, h, Prop } from '@stencil/core';

@Component({
    tag: 'cc-button',
    styleUrl: 'cc-button.scss',
    shadow: true,
})
export class CcButton {

    @Prop() primary: boolean; 
    @Prop() loading: boolean;  
    @Prop() value: string = 'Abschicken';  

    renderSpinner() {
        return <box-icon 
            class="button__loader"
            name="loader-alt"
            animation="spin"
            flip="vertical"
            color={this.primary ? '#254d6f' : '#c2e211'}>   
        </box-icon>
    }

    render() {
        return (
            <div class={'button ' + (this.primary ? 'button--primary' : 'button--secondary')}>
                {this.loading ? this.renderSpinner() : null} {this.value}
            </div>
        );
    }
}
