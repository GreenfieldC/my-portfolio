import { Component } from '@angular/core';

@Component({
	selector: 'app-my-skills',
	templateUrl: './my-skills.component.html',
	styleUrls: ['./my-skills.component.scss'],
})
export class MySkillsComponent {
	skills = [
		{
			title: 'JavaScript',
			img: 'javascript',
		},
		{
			title: 'Angular',
			img: 'angular',
		},
		{
			title: 'HTML/CSS',
			img: 'html-css',
		},

		{
			title: 'TypeScript',
			img: 'ts',
		},
		{
			title: 'SCRUM',
			img: 'scrum',
		},

		{
			title: 'Rest API',
			img: 'rest-api',
		},

		{
			title: 'Firebase',
			img: 'firebase',
		},

		{
			title: 'Git',
			img: 'git',
		},
	];
}
