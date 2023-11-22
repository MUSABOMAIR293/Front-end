import { Component, OnInit } from '@angular/core';
import { MusicProdctService } from 'src/app/services/music-prodct.service';
import { ReqiustService } from 'src/app/services/reqiust.service';

@Component({
  selector: 'app-music-tools-list',
  templateUrl: './music-tools-list.component.html',
  styleUrls: ['./music-tools-list.component.css']
})
export class MusicToolsListComponent implements OnInit{
[x: string]: any;

confirmationTitle: string = 'Thank you ';
confirmationText: string = 'for your choice. We will process your request at the earliest and reply by email';
showConfirmation: boolean = false;

ReqiustData:any;
  musicData:any;

  constructor(private musicApi: MusicProdctService , private reqApi:ReqiustService){
    // this.musicData.getMusicList().subscribe(
    //   (data: any)=>{this.musicData=data;}

      this.name = 'John Doe';

  }
  ngOnInit(): void {
    this.getAllMusic()
    this.name = JSON.parse(localStorage.getItem("currentUser") as string).name;
  }
  getAllMusic(){
    this.musicApi.getMusicList().subscribe({
      next: (music)=>{
        this.musicData = music
      }
    })
  }
  Requist() {
   
    const requestData = {};
  
    this.reqApi.BulidRequist(requestData).subscribe(
      (requist) => {
        this.ReqiustData = requist;
      },
      (error) => {
        console.error('Error making request:', error);
      }
    );
  }

  name: string | null;

  onButtonClick(): void {
    
    this.confirmationTitle = 'Thank You';
    this.confirmationText = ' For Your Choice. We will Process Your Request at The Earliest and reply By Email';
    this.showConfirmation = true;
  }

 

 

}
