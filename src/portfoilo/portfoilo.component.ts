import { Component } from '@angular/core';
interface IImage {
  image:string ;
  imageCode:string ;
  imageLabel:string ;
  dataModal:string ;

}
@Component({
  selector: 'app-portfoilo',
  imports: [],
  templateUrl: './portfoilo.component.html',
  styleUrls: ['./portfoilo.component.css']
})
export class PortfoiloComponent {
  images:IImage[] = [
    {image : "./port/poert1_1.webp" , imageCode : "imageOne" , imageLabel : "imageOneLabel" , dataModal : "modalOne"} ,
    {image : "./port/port2.webp" , imageCode: "imageTwo" , imageLabel : "imageTwoLabel" , dataModal : "modalTwo"} ,
    {image : "./port/port3_1.webp" , imageCode: "imageThree" , imageLabel : "imageThreeLabel", dataModal : "modalThree"} ,
    {image : "./port/poert1_1.webp" , imageCode: "imageFour" , imageLabel : "imageFourLabel", dataModal : "modalFour"} ,
    {image : "./port/port2.webp" , imageCode: "imageFive" , imageLabel : "imageFiveLabel", dataModal : "modalFive"} ,
    {image : "./port/port3_1.webp" , imageCode: "imageSix" , imageLabel : "imageSixLabel", dataModal : "modalSix"} ,
  ]
}
