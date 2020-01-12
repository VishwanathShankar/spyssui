import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { JQueryStyleEventEmitter } from 'rxjs/internal/observable/fromEvent';

declare var $: any;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterViewInit {

  @Input('mapStyleClass') mapStyleClass: string;
  @Input('location') location: any;

  @ViewChild('gmap', { static: false }) public mapElement: ElementRef;
  map: google.maps.Map;
  latitude: number;
  longitude: number;
  mapUrl: any;
  url: string;

  constructor(private domSanitizer: DomSanitizer) {

  }
  ngOnInit() {
    this.latitude = 13.219332;
    this.longitude = 76.839602;
    this.setUrl();
    this.location = true;
  }

  ngAfterViewInit() {
    // const element = document.getElementById('dymamicMap');
    // const newMap = document.createElement('iframe');
    // newMap.removeAttribute('security');
    // newMap.setAttribute('class', this.mapStyleClass);
    // newMap.setAttribute('height', '450');
    // newMap.setAttribute('src', "https://www.google.sk/maps?f=q&amp;output=embed&amp;source=s_q&amp;hl=sk&amp;geocode=&amp;q=https:%2F%2Fwww.google.sk%2Fmaps%2Fms%3Fauthuser%3D0%26vps%3D5%26hl%3Dsk%26ie%3DUTF8%26oe%3DUTF8%26msa%3D0%26output%3Dkml%26msid%3D205427380680792264646.0004fe643d107ef29299a&amp;aq=&amp;sll=48.669026,19.699024&amp;sspn=4.418559,10.821533&amp;ie=UTF8&amp;ll="
    // + this.latitude + "," + this.longitude
    // + "&amp;spn=0.199154,0.399727&amp;t=m&amp;z="
    // + 5 + "\"");
    // element.replaceChild(newMap, element.firstChild);

    $("#dymamicMap")
      .html("<iframe id=\"map_frame\" "
        + "width=\"100%\" height=\"600px\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\" "
        + "src=\"https://www.google.com/maps?f=q&amp;output=embed&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=https:%2F%2Fwww.google.com%2Fmaps%2Fms%3Fauthuser%3D0%26vps%3D5%26hl%3Dsk%26ie%3DUTF8%26oe%3DUTF8%26msa%3D0%26output%3Dkml%26msid%3D205427380680792264646.0004fe643d107ef29299a&amp;aq=&amp;sll=48.669026,19.699024&amp;sspn=4.418559,10.821533&amp;ie=UTF8&amp;ll="
        + this.latitude + "," + this.longitude
        + "&amp;spn=0.199154,0.399727&amp;t=m&amp;z="
        + 5 + "\"" + "></iframe>");
  }
  setUrl() {
    // this.url = `https://maps.google.com/maps?q=${this.latitude},${this.longitude}&hl=es&z=14&amp;output=embed`;
    this.url = "https://www.google.com/maps?f=q&amp;output=embed&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=https:%2F%2Fwww.google.com%2Fmaps%2Fms%3Fauthuser%3D0%26vps%3D5%26hl%3Dsk%26ie%3DUTF8%26oe%3DUTF8%26msa%3D0%26output%3Dkml%26msid%3D205427380680792264646.0004fe643d107ef29299a&amp;aq=&amp;sll=48.669026,19.699024&amp;sspn=4.418559,10.821533&amp;ie=UTF8&amp;ll="
      + this.latitude + "," + this.longitude
      + "&amp;spn=0.199154,0.399727&amp;t=m&amp;z="
      + 5 + "\"";
    this.mapUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.url);
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
