import { Attributes, Element } from '@htmlplus/element';

@Element()
export class MyElement { 
  
   toggle?: Function = () => console.log('TODO: can not use out of drawer');
 
   @Attributes()
   get attributes() {
     return { 
       'onClick': this.toggle
     }
   } 

   render() {
     return (
       <slot />
     )
   }
}
