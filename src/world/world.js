import { inject } from 'aurelia-framework';
import { GameConfig } from 'config/game-config';
@inject(GameConfig)
export class World{
  constructor(gameConfig){
    this.config = gameConfig;
    console.log(this.config);
    this.width = 20;
    this.height = 10;
    this.data = null;
    this.types = ["water","wood"];
    this.scrollLeft = 0;
    this.scrollTop = 0;

    this.data = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

    ]


  }

  attached(){
  }


  getTile(x,y){
    return this.types[this.data[x][y]];
  }
}
