import "./ChallengeCard.scss";

export const ChallengeCard = ({ title, description, badgeLabel }) => {
  return (
    <article className="challenge-card">
      <h3 className="challenge-card__title">{title}</h3>
      <p className="challenge-card__description">{description}</p>
      {badgeLabel && <span className="challenge-card__badge">{badgeLabel}</span>}
    </article>
  );
};
