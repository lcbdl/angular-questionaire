import { Component } from '@angular/core';
import { QuestionaireService } from '../../services/questionaire.service';
import { Questionaire } from '../../model/questionaire';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-questionaire',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './questionaire.component.html',
  styleUrl: './questionaire.component.css',
})
export class QuestionaireComponent {
  public questionaire?: Questionaire;
  constructor(private service: QuestionaireService) {}

  ngOnInit() {
    this.loadQuestion();
  }

  loadQuestion() {
    this.service.getQuestionaire().subscribe((q) => {
      this.questionaire = q;
    });
  }
}
