import { Component, OnInit } from '@angular/core';
import { MusicProdctService } from 'src/app/services/music-prodct.service';
import { ReqiustService } from 'src/app/services/reqiust.service';

@Component({
  selector: 'app-dash-bord',
  templateUrl: './dash-bord.component.html',
  styleUrls: ['./dash-bord.component.css']
})
export class DashBordComponent implements OnInit {
  musicData:any;
  constructor(private musicApi: MusicProdctService , private reqApi:ReqiustService){
  

  }


  ngOnInit(): void {
    this.getAllMusic()
    
  
  }
  getAllMusic(){
    this.musicApi.getMusicList().subscribe({
      next: (music)=>{
        this.musicData = music
      }
    })
  }

  deleteMusicByID(mu_id: number){
    this.musicApi.deleteMusicByID(mu_id).subscribe({
      next:(resp)=>{
        console.log(resp)
        
      }
    })
  }
}
