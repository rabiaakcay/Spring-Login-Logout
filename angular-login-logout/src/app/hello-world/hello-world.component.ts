import { Component, OnInit } from '@angular/core';
import { Message } from '../message';
import { HelloWordService } from 'src/app/hello-world.service';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  message: string;

  constructor(private helloWorldService: HelloWordService) {

    this.message='';
   }

  ngOnInit() {

    console.log("HelloWorldComponent");
    this.helloWorldService.helloWorldService().subscribe( (result:any) => {
    this.message = result.content;
    console.log(this.message);
    });
  }

}