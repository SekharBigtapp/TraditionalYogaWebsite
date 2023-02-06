import { Component, OnInit } from '@angular/core';
import { LandingPageService } from 'app/data/service/landing-page/landing-page.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  touchForm !: FormGroup
  isSuccess: boolean = false
  classMessage!: string
  postMessage!: string
  constructor(
    private service: LandingPageService,
    private formBuilder: FormBuilder
  ) {
    this.touchForm = this.formBuilder.group({
      name: [null, Validators.compose([Validators.required])],
      email: [null, Validators.compose([Validators.required, Validators.email])],
      phoneNumber: [null, Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(12)])],
      country: [null, Validators.compose([Validators.required])],
      message: [null, Validators.compose([Validators.required])]

    })
  }

  ngOnInit(): void {
  }

  touchFormSubmit() {
    if (this.touchForm.invalid) {
      alert("Form is invalid, please check all fields.")
      return this.touchForm.markAllAsTouched()
    }

    const { name, email, phoneNumber, country, message } = this.touchForm.value

    const body = {

    }


    this.service.postTouch(body).subscribe({
      next: (response) => {
        this.isSuccess = true
        this.classMessage = "sent-message"
        this.postMessage = "Your message has been sent. Thank you!"
      },
      error: (error) => {
        console.error(error);
        this.isSuccess = false
        this.classMessage = "error-message"
        this.postMessage = error.message

      }
    })
  }


}
