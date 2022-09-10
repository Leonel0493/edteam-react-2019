const Curso = () => {
  return (
    <article className="card">
      <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
        <img
          src="https://www.cultture.com/pics/2021/01/naruto-10-de-los-jutsu-mas-dificiles-de-aprender-7.jpg"
          alt="Ninjutso banner"
        />
      </div>
      <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        <h3 className="t5 s-mb-2 s-center">Ninjutso</h3>
        <div className="s-mb-2 s-main-center">
          <div className="card__teacher s-cross-center">
            <div className="card__avatar s-mr-1">
              <div className="circle img-container">
                <img
                  src="https://image.winudf.com/v2/image/Y29tLmFuZHJvbW8uZGV2NjYwNjE0LmFwcDcxMjI2NF9zY3JlZW5fMF8xNTEzNTEzMjU4XzA3NA/screen-0.jpg?fakeurl=1&type=.webp"
                  alt="Sakura Harumo profile"
                />
              </div>
            </div>
            <span className="small">Sakura Harumo</span>
          </div>
        </div>
        <div className="s-main-center">
          <a className="button--ghost-alert button--tiny" href="/home">
            $ 35USD
          </a>
        </div>
      </div>
    </article>
  );
};

export default Curso;
