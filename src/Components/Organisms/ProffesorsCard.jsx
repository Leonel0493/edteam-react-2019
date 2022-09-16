import React from "react";

function ProffesorCard({ Names, Surnames, ProfilePic, BirthDate }) {
  return (
    <article className="card">
      <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
        <img src={ProfilePic} alt={Names} />
      </div>

      <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        <h3 className="t5 s-mb-2 s-center">{`${Names} ${Surnames}`}</h3>
        <div className="s-mb-2 s-main-center">
          <div className="card__teacher s-cross-center">
            <span className="small">{BirthDate}</span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProffesorCard;
