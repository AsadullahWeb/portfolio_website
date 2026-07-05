import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  loading = false;
  toastMessage = '';

       toastType = '';

  form = {

    name: '',

    email: '',

    title: '',

    message: ''

  };

  sendEmail() {

    if (
      !this.form.name ||
      !this.form.email ||
      !this.form.title ||
      !this.form.message
    ) {

     this.showToast(
'Please fill all fields.',
'error'
);

      return;

    }

    this.loading = true;

    const templateParams = {

      name: this.form.name,

      email: this.form.email,

      title: this.form.title,

      message: this.form.message

    };

    emailjs.send(

      'service_e4n2myb',

      'template_skn2vxf',

      templateParams,

      'g_qsKy0QxBHcjyWAK'

    ).then(() => {

      this.loading = false;
      

     this.showToast(
'Message Sent Successfully!',
'success'
);

      this.form = {

        name: '',

        email: '',

        title: '',

        message: ''

      };

    }).catch((error) => {

      this.loading = false;

      console.error(error);

      this.showToast(
'Failed to Send Message!',
'error'
);

    });

  }
  showToast(message: string, type: string) {

    this.toastMessage = message;

    this.toastType = type;

    setTimeout(() => {

      this.toastMessage = '';

    }, 3000);

  }



}