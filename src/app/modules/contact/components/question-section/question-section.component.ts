import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { QuestionFormModel } from '../../models/question.model';

@Component({
  selector: 'app-question-section',
  templateUrl: './question-section.component.html',
  styleUrls: ['./question-section.component.scss']
})
export class QuestionSectionComponent implements OnInit {
  @Input() title: string
  @Input() subtitle: string
  @Input() buttonText: string = "Submit"
  @Output() onSubmitForm = new EventEmitter()

  formData: QuestionFormModel

  constructor() { }

  ngOnInit() {
  }

  handleSubmit(event, inquiryType, position, firstName, lastName, email, institution, question) {
    event.preventDefault()
    this.formData = { inquiryType, position, firstName, lastName, email, institution, question }
    this.onSubmitForm.emit(this.formData)
  }

}
