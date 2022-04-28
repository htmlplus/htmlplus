
import {Element } from '@htmlplus/element'

@Element()
export class MyText {
    render() {
        return <div>

            <my-another-component>
            <slot/>
            </my-another-component>
        </div>
    }
}