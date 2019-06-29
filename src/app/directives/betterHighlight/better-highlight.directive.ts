import { Directive, Renderer2, OnInit, ElementRef } from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]"
})
export class BetterHighlightDirective implements OnInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  /*
    - A directive class has access to DOM elements through injection and that is what
      is being done when we set elRef with a type of ElementRef. Injection is basically
      an easier way to get access to some other classes w/o having to instantiate them
      outselves.
    - Injection occurs as an argument in our constructor function and angular will get these
      new instances for us whenever we create a new directive instance.
    - Using the private method is a shortcut for setting properites with the same name.
    - You should use the Renderer for any DOM manipulations, and there are a ton of methods
      that can be used, just reference the angualr docs.
    - Renderer works by implementing callback functions to execute change.
  */

  // setStyle is a method that can chaneg DOM elements for TS file. It taked 4 arguments:
  // the element you want to change, the css selector, and the value for the selector.
  ngOnInit() {
    this.renderer.setStyle(
      this.elRef.nativeElement,
      // elref just hold a reference to the element we place our selector in and the .nativeElement
      // method allows us to access the actual HTML element.
      "background-color",
      "cyan"
    );
  }
}
