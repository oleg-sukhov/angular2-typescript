import { Component, OnInit } from '@angular/core'

import { Contact } from './contact'
import { ContactService } from './contact.service'
import { AwesomePipe } from './awesome.pipe'
import { ContactHighlightDirective } from './contact-hightlight.directive'
import { UserService } from './../user.service'

@Component({
    moduleId: module.id,
    selector: 'app-contact',
    templateUrl: 'contact.component.html',
    styleUrls: ['contact.component.css']
})
export class ContactComponent implements OnInit {
    contact: Contact
    contacts: Contact[]

    msg = 'Loading contacts....'
    userName = ''

    constructor(private contactService: ContactService, private userService: UserService) {}

    ngOnInit(): void {
        this.contactService.getContacts().then(contacts => {
            this.msg = ''
            this.contacts = contacts
            this.contact = this.contacts[0]
        })
    }

    next() {
        let idx = this.contacts.indexOf(this.contact) + 1
        if(idx >= this.contacts.length) { idx = 0 }
        console.log('index -> ' + idx)
        this.contact = this.contacts[idx]
    }

    onSubmit() {
        //TODO logic for contact saving
        this.displayMessage('Saved ' + this.contact.name)
    }
    
    displayMessage(msg: string) {
        this.msg = msg
        setTimeout(() => { this.msg = ''}, 2000)
    }

    newContact() {
        this.displayMessage('New Contact')
        this.contact = {id: 42, name: ''}
        this.contacts.push(this.contact)
    }
}