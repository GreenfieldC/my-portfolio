import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GreetingComponent } from './greeting/greeting.component';
import { MainSiteComponent } from './main-site/main-site.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import {
	MAT_FORM_FIELD_DEFAULT_OPTIONS,
	MatFormFieldModule,
} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FooterComponent } from './footer/footer.component';
import { ImprintComponent } from './imprint/imprint.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { BtnToTopComponent } from './btn-to-top/btn-to-top.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		GreetingComponent,
		MainSiteComponent,
		MySkillsComponent,
		MyWorkComponent,
		AboutMeComponent,
		ContactFormComponent,
		FooterComponent,
		ImprintComponent,
		LegalNoticeComponent,
		BtnToTopComponent,
	],
	imports: [
		BrowserModule,
		NgbModule,
		MatButtonModule,
		MatFormFieldModule,
		MatSelectModule,
		MatProgressSpinnerModule,
		MatButtonToggleModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
	],
	providers: [
		{
			provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
			useValue: { appearance: 'outline' },
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
