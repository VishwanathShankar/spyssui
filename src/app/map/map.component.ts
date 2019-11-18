import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { } from 'googlemaps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @ViewChild('gmap', {static: false}) public mapElement: ElementRef;
  map: google.maps.Map;
  latitude: number;
  longitude: number;

  public ngOnInit() {
    // other component initialization code here
 }
// google map with API Key
/* public ngAfterViewInit () {
    const mapProp = {
       center: new google.maps.LatLng(18.5793, 73.8143),
       zoom: 15,
       mapTypeId: google.maps.MapTypeId.ROADMAP
     };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapProp);

  // this alone gives me the same error
    setTimeout(() => {
      console.log(this.mapElement.nativeElement);
   }, 0);
}*/

}
