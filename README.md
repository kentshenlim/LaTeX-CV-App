# LaTeX-CV-Forge

Get LaTeX-compiled CV by filling out a form – without interacting with any LaTeX
code.

> This has stopped working because of apparent certificate issue from
> LaTeX.Online.

## Project Overview

- Project written to practice React.
- Does not support mobile rendering.
- [Demo](https://latex-cv-forge.netlify.app)
- [Example PDF result](./demo/example.pdf)

## Info

- How does this work?  
  Form submitted → build .tex blob and file object → upload file to
  [File.io](https://www.file.io/) and get url → compile LaTeX with the url using
  [LaTeX.Online](https://latexonline.cc/)
- Is my data safe?  
  .tex file will be deleted from [file.io](https://www.file.io/about/) after
  being fetched into current app. Current app does not store any user data.
- Compile error?  
  Avoid using backslash, `\` in the form; LaTeX sees it as command.

## Credits

- LaTeX code is based on
  [autoCV](https://www.overleaf.com/latex/templates/autocv/scfvqfpxncwb).
- [LaTeX.Online](https://github.com/aslushnikov/latex-online)
- [File.io API](https://www.file.io/developers/)
