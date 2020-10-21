import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {NavigationService} from '../../services/navigation.service';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @ViewChild('contactRef', {static: true}) contactElement: ElementRef;
  form: FormGroup;
  constructor(private navigationService: NavigationService,
              private http: HttpClient,
              private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      message: ['']
    });
  }

  ngOnInit(): void {
    this.navigationService.addLink('contact', this.contactElement);
  }

  onSubmit() {
    if (this.form.valid) {
      const email = this.form.value;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post('https://formspree.io/f/moqpddwv',
        { name: email.name, replyto: email.email, message: email.message },
        { headers }).subscribe(
        response => {
          console.log(response);
          this.form.reset();
        }
      );
    }
  }

  @HostListener('window:resize', ['$event'])
  get isMobile(): boolean {
    return window.innerWidth < 768.1;
  }

}
