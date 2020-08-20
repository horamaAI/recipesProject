import { ModalController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-modal',
  templateUrl: './recipe-modal.component.html',
  styleUrls: ['./recipe-modal.component.scss'],
})
export class RecipeModalComponent implements OnInit {

  @Input() recipe: any;
  @Input() toto: string;

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  handleDismissModal() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
}
