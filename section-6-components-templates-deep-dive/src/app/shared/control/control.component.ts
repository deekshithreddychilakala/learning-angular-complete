import { AfterContentInit, afterNextRender, afterRender, Component, contentChild, ContentChild, ElementRef, HostBinding, HostListener, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': "onClick()"
  }
})
export class ControlComponent {
  // @HostBinding('class') className = 'control';
  label = input.required<string>();
  private el = inject(ElementRef)

  // @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;
  private control = contentChild.required<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  constructor() {
    // afterRender(() => console.log('after render'))
    // afterNextRender(() => console.log('after next render'))
  }

  // @HostListener('click')
  onClick() {
    console.log('clicked');
    console.log(this.el);
    console.log(this.control());
  }
}

