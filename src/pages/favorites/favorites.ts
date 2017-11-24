import { Component } from '@angular/core';
import { IonicPage,  ModalController} from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import { QuotesService } from '../../services/quotes';
import { QuotePage } from '../quote/quote';
import { SettingsService } from '../../services/settings';

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  quotes:Quote[];


  constructor( private quoteServise: QuotesService,
    private modalCtrl:ModalController,
    private settingService:SettingsService) {
  }

  ionViewWillEnter(){
    this.quotes = this.quoteServise.getFavoriteQuotes();
  }

  onViewQuote(quote:Quote){
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
    modal.onDidDismiss((remove:boolean)=>{
      if(remove){
      this.onUnfavorite(quote);
      }
    });
    
  }

  onUnfavorite(quote:Quote){
    this.quoteServise.removeQuoteFromFavorite(quote);
    //this.quotes = this.quoteServise.getFavoriteQuotes();
    const position = this.quotes.findIndex((quoteEl:Quote) => {
      return quoteEl.id == quote.id;
    });
    this.quotes.splice(position,1);
  }

  getBg(){
    return this.settingService.isAltBg() ? 'altBg' : 'quoteBg';
  }

}
