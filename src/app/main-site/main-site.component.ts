import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
	selector: 'app-main-site',
	templateUrl: './main-site.component.html',
	styleUrls: ['./main-site.component.scss'],
})
export class MainSiteComponent implements OnInit {
	ngOnInit(): void {
		AOS.init();
	}
}
