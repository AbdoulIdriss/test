import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, map} from 'rxjs';

@Component({
  selector: 'app-reactif-form',
  templateUrl: './reactif-form.component.html',
  styleUrls: ['./reactif-form.component.scss']
})
export class ReactifFormComponent implements OnInit{

  reactifForm!: FormGroup; //FormGroup is a build in Angular prop for forms
  
  contentReactifForm$!: Observable<any> //the dollar sign is to tell Angular that this property is an observable 

  constructor( private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.reactifForm = this.formBuilder.group({ //the .formBuilder is to create a form
      username:[null , Validators.required , Validators.minLength(3)], //validators are to give the valide formats of email and password
      email:[null, Validators.required, Validators.email],
      password:[null, Validators.required, Validators]

    });

    this.contentReactifForm$ = this.reactifForm.valueChanges.pipe(
      map((formValue:any) => 
      ({ ...formValue,
        id:1}))
    )
  }
  onSubmitForm(){
    console.log(this.reactifForm.value);
    
  }
}
