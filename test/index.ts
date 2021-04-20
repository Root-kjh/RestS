import { runserver } from '../src/core/runserver';
import {settings} from './settings';
import axios from 'axios';
import Worker from 'worker_threads';


describe('runserver', () => {
    it("runserver test", done => {
        const server = runserver("0.0.0.0", 5000, settings);
        axios.get("http://127.0.0.1:5000/").then(response => {
            if (response.data==="test"){
                server.close();
                done();
            }
        })
    })
});