import {EventEmitter, Injectable} from '@angular/core';
import {NavigationModel} from './navigation.model';

@Injectable()
export class NavigationService {
  onNavCollapseToggle = new EventEmitter<NavigationModel>();
  onNavCollapseToggled = new EventEmitter<NavigationModel>();

  constructor() {
  }
}
