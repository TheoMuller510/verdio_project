// src/components/pages/Home/HomeDashboard/HomeDashboard.jsx
import "./HomeDashboard.scss";
import { Form } from "../../Form";

export const HomeDashboard = () => {
  return (
    <main className="home home--dashboard">
      <section className="home-hero home-hero--dashboard">
        <div className="home-hero__content">
          <h1>Bonjour 👋</h1>
          <p>Retrouve tes défis en cours et ton prochain objectif.</p>
        </div>
      </section>

      <section className="home-challenges home-challenges--dashboard">
        <h2>Challenges en cours</h2>
        <div className="home-challenges__list">
          <p>Tu n’as pas encore commencé de challenge.</p>
          {/* plus tard : ChallengeCard avec les vrais challenges en cours */}
        </div>
      </section>

      <section className="home-cta home-cta--dashboard">
        <h2>Commencer un nouveau challenge</h2>
        <button className="btn btn-primary">Voir tous les challenges</button>
      </section>
      <section>
        <Form />
      </section>
    </main>
  );
};
