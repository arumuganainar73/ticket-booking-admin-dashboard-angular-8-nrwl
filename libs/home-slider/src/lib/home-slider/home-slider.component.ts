import { Component, OnInit, OnChanges } from '@angular/core';
import { ProductDetails } from 'apps/ticketbooking/src/assets/mock-db/products';
import { ActivatedRoute, Router } from '@angular/router';
import { CoreService } from 'apps/ticketbooking/src/app/core.service';

@Component({
  selector: 'bookingapp-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.scss']
})
export class HomeSliderComponent implements OnInit, OnChanges {

  productLists = ProductDetails;

  regularDistribution = 100 / 4;


  imageSources = [
    { url: 'assets/home/slider1.jpg', caption: 'LKG' },
    { url: 'assets/home/slider2.png', caption: 'Dog Journey', clickAction: () => console.log('custom click function') },
    { url: 'assets/home/slider3.jpg', caption: 'Dog Journey' },
    { url: 'assets/home/slider2.png', caption: 'Aquaman' },

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

  isLogedIn = false;

  constructor(private route: ActivatedRoute,
    private router: Router, public coreService: CoreService) { }
  ngOnInit() {
    this.coreService.getMessage().subscribe(response => {
      console.log("Subscribe Data", response);
      if (!response) {
        return
      }
      this.productLists.unshift({
        id: this.productLists.length + 1,
        url: 'assets/lkg.jpg',
        title: response.title,
        actor: response.actor,
        price: response.price,
        rating: "4.25",
        description: response.description,
      })
    });
    this.coreService.getLoginStatus().subscribe(response => {
      console.log("Subscribe Data Login Status", response);
      this.isLogedIn = response; 
    });
  }
  ngOnChanges() {
    this.coreService.getMessage().subscribe(response => {
      console.log("Subscribe Data", response);

    });
  }
  deleteProduct(product, index) {
    this.productLists.slice(0, index);
  }
  navigateTo(product) {
    this.router.navigate(['/product/' + product.id]);
  }
}
