export default function getTexFile(strContent) {
    const fileName = 'CV.tex';
    const contentType = 'text/plain';
    const blob = new Blob([strContent], { type: contentType });
    const file = new File([blob], fileName, { type: contentType });
    return file;
}