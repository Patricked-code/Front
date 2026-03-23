# Migration front de l'authentification

## Constat

Le front embarque actuellement plusieurs briques d'authentification et de session en parallèle :

- `magic-sdk`
- `@magic-sdk/admin`
- `next-auth`
- `axios`

Cette superposition augmente fortement le risque de :

- formulaires de connexion incohérents ;
- redirections cassées ;
- état de session ambigu ;
- dépendances difficiles à maintenir.

## Stratégie retenue

La stratégie de stabilisation consiste à :

1. conserver le front existant ;
2. introduire un client d'authentification stable ciblant les nouvelles routes backend ;
3. stocker temporairement le JWT côté navigateur ;
4. rediriger l'utilisateur selon le panel renvoyé par le backend ;
5. retirer progressivement les usages Magic et NextAuth là où ils créent de la friction.

## Fichiers ajoutés

- `src/lib/authApi.ts`
- `src/lib/authSession.ts`

## Routes backend à consommer

- `POST /auth/login`
- `POST /auth/register`
- `GET /auth/panels`

## Flux de connexion recommandé

1. le formulaire front collecte `email` et `password` ;
2. le front appelle `loginStable(email, password)` ;
3. le token et l'utilisateur sont stockés via `saveAuthSession` ;
4. l'utilisateur est redirigé vers `/${user.panel}`.

## Flux d'inscription recommandé

1. le formulaire collecte les champs nécessaires ;
2. le front appelle `registerStable(payload)` ;
3. le token et l'utilisateur sont stockés ;
4. l'utilisateur est redirigé vers son panel.

## Panels à gérer

Le backend renvoie déjà une destination de panel résolue :

- `investisseurpanel`
- `societegestionpanel`
- `personnelpanel`
- `adminpanel`

## Étape suivante recommandée

Recâbler les composants ou pages front de login/register existants vers :

- `src/lib/authApi.ts`
- `src/lib/authSession.ts`

puis supprimer progressivement les dépendances Magic non utilisées dans les écrans stabilisés.
