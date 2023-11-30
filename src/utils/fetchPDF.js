import format from "date-fns/format";
import startOfTomorrow from "date-fns/startOfTomorrow";

export default async function fetchPDF(texFile) {
    const expires = format(startOfTomorrow(), 'yyyy-MM-dd');
    const maxDownloads = 1;
    const autoDelete = true;
    const formData = new FormData();
    formData.append('file', texFile);
    formData.append('expires', expires);
    formData.append('maxDownloads', maxDownloads);
    formData.append('autoDelete', autoDelete);
    const fileIOData = await fetch('https://file.io/', {
        method: 'POST',
        body: formData
    });
    const res = await fileIOData.json();
    const fileIODownloadLink = res.link;
    const pdfLink = 'https://latexonline.cc/compile?url=' + fileIODownloadLink;
    return pdfLink;
}