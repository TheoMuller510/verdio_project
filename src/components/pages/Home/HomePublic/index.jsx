// src/components/pages/Home/HomePublic/HomePublic.jsx
import "./HomePublic.scss";

export const HomePublic = () => {
  return (
    <main className="home home--public">
      <section className="home-hero home-hero--public">
        <div className="home-hero__content">
          <h1>Verdio, tes défis éco du quotidien</h1>
          <p>
            Choisis un challenge simple, progresse pas à pas et suis ton impact
            positif.
          </p>
        </div>

        <div className="home-hero__actions">
          <button className="btn btn-primary">Découvrir les challenges</button>
          <button className="btn btn-secondary">S’inscrire</button>
        </div>
      </section>

      <section className="home-challenges home-challenges--public">
        <h2>Commence par un challenge</h2>
        <div className="home-challenges__list">
          <article className="challenge-card">
            <h3>Réduire le plastique</h3>
            <p>Une semaine pour limiter les emballages plastiques au quotidien.</p>
            <span className="badge">7 jours</span>
          </article>

          <article className="challenge-card">
            <h3>Manger végétarien</h3>
            <p>Remplace un repas par jour par une option végétarienne.</p>
            <span className="badge">Facile</span>
          </article>

          <article className="challenge-card">
            <h3>Mobilité douce</h3>
            <p>Privilégie la marche, le vélo ou les transports en commun.</p>
            <span className="badge">Impact fort</span>
          </article>
        </div>
      </section>

      <section className="home-benefits home-benefits--public">
        <h2>Pourquoi Verdio ?</h2>
        <ul>
          <li>Des défis courts et concrets.</li>
          <li>Un suivi de ta progression.</li>
          <li>Une communauté engagée.</li>
        </ul>
      </section>

      <section className="home-cta home-cta--public">
        <h2>Prêt à passer à l’action ?</h2>
        <button className="btn btn-primary">Créer un compte</button>
      </section>
    </main>
  );
};
