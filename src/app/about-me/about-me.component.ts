import { Component } from '@angular/core';

@Component({
	selector: 'app-about-me',
	templateUrl: './about-me.component.html',
	styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent {
	posts = [
		{
			title: 'My journey began',
			img: 'walking-person',
			note: 'In spring 2022, I began teaching myself JS, HTML, and CSS online through tutorials.',
		},
		{
			title: 'I fell in love',
			img: 'heart',
			note: 'Soon after I began learning, I fell in love with coding and decided to pursue it as a career.',
		},
		{
			title: 'I searched',
			img: 'magnifying-glass',
			note: 'To achieve my goal of becoming equipped for frontend development, I decided to join the "Developer Akademie" in Munich.',
		},
		{
			title: 'New challenges',
			img: 'plane',
			note: 'I am now looking forward to finding my first job as a frontend developer. I am excited to deepen my knowledge and skills in this field and to contribute to the creation of innovative software products.',
		},
	];
}
