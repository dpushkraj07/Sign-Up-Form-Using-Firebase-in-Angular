import { Component } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { Observable } from "rxjs";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Firebase Sign Up Form using Angular";
  
  emailValue = "";
  phoneValue = "";
  bioValue = "";
  nameValue = "";
  details: Observable<any[]>;
  constructor(public db: AngularFireDatabase) {
    this.details = db.list("details").valueChanges();
  }
  onSubmit() {
    this.db
      .list("details")
      .push({
        name: this.nameValue,
        email: this.emailValue,
        no: this.phoneValue,
        bio: this.bioValue,
      });

    this.nameValue = "";
    this.emailValue = "";
    this.phoneValue = "";
    this.bioValue = "";
  }
}
