import {ProductSubCategory} from './product_subcategory';
class ProductCategory{
  id: string;
  name: string;
  imgUrl: string;
  subCategories: ProductSubCategory[];

  constructor(id: string, name: string, imgUrl: string, subCategories: ProductSubCategory[]) {
    this.id = id;
    this.name = name;
    this.imgUrl = imgUrl;
    this.subCategories = subCategories;
  }
}


const productCategories: ProductCategory[] = [

    new ProductCategory("pc1", "Best of Electronics","https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90&quot", [
    new ProductSubCategory("psc1", "Top Mirrorless cameras", "Shop Now!" ,"https://rukminim2.flixcart.com/image/400/400/kokdci80/dslr-camera/v/e/x/z-24-200mm-z5-nikon-original-imag2zuekuxgxsgg.jpeg?q=70", "Apple"),
    new ProductSubCategory("psc2", "Premium powe banks", "Shop Now!" ,"https://rukminim2.flixcart.com/image/400/400/xif0q/power-bank/d/a/f/-original-imagky3e8yp5ebvr.jpeg?q=70", "Apple"),
    new ProductSubCategory("psc3", "Printers", "Shop Now!" ,"https://rukminim2.flixcart.com/image/400/400/kgpg5u80/printer/e/e/h/brother-dcp-b7535dw-original-imafwvkzwyjmqkfv.jpeg?q=70", "Apple"),
    new ProductSubCategory("psc4", "Printers", "Shop Now!" ,"https://rukminim2.flixcart.com/image/400/400/printer/j/j/y/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=70", "Apple"),
    new ProductSubCategory("psc5", "Trimer", "Shop Now!" ,"https://rukminim2.flixcart.com/flap/400/400/image/20c224cd52ae7a87.jpg?q=70", "Apple"),
    new ProductSubCategory("psc6", "Monitors", "Shop Now!" ,"https://rukminim2.flixcart.com/image/400/400/kdnf98w0/monitor/y/t/f/vg279qm-90lm05h0-b01320-asus-original-imafug9suqantxk2.jpeg?q=70", "Apple"),
    new ProductSubCategory("psc7", "Projectors", "Shop Now!" ,"https://rukminim2.flixcart.com/image/400/400/l3khsi80/projector/z/h/4/-original-imagenqrzfcgwqk7.jpeg?q=70", "Apple"),
    new ProductSubCategory("psc8", "Top Mirrorless cameras", "Shop Now!" ,"https://rukminim2.flixcart.com/image/400/400/kokdci80/dslr-camera/v/e/x/z-24-200mm-z5-nikon-original-imag2zuekuxgxsgg.jpeg?q=70", "Apple"),
  ]),


  new ProductCategory("pc2", "Best of Electronics","https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90&quot", [
    new ProductSubCategory("psc1", "Top Mirrorless cameras", "Shop Now!" ,"https://rukminim2.flixcart.com/image/400/400/kokdci80/dslr-camera/v/e/x/z-24-200mm-z5-nikon-original-imag2zuekuxgxsgg.jpeg?q=70", "Apple"),
    new ProductSubCategory("psc2", "Top Mirrorless cameras", "Shop Now!" ,"https://rukminim2.flixcart.com/image/400/400/kokdci80/dslr-camera/v/e/x/z-24-200mm-z5-nikon-original-imag2zuekuxgxsgg.jpeg?q=70", "Apple"),
    new ProductSubCategory("psc3", "Top Mirrorless cameras", "Shop Now!" ,"https://rukminim2.flixcart.com/image/400/400/kokdci80/dslr-camera/v/e/x/z-24-200mm-z5-nikon-original-imag2zuekuxgxsgg.jpeg?q=70", "Apple"),
    new ProductSubCategory("psc3", "Top Mirrorless cameras", "Shop Now!" ,"https://rukminim2.flixcart.com/image/400/400/kokdci80/dslr-camera/v/e/x/z-24-200mm-z5-nikon-original-imag2zuekuxgxsgg.jpeg?q=70", "Apple"),
    new ProductSubCategory("psc3", "Top Mirrorless cameras", "Shop Now!" ,"https://rukminim2.flixcart.com/image/400/400/kokdci80/dslr-camera/v/e/x/z-24-200mm-z5-nikon-original-imag2zuekuxgxsgg.jpeg?q=70", "Apple"),
    new ProductSubCategory("psc3", "Top Mirrorless cameras", "Shop Now!" ,"https://rukminim2.flixcart.com/image/400/400/kokdci80/dslr-camera/v/e/x/z-24-200mm-z5-nikon-original-imag2zuekuxgxsgg.jpeg?q=70", "Apple"),
    new ProductSubCategory("psc3", "Top Mirrorless cameras", "Shop Now!" ,"https://rukminim2.flixcart.com/image/400/400/kokdci80/dslr-camera/v/e/x/z-24-200mm-z5-nikon-original-imag2zuekuxgxsgg.jpeg?q=70", "Apple"),
   
   
    new ProductSubCategory("psc4", "Top Mirrorless cameras", "Shop Now!" ,"https://rukminim2.flixcart.com/image/400/400/kokdci80/dslr-camera/v/e/x/z-24-200mm-z5-nikon-original-imag2zuekuxgxsgg.jpeg?q=70", "Apple"),
  ]),
];



export  {ProductCategory, productCategories};