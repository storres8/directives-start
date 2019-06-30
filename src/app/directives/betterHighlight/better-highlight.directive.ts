import {
  Directive,
  Renderer2,
  OnInit,
  ElementRef,
  HostListener,
  Input
} from "@angular/core";

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
  @Input() defaultColor: string;
  @Input() highlightColor = "cyan";
  backgroundColor = "transparent";

  // setStyle is a method that can chaneg DOM elements for TS file. It taked 4 arguments:
  // the element you want to change, the css selector, and the value for the selector.
  ngOnInit() {}
  /*
    @HostListener takes a DOM event as an argument in the form of a string. It then executes a CB
    which is usually named the same as the event, but doesn't matter. The CB function can access
    the event data from the event as an argument as shown bellow.
    @HostListener allows for dynamic change based on user events.
  */
  @HostListener("mouseenter") mouseenter(eventData: Event) {
    this.renderer.setStyle(
      this.elRef.nativeElement,
      // elref just hold a reference to the element we place our selector in and the .nativeElement
      // method allows us to access the actual HTML element.
      "background-color",
      this.highlightColor
    );
  }

  @HostListener("mouseleave") mouseleave(eventData: Event) {
    this.renderer.setStyle(
      this.elRef.nativeElement,
      // elref just hold a reference to the element we place our selector in and the .nativeElement
      // method allows us to access the actual HTML element.
      "background-color",
      this.defaultColor
    );
  }
}
