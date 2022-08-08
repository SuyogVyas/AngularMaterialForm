import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
    selector:'form-tag',
    templateUrl:'./templateForm.component.html'
})

export class TemplateForm{

    countryList:string[] = [
        "India",
        "Australia",
        "New Zealand"
    ]

    

    saveForm(form:NgForm)
    {
        console.log(form);
    }
}