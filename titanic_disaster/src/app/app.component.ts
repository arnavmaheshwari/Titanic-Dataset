import { Component } from '@angular/core';
import { PredictVar } from './predict-var';
import { PredictVarService } from './predict-var.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'titanic_disaster';
  constructor(private predictVarService: PredictVarService) { }
  
  predictvar: PredictVar = new PredictVar('', '', '', '', '', '', '', '', '', '');
  Cabin: string = "";
  list:any = [];
  
  predict(){
    
    if(this.Cabin == 'C'){
      this.predictvar.C = 1;
      this.predictvar.Q = 0;
      this.predictvar.S = 0;    
    }
    if(this.Cabin == "Q"){
      this.predictvar.C = 0;
      this.predictvar.Q = 1;
      this.predictvar.S = 0;    
    }
    if(this.Cabin == "S"){
      this.predictvar.C = 0;
      this.predictvar.Q = 0;
      this.predictvar.S = 1;
    }

    // Getting the values of the object and storing it in a list
    this.list = (Object.values(this.predictvar));

    // Converting all the elements of the list to number
    this.list = this.list.map(Number);

    // Storing the list in an object 'data'
    var obj = {
      "data": this.list
    };
    // Converting the object to JSON
    var json = JSON.stringify(obj);
    
  
    this.predictVarService.predict(json).subscribe(data => {
      if(data == 1){
        alert("Survived");
      }
      else{
        alert("Not Survived");
      }
    });
  }
}
