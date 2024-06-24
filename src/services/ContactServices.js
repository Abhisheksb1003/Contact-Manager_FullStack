import axios from "axios";

export class Contactservices {
    static serverURL = `http://localhost:9000`;

   

    static getALLContacts() {
        let dataURL = `${this.serverURL}/contacts`;
        return axios.get(dataURL);
    }

    static getContact(contactId) {
        let dataURL = `${this.serverURL}/contacts/${contactId}`;
        return axios.get(dataURL);
    }

    static createContact(conatct){
        let dataURL = `${this.serverURL}/contacts`
        return axios.post(dataURL,conatct);

    }

    static updateContact(contact,contactId){
        let dataURL = `${this.serverURL}/contacts/${contactId}`;
        return axios.put(dataURL,contact);

    }

    static deleteContact(contactId){
        let dataURL = `${this.serverURL}/contacts/${contactId}`;
        return axios.delete(dataURL);
    }
}
