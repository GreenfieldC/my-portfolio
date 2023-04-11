import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'christiangreenfield';

	skills = [
		{
			title: 'HTML/CSS',
			img: '',
		},
		{
			title: 'JavaScript',
			img: '',
		},
		{
			title: 'Rest API',
			img: '',
		},

		{
			title: 'Angular',
			img: '',
		},
		{
			title: 'TypeScript',
			img: '',
		},
		{
			title: 'Firebase',
			img: '',
		},
		{
			title: 'Material Design',
			img: '',
		},
		{
			title: 'Git',
			img: '',
		},
		{
			title: 'SCRUM',
			img: '',
		},
	];

	constructor(private modalService: NgbModal) {}

	public open(modal: any): void {
		this.modalService.open(modal);
	}
}
