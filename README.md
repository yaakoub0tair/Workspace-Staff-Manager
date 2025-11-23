project:
  name: "WorkSphere"
  description: "Application web moderne pour gérer le personnel et l’affectation des employés dans différentes zones de travail."
  logo:
    type: "text-css"
    value: "WorkSphere"
    style: |
      .logo {
        font-size: 24px;
        font-weight: 700;
        color: #3498db;
        letter-spacing: -0.5px;
      }

badges:
  license: "MIT"
  technologies:
    - name: "HTML5"
      badge: "https://img.shields.io/badge/HTML5-%23E34F26.svg?logo=html5&logoColor=white"
      link: "https://developer.mozilla.org/fr/docs/Web/HTML"
    - name: "CSS3"
      badge: "https://img.shields.io/badge/CSS3-%231572B6.svg?logo=css3&logoColor=white"
      link: "https://developer.mozilla.org/fr/docs/Web/CSS"
    - name: "JavaScript"
      badge: "https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?logo=javascript&logoColor=black"
      link: "https://developer.mozilla.org/fr/docs/Web/JavaScript"

features:
  - "Ajouter un employé avec nom, rôle, photo, email, téléphone et expériences."
  - "Modifier les informations d’un employé."
  - "Supprimer un employé."
  - "Filtrer et rechercher les employés par rôle ou nom."
  - "Assigner les employés aux zones spécifiques (Conference, Reception, Servers, Security, Staff Room, Vault)."
  - "Zones restreintes pour certains rôles."
  - "Visualiser le profil complet d’un employé dans un modal."
  - "Expériences professionnelles dynamiques pour chaque employé."

screenshots:
  - name: "Dashboard"
    path: "assets/dashboard.png"
  - name: "Add Worker Form"
    path: "assets/add-worker.png"
  - name: "Profile Modal"
    path: "assets/profile-modal.png"

installation:
  steps:
    - "Cloner le dépôt : git clonehttps://github.com/yaakoub0tair/Workspace-Staff-Manager.git
    - "Ouvrir le projet dans votre éditeur de code."
    - "Ouvrir index.html dans un navigateur web."

usage:
  actions:
    - "Cliquer sur 'Add New Worker' pour ajouter un employé."
    - "Utiliser les filtres pour trier les employés par rôle."
    - "Cliquer sur un employé pour voir son profil complet."
    - "Utiliser le bouton '+' dans les zones pour assigner des employés."

project_structure:
  root:
    - "index.html"
    - "css/"
    - "js/"
    - "assets/"
  css:
    - "style.css"
    - "components/"
      - "navbar.css"
      - "sidebar.css"
      - "zones.css"
      - "modal.css"
      - "forms.css"
      - "cards.css"
      - "responsive.css"
  js:
    - "main.js"
    - "form.js"
    - "validation.js"
    - "employees.js"
    - "dom.js"
  assets:
    screenshots:
      - "dashboard.png"
      - "add-worker.png"
      - "profile-modal.png"

responsive:
  description: "L’application est responsive pour tous les écrans (mobile, tablette, desktop)."
  breakpoints:
    - max_width: 1024
      changes: "Flex direction column, zones adaptatives."
    - max_width: 768
      changes: "Form, modals et zones redimensionnées, textes adaptés."
    - max_width: 480
      changes: "Inputs, boutons et cartes redimensionnés, texte plus petit."
    - max_width: 400
      changes: "Optimisation pour petits écrans."

license:
  type: "MIT"
  file: "LICENSE"
  badge: "https://img.shields.io/badge/License-MIT-green.svg"



