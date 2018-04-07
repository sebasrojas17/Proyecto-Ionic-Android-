import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PostService } from '../post-blog/post.service';
import { PostCreateComponent } from '../post-blog/postblog-create/post-create';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
public post:any;
  constructor(public navCtrl: NavController,
     public postService: PostService) {

  }

  ionViewWillEnter(){
    this.postService.getAllPost()
    .subscribe(res => {
      console.log("Datos en HomePage", res);
      this.post=res;
    }, err => {
     console.log("Error!",err)
   });
  }

loadCreatePost(){
  this.navCtrl.push(PostCreateComponent);
 }
  
}
