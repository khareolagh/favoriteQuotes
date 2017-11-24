import { Component, OnInit } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { Quote } from "../../data/quote.interface";
import { QuotesService } from '../../services/quotes';
/**
 * Generated class for the QuotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit{

  quoteGroup :{category:string, quotes:Quote[], icon:string };
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private alertCtrl:AlertController, 
    private quoteService:QuotesService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotesPage');
   // this.quoteGroup = this.navParams.data;
  }
  ngOnInit(){
    this.quoteGroup = this.navParams.data;
  }
  onAddToFavorite(selectedQuote:Quote){
    const alert = this.alertCtrl.create({
      title:'Add quote',
      subTitle:'Are you shure?',
      message:'Are you shure want to add quote numer '+selectedQuote.id +' ?',
      buttons:[
        {
          text:'Yes! go ahead',
          handler: ()=>{
            this.quoteService.addQuoteToFavorites(selectedQuote);
          }
        },
        {
          text:'No',
          role:'cancel',
          handler: ()=>{
            console.log('Cancel');
          }
        }
      ]

    });
    alert.present()
  }

  onRemoveToFavorite(selectedQuote:Quote){
    this.quoteService.removeQuoteFromFavorite(selectedQuote);
  }

  isFavorites(selectedQuote:Quote){
   return this.quoteService.isQuoteFavorite(selectedQuote);
  }

  ionViewWillLeave(){
    console.log("Quotes Gone!");
   
  }
}
