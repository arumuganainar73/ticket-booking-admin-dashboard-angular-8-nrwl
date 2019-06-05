import { Component, OnInit } from '@angular/core';
import { ProductDetails } from 'apps/ticketbooking/src/assets/mock-db/products';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'bookingapp-product-lists',
  templateUrl: './product-lists.component.html',
  styleUrls: ['./product-lists.component.scss']
})
export class ProductListsComponent implements OnInit {

  selectedId: any;
  selectedProduct: any;
  productList = ProductDetails;
  regularDistribution = 100;
  imageSources = [
    { url: 'assets/home/slider1.jpg', caption: 'LKG' },
    { url: 'assets/home/slider2.png', caption: 'Dog Journey', clickAction: () => console.log('custom click function') },
    { url: 'assets/home/slider3.jpg', caption: 'Dog Journey' },
    { url: 'assets/home/slider2.png', caption: 'Aquaman' }
  ];
  height: string = '250px';
  minHeight: string;
  arrowSize: string = '30px';
  showArrows: boolean = true;
  disableSwiping: boolean = false;
  autoPlay: boolean = true;
  autoPlayInterval: number = 3333;
  stopAutoPlayOnSlide: boolean = true;
  debug: boolean = false;
  backgroundSize: string = 'cover';
  backgroundPosition: string = 'center center';
  backgroundRepeat: string = 'no-repeat';
  showDots: boolean = true;
  dotColor: string = '#FFF';
  showCaptions: boolean = true;
  captionColor: string = '#FFF';
  captionBackground: string = 'rgba(0, 0, 0, .35)';
  lazyLoad: boolean = false;
  hideOnNoSlides: boolean = false;
  width: string = '100%';
  fullscreen: boolean = false;
  enableZoom: boolean = false;
  enablePan: boolean = false;

  constructor(private route: ActivatedRoute) {

  }
  ngOnInit() {
    this.selectedId = this.route.snapshot.paramMap.get("id");
    this.selectedProduct = this.productList.filter(obj => {
      return obj['id'] === this.selectedId;
    });
  }
  bookingTicket() {

  }
}
