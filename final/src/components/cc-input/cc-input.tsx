import { Component, h, Prop } from '@stencil/core';

@Component({
    tag: 'cc-input',
    styleUrl: 'cc-input.scss',
    shadow: true
})
export class CcInput {

    @Prop() placeholder: string;

    render() {
        return (
            <input type="text" class="textinput" name="text" placeholder={this.placeholder}></input>
        );
    }
}
