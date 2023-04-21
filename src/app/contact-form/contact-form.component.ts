import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
	selector: 'app-contact-form',
	templateUrl: './contact-form.component.html',
	styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
	@ViewChild('myForm') myForm!: ElementRef;
	@ViewChild('nameField') nameField!: ElementRef;
	@ViewChild('emailField') emailField!: ElementRef;
	@ViewChild('messageField') messageField!: ElementRef;
	@ViewChild('sendButton') sendButton!: ElementRef;

	constructor() {}

	ngOnInit(): void {}

	emailSent: boolean = false;

	async sendEmail() {
		this.disableInputFields();

		/* Animation "Email is being sent" */

		/* Getting date to send */
		let formData = new FormData();
		formData.append('name', this.nameField.nativeElement.value);
		formData.append('email', this.emailField.nativeElement.value);
		formData.append('message', this.messageField.nativeElement.value);

		await fetch('https://christian-greenfield.de/send_mail.php', {
			method: 'POST',
			body: formData,
		});

		/* Animation "Email has been sent" */
		this.confirmEmail();
		/* Reaktivierung und löschen der Inputfelder */
		this.clearInputFields();
		this.enableInputFields();
	}

	/***
	 * Animation "Email has been sent"
	 */
	confirmEmail() {
		this.emailSent = true;
		setTimeout(() => {
			this.emailSent = false;
		}, 4000);
	}

	/**
	 * Disables the input fields
	 */
	disableInputFields() {
		this.nameField.nativeElement.disabled = true;
		this.emailField.nativeElement.disabled = true;
		this.messageField.nativeElement.disabled = true;
		this.sendButton.nativeElement.disabled = true;
	}

	/**
	 * Enables the input fields
	 */
	enableInputFields() {
		this.nameField.nativeElement.disabled = false;
		this.emailField.nativeElement.disabled = false;
		this.messageField.nativeElement.disabled = false;
		this.sendButton.nativeElement.disabled = false;
	}

	/**
	 * Clears the input fields
	 */
	clearInputFields() {
		this.nameField.nativeElement.value = '';
		this.emailField.nativeElement.value = '';
		this.messageField.nativeElement.value = '';
	}
}
