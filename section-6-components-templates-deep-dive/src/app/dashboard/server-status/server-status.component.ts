import { Component, DestroyRef, effect, inject, OnInit, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit {
  currentStatus = signal<'online' | 'offline' | 'unknown'>('online');

  private destroyRef = inject(DestroyRef);

  constructor() {
    effect(() => {
      console.log(this.currentStatus());
    })
  }

  ngOnInit(): void {
    // console.log('ON INIT')
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const interval = setInterval(() => {
      const rnd = Math.random();
      if (rnd < 0.5) {
        this.currentStatus.set('online')
      } else if (rnd < 0.9) {
        this.currentStatus.set('offline')
      } else {
        this.currentStatus.set('unknown')
      }
    }, 5000);

    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    })
  }

  // ngOnDestroy(): void {
  //   clearInterval(this.interval);
  // }
}
