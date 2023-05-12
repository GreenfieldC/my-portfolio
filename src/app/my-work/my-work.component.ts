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
			title: 'Kanban Board',
			category: 'js',
			description: 'A kanban board, made with JavaScript.',
			img: 'kanban-board',
			site: 'https://join.christian-greenfield.de',
			github: 'https://github.com/GreenfieldC/kanban-board',
		},

		{
			title: 'El Pollo Loco',
			category: 'js',
			description: 'A small jump and run game, made with JavaScript.',
			img: 'el-pollo-loco',
			site: 'https://el-pollo-loco.christian-greenfield.de',
			github: 'https://github.com/GreenfieldC/elPolloLoco',
		},

		/* 	{
			title: 'Ring of Fire',
			category: 'angular',
			description: 'A card game, that works on multiple devices.',
			img: 'ring-of-fire',
			site: 'https://ring-of-fire.christian-greenfield.de',
			github: 'https://github.com/GreenfieldC/ringoffire',
		}, */

		{
			title: 'My Portfolio',
			category: 'angular',
			description: 'My portfolio, that you are currently on.',
			img: 'portfolio',
			site: '#header',
			github: 'https://github.com/GreenfieldC/my-portfolio',
		},
	];

	constructor() {}

	ngOnInit() {}
}
