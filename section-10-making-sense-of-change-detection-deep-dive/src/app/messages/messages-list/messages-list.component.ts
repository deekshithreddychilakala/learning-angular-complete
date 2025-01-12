import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject } from '@angular/core';
import { MessagesService } from '../messages.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-messages-list',
  standalone: true,
  imports: [],
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessagesListComponent {
  // messages: string[] = [];
  private messagesService = inject(MessagesService);
  messages = this.messagesService.allMessages;

  // private cdref = inject(ChangeDetectorRef);
  // private destroyRef = inject(DestroyRef);

  // get messages() {
  //   return this.messagesService.allMessages
  // };

  get debugOutput() {
    console.log('[MessagesList] "debugOutput" binding re-evaluated.');
    return 'MessagesList Component Debug Output';
  }

  // ngOnInit(): void {
  //   const subscription = this.messagesService.messages$.subscribe({
  //     next: (messages: string[]) => {
  //       this.messages = messages;
  //       this.cdref.markForCheck();
  //     }
  //   });
  //   this.destroyRef.onDestroy(() => {
  //     subscription.unsubscribe();
  //   })
  // }

}
