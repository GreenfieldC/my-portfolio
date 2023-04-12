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
			title: 'SCRUM',
			img: 'scrum',
		},
		{
			title: 'Design Thinking',
			img: 'design-thinking',
		},
		{
			title: 'Rest API',
			img: 'rest-api',
		},

		{
			title: 'TypeScript',
			img: 'ts',
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
