export default function getData(URL) {
    return new Promise((resolve, reject) => {

        const request = new XMLHttpRequest();
        request.open('GET', URL, true);

        request.onload = () => {
            if (request.status >= 200 && request.status < 400) {
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else {
                reject('We reached our target server, but it returned an error');
            }
        };

        request.onerror = () => {
            reject('There was a connection error');
        };

        request.send();
    });
}
