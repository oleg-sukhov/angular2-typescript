import { Injectable } from '@angular/core'
import { Contact } from './contact';

const CONTACTS: Contact[] = [
    new Contact(1, "John"),
    new Contact(2, "Nil"),
    new Contact(3, "Ben"),
    new Contact(4, "Nikolas"),
    new Contact(5, "Mike")
];

@Injectable()
export class ContactService {

    getContacts(): Promise<Contact[]> {
        return new Promise<Contact[]>(resolve => {
            setTimeout(() => {resolve(CONTACTS) } , 500);
        });
    }

    getContact(id: number | string) {
        this.getContacts()
            .then(contacts => contacts.find(contact => contact.id === +id));
    }
}