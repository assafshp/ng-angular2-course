import {StorageService} from "../utils/storage.service";
import {Injectable} from "@angular/core";
export interface Item{
  title:string;
  done:boolean;
  created:Date;
}
//
// export class Item {
//   public title:string;
//   public done:boolean;
//   public created:Date;
//
//   constructor(title: string) {
//     this.title = title;
//     this.done = false;
//     this.created = new Date();
//   }
// }

// function stam(target){
//
// }

// @stam
@Injectable()
export class Todolist {
  // set KEY(value: string) {
  //   this._KEY = value;
  // }

  private _items : Item[];
  private storage : StorageService;
  private _KEY: string;

  constructor(storage: StorageService, key: string) {
    this._KEY=key;
    this.storage=storage;
    // this._items = [
      // new Item('learn js'),
      // new Item('learn ts'),
      // new Item('learn angular'),
      // new Item('learn csharp')
      // {title: 'learn js', done: false, created: new Date},
      // {title: 'learn ts', done: false, created: new Date},
      // {title: 'learn angular', done: false, created: new Date}

    // ];
    this._items = this.storage.get(this._KEY) || [];
  }

  public addItem(title:string): void{   //title? optional
    // this._items.push({ title: title, created: new Date, done: false});

    // console.log(this.items);
    // this._items.push(new Item(title));

    const item = {
      title: title, done: false, created: new Date()
    };

    //Create new ref to the array - spread operator, can use also Object.assign
    this._items=[...this._items, item];
    this.storage.save(this._KEY, this._items);
  }

  get items(): Item[] {
    return this._items;
  }

  public removeItem(item: Item){
    const index = this._items.indexOf(item);
    this._items.splice(index,1);
  }

  public removeDone(){
    this._items = this._items.filter( item => item.done === false);
  }

  public toggle(flag:boolean){
    console.log('to implment: ' + flag);
  }


}
