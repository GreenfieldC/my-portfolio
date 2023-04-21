import { Component } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
	openSideMenu: boolean = false;
	selectedLanguage: string = 'en';

	closeSideMenu() {
		setTimeout(() => {
			this.openSideMenu = false;
		}, 0);
	}
}
