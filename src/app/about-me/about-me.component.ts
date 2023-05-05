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
			note: 'Because of my growing interest in how to code I began teaching myself JS, HTML, and CSS online through tutorials.',
		},
		{
			title: 'I fell in love',
			img: 'heart',
			note: 'Soon after I began learning, I fell in love with coding and and coding became a major interest of mine. Because of this, I decided to pursue a career in frontend development.',
		},
		{
			title: 'I searched',
			img: 'magnifying-glass',
			note: 'To achieve my goal of becoming proficient in frontend development, I joined the "Developer Akademie" (DA) in Munich where I worked on individual and group projects and received regular support and feedback from professional programmers.',
		},
		{
			title: 'New challenges',
			img: 'plane',
			note: 'Being trained at the DA reinforced my passion for coding and I am now looking forward to building on my experience  and starting my career in a junior developer position within a motivated software team',
		},
	];
}
