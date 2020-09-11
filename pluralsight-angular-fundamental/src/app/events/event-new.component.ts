import { Component, Injectable, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    template: `
            <h2>Create a New Event </h2>
            <div class = "col-md-6">
                <label>Event Name </label>
                <Input type="text" class="form-control">
            </div>
            <div class = "col-md-12 mt-2">
                <button class="btn btn-success mr-2">Save</button>
                <button class="btn btn-danger" (click)="cancel()" type="button">Cancel</button>
            </div>
    `
})

export class EventsNewComponent{
    constructor(private router: Router) { }
    cancel() {
            this.router.navigate(['/events'])
        }
}