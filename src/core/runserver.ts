import { createServer } from 'http';

const parsetSettings = () => {

};

export function runserver(host: string, port: number, settings: any): any{
    const server = createServer((request, response) => {
        console.log(request.headers);
        response.write("test");
        response.end();
    }).listen(port);

    return server;
}