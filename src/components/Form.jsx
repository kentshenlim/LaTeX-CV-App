import './Form.css';

export default function Form() {
  return (
    <form className="form-wrapper">
      <section className="personal-details">
        <h2>Personal Details</h2>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" placeholder="John Smith" id="name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="kent@hotmail.com" id="email" />
        </div>
        <div>
          <label htmlFor="github">GitHub</label>
          <input type="url" placeholder="asdkfd" id="github" />
        </div>
        <div>
          <label htmlFor="linkedIn">LinkedIn</label>
          <input type="url" placeholder="asdkfd" id="linkedin" />
        </div>
      </section>
      <nav>
        <button type="submit">Compile</button>
        <button type="submit">Download</button>
      </nav>
    </form>
  );
}
