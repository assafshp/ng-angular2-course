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

export class Todolist {

  private _items : Item[];

  constructor() {
    this._items = [
      // new Item('learn js'),
      // new Item('learn ts'),
      // new Item('learn angular')
      {title: 'learn js', done: false, created: new Date},
      {title: 'learn ts', done: false, created: new Date},
      {title: 'learn angular', done: false, created: new Date}

    ];
  }

  public addItem(title:string): void{
    this._items.push({ title: title, created: new Date, done: false});
  }

  get items(): Item[] {
    return this._items;
  }

  public removeItem(item: Item){
    const index = this._items.indexOf(item);
    this._items.splice(index,1);
  }


}
