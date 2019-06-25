import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  evaluationForm: FormGroup;
  
  ngOnInit() {
    this.evaluationForm = this.fb.group({
      vehicle: ['', Validators.required],
      year: ['', [ Validators.required, Validators.minLength(4) ]],
      value: ['', Validators.required],
      isCar: true
    })
  }

  onSubmit(evaluationForm){
    console.log(evaluationForm);

    // this.service.sendForm(evaluationForm);
  }

}
