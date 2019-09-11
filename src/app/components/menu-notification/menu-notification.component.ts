import {Component, ElementRef, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {MenuNotificationModel} from './menu-notification.model';

@Component({
  selector: 'app-menu-notification',
  templateUrl: './menu-notification.component.html',
  styleUrls: ['./menu-notification.component.scss']
})
export class MenuNotificationComponent {
  isOpen = false;
  @Input() noticeList: Array<MenuNotificationModel> = [];
  @Output() delete = new EventEmitter();

  constructor(private elementRef: ElementRef) {
  }

  @HostListener('document:click', ['$event', '$event.target'])
  onClick(event: MouseEvent, targetElement: HTMLElement) {
    if (!targetElement) {
      return;
    }

    const clickedInside = this.elementRef.nativeElement.contains(
      targetElement
    );
    if (!clickedInside) {
      this.isOpen = false;
    }
  }

  toggleNotice() {
    this.isOpen = !this.isOpen;
  }

  onDelete(event, notice: MenuNotificationModel) {
    event.stopPropagation();
    this.delete.emit(notice);
  }
}
