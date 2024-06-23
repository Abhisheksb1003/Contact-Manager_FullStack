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
}
