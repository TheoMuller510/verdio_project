import './Form.scss';
import React from 'react'

export const Form = () => {
  return (
    <section>
            <h2 class="section-title">Formulaire</h2>
            <div class="form-section">
                <form>
                    <div class="form-group">
                        <label for="pseudo">Pseudo</label>
                        <input type="text" id="pseudo" placeholder="Entrez votre pseudo" />
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" placeholder="votre@email.com" />
                    </div>
                    <div class="form-group">
                        <label for="bio">Bio</label>
                        <textarea id="bio" placeholder="Parlez-nous de vous..."></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Enregistrer</button>
                </form>
            </div>
        </section>
  )
}


