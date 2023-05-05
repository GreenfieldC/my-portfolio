import { Component } from '@angular/core';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
	linkedInLink: string = 'http://www.linkedin.com/in/christian-greenfield';
	xingLink: string = 'https://www.xing.com/profile/Christian_Greenfield';
	gitHubLink: string = 'https://github.com/GreenfieldC';
}
