# Outils Gratuits

Site web statique en français avec des outils gratuits utilisables directement dans le navigateur. Il est prévu pour démarrer gratuitement, attirer du trafic naturel grâce aux outils et aux articles, puis préparer une monétisation future avec des publicités.

## Que faire d'abord ?

1. Ouvre `index.html` dans ton navigateur pour voir le site.
2. Teste les outils : moyenne, compteur de mots, mot de passe, âge et température.
3. Change les textes importants dans `index.html` : nom du site, email de contact et descriptions.
4. Publie le dossier gratuitement sur GitHub Pages, Cloudflare Pages ou Netlify.
5. Ajoute régulièrement des articles utiles avant de demander Google AdSense.

## Ton lien du site

J'ai préparé le déploiement automatique avec GitHub Pages. Après publication sur GitHub et activation de Pages avec **GitHub Actions**, le lien sera affiché dans l'onglet **Actions** du dépôt.

Si le dépôt GitHub s'appelle `barji`, le lien aura généralement cette forme :

```text
https://TON-NOM-GITHUB.github.io/barji/
```

Tu n'auras ensuite qu'à partager ce lien.

## Lancer le site en local

Tu peux ouvrir directement `index.html`, ou lancer un petit serveur local :

```bash
python3 -m http.server 4173 --bind 127.0.0.1
```

Ensuite, ouvre :

```text
http://127.0.0.1:4173/
```

## Structure des fichiers

- `index.html` : contenu du site, outils, sections SEO, pages indispensables et emplacement publicitaire.
- `styles.css` : design responsive, cartes, boutons, formulaires et menu mobile.
- `script.js` : logique des outils et interactions côté navigateur.

## Plan simple pour gagner du trafic

- Semaine 1 : publier le site avec les 5 outils existants.
- Semaine 2 : écrire 3 articles simples comme “Comment calculer sa moyenne ?”.
- Semaine 3 : ajouter un nouvel outil, par exemple générateur de CV ou calculateur salaire net/brut.
- Semaine 4 : ajouter les vraies pages “À propos”, “Contact” et “Politique de confidentialité”.
- Après plusieurs contenus originaux : demander AdSense si le site respecte les règles de la plateforme.

## Important pour AdSense

Ne clique jamais sur tes propres publicités, n'achète pas de faux trafic et ne copie pas les articles d'autres sites. Le site doit être utile, original et complet avant d'être monétisé.
