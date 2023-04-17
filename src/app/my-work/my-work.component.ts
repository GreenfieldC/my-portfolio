import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-my-work',
	templateUrl: './my-work.component.html',
	styleUrls: ['./my-work.component.scss'],
})
export class MyWorkComponent implements OnInit {
	menu: string = 'all';

	projects = [
		{
			title: 'Ring of Fire',
			category: 'angular',
			description: 'A card game, that works on multiple devices.',
			img: 'ring-of-fire',
			site: 'https://ring-of-fire-f47e7.web.app/',
			github: 'https://github.com/GreenfieldC/ringoffire',
		},
		{
			title: 'My Portfolio',
			category: 'angular',
			description: 'My portfolio, that you are currently on.',
			img: 'portfolio',
			site: '#header',
			github: 'https://github.com/GreenfieldC/my-portfolio',
		},
		{
			title: 'El Pollo Loco',
			category: 'js',
			description: 'A small jump and run game, made with JavaScript.',
			img: 'el-pollo-loco',
			site: 'https://www.jonathan-bergqvist.com/my-skills',
			github: 'https://github.com/GreenfieldC/elPolloLoco',
		},
		{
			title: 'Kanban Board',
			category: 'js',
			description: 'A Kanban Board, made with JavaScript.',
			img: 'kanban-board',
			site: 'https://www.jonathan-bergqvist.com/my-skills',
			github: 'https://github.com/GreenfieldC/kanban-board',
		},
	];

	constructor() {}

	ngOnInit() {}
}
