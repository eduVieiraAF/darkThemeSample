import { Component } from '@angular/core';
import { ETheme } from '../../enums/etheme.enums';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public icon = ETheme.ICON_MOON

  public toggleTheme() {
    const theme = document.body.classList.toggle('dark-theme');

    if (theme) return this.icon = ETheme.ICON_SUN
    else  return this.icon = ETheme.ICON_MOON;

  }
}
