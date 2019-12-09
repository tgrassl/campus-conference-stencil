import { Component, h, State, Watch, Prop } from '@stencil/core';
import 'boxicons';
import { getFile } from '../../utils/utils';

export interface Rating {
    value: number;
    emoji: string;
}

@Component({
    tag: 'cc-rating',
    styleUrl: 'cc-rating.scss',
    shadow: true,
})
export class CcRating {
    @Prop() event: string;

    @State() selectedRating: Rating;
    @State() hasSubmitted: boolean;
    @State() isLoading: boolean;

    @Watch('selectedRating')
    selectedRatingChanged(newValue: boolean, oldValue: boolean) {
        console.log('selectedRating old value =>', oldValue)
        console.log('selectedRating changed to =>', newValue);
    }
    
    private ratings: Rating[] = [];

    componentWillLoad() {
        return getFile('ratings.json').then( (response) => {
            this.ratings = response;
        });
    }

    private renderEmojis() {
        return <div class="row col-xs-8">
            {this.ratings.map((rating: Rating) => 
                <div class="col-xs-2" onClick={() => this.setRating(rating)}>
                    <box-icon class="rating__icon" size="md" color={this.selectedRating == rating ? '#c2e211' : '#ffffff'} name={rating.emoji}></box-icon>
                </div>
            )}
        </div>
    }

    private submitRating() {
        this.isLoading = true;
        setTimeout(() => {
            this.isLoading = false;
            this.hasSubmitted = true;
        }, 1000);
    }

    private setRating(rating) {
        this.selectedRating = rating;
    }

    private getPlaceholder() {
        return this.selectedRating.value > 3 ? 'Was hat dir am meisten gefallen?' : 'Was können wir verbessern?'
    }

    private renderForm() {
        return this.selectedRating ? (
            <form class="rating__form">
                <div class="row center-xs">
                    <cc-input class="rating__input col-xs-12" placeholder={this.getPlaceholder()}></cc-input> 
                </div> 
                <div class="row end-xs">
                    <div class="col-xs-4">
                        <cc-button loading={this.isLoading} primary value="Abschicken" onClick={() => this.submitRating()}></cc-button>
                    </div>
                </div>
            </form>
        ): null;
    }

    private renderThanks() {
        return (
            <div class="rating__thanks">
                <div class="row center-xs">
                    <div class="col-xs-12">
                        <h3>Vielen Dank!</h3>
                    </div>
                    <div class="col-xs-12">
                        <box-icon name="check-circle" size="lg" color="#ffffff"></box-icon>
                    </div>
                </div>
            </div>
        )
    }

    private renderRating() {
        return (
            <div>
                <div class="rating__headlines">
                    <h3>Wie hat dir {this.event} gefallen?</h3>
                    <h4>Hilf uns {this.event} mit deinem Feedback zu verbessern!</h4>
                </div>
                {this.renderEmojis()}
                {this.renderForm()}  
            </div>
        );
    }

    render() {
        return (
            <cc-card class="rating">
                {this.hasSubmitted ? this.renderThanks() : this.renderRating()}
            </cc-card>
        );
    }
}
