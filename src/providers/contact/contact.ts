import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable()
export class ContactProvider {
  private PATH = 'contacts/';

  constructor(private db: AngularFireDatabase) {

  }

  getAll(){
    return this.db.list(this.PATH)
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }));
      })
  }

  get(key: string){

  }

  save(contact: any){

  }

  remove(key: string){

  }

}
