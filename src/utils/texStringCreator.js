const texStringCreator = (() => {
    function getPreamble() {
      const str = `\\documentclass[a4paper,11pt]{article}
\\usepackage{url}
\\usepackage{parskip} 	
\\usepackage{MnSymbol,wasysym}
\\newcommand{\\clicks}[2]{\\href{https://#1}{\\colorlet{temp}{.}\\color{blue}{\\underline{\\color{temp}#2}}\\color{temp}}}  
\\RequirePackage{color}
\\RequirePackage{graphicx}
\\usepackage[usenames,dvipsnames]{xcolor}
\\usepackage[scale=0.9]{geometry}
\\usepackage{tabularx}
\\usepackage{fontawesome}
\\usepackage{enumitem}
\\newcolumntype{C}{>{\\centering\\arraybackslash}X} 
\\usepackage{supertabular}
\\usepackage{tabularx}
\\newlength{\\fullcollw}
\\setlength{\\fullcollw}{0.47\\textwidth}
\\usepackage{titlesec}				
\\usepackage{multicol}
\\usepackage{multirow}
\\titleformat{\\section}{\\Large\\scshape\\raggedright}{}{0em}{}[\\titlerule]
\\titlespacing{\\section}{0pt}{10pt}{10pt}
\\usepackage[style=authoryear,sorting=ynt, maxbibnames=2]{biblatex}
\\usepackage[unicode, draft=false]{hyperref}
\\definecolor{linkcolour}{rgb}{0,0.2,0.6}
\\hypersetup{colorlinks,breaklinks,urlcolor=linkcolour,linkcolor=linkcolour}
\\addbibresource{citations.bib}
\\setlength\\bibitemsep{1em}
\\begin{document}
\\pagestyle{empty}`;
      console.log(str);
      return str;
    }

  function getPersonalDetails({name, email, gitHub, linkedIn}) {
    let str = `\\begin{tabularx}{\\linewidth}{@{} C @{}}
\\Huge{${name}} \\\\[7.5pt]
\\href{mailto:${email}}{\\raisebox{-0.05\\height}\\faEnvelope\\ \\underline{${email}}} \\ $|$ \\ `
    if (gitHub) {
      const slicedGitHub = gitHub.replace(/(^\w+:|^)\/\//, ''); // Remove "https://"
      str += `\\href{${gitHub}}{\\raisebox{-0.05\\height}\\faGithub\\ \\underline{${slicedGitHub}}} \\ $|$ \\ `;
    }
    if (linkedIn) {
      const slicedLinkedIn = linkedIn.replace(/(^\w+:|^)\/\//, '');
      str += `\\href{${linkedIn}}{\\raisebox{-0.05\\height}\\faLinkedin\\ \\underline{${slicedLinkedIn}}} \\ `;
    }
    str += `\\end{tabularx}`;
    return str;
  }

  function getEndDocument() {
    const str = `\\vfill
\\center{\\footnotesize Last updated: \\today}
\\end{document}`;
    return str;
  }

    return {getPreamble, getPersonalDetails, getEndDocument}
})();



export default texStringCreator;