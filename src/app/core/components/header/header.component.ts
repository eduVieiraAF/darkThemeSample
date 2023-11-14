import { Component } from '@angular/core';
import { ETheme } from '../../enums/etheme.enums';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public icon: String = ETheme.ICON_MOON
  public textTheme: String = ETheme.TEXT_DARK

  public toggleTheme() {
    const theme = document.body.classList.toggle('dark-theme');

    if (theme) return (
      this.icon = ETheme.ICON_SUN,
      this.textTheme = ETheme.TEXT_LIGHT
    )

    else return (
      this.icon = ETheme.ICON_MOON,
      this.textTheme = ETheme.TEXT_DARK
    )
  }
}
