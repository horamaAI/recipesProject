import { ModalController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';

import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-recipe-modal',
  templateUrl: './recipe-modal.component.html',
  styleUrls: ['./recipe-modal.component.scss'],
})
export class RecipeModalComponent implements OnInit {

  @Input() recipe: any;
  @Input() toto: string;

  constructor(private modalCtrl: ModalController, private callNumber: CallNumber) {}

  ngOnInit() {}

  handleDismissModal() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  clickCall(){
    this.callNumber.callNumber("18001010101", true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }
}
