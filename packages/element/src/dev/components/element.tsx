import { Attributes, Element, Property, Watch } from '@htmlplus/element';

@Element()
export class MyElement { 

  @Property({ })
  a: number 

  @Property({reflect: true})
  selfAlign: number = 9

  // @Property({reflect: true})
  // p1: string = 'init'
  
   toggle?: Function = () => console.log('TODO: can not use out of drawer');
 
   @Attributes()
   get attributes() {
     return { 
       'onClick': () => this.selfAlign++
     }
   } 

   @Watch(['selfAlign'])
   w(...a) {
    console.log(1, a)
   }

   render() {
    console.log('renderd in the component')
     return (
       <div><slot /> {this.selfAlign}</div>
     )
   }
}
