import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
})
export class DialogComponent implements OnInit {

  @Input() title: string;
  @Input() message: string;
  @Input() btnOkText: string;
  @Input() btnCancelText: string;
  @Input() userInput: boolean;
  form: FormGroup;
  constructor(private activeModal: NgbActiveModal,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      explanation: ['', [Validators.required ]]
    });
  }

  public decline() {
    var response={
      explanation: "",
      submited:false
    }
    this.activeModal.close(response);
  }

  public accept() {
    var response={
      explanation: "",
      submited:true
    }
    this.activeModal.close(response);
  }
  public onSubmit(){
    var response={
      explanation: this.form.controls.explanation.value,
      submited:true
    }
    this.activeModal.close(response);
    
  }

  public dismiss() {
    this.activeModal.dismiss();
  }

}
