#!/bin/bash

# Script de déploiement vers le dossier public

echo "📦 Déploiement vers public/..."

# Créer le dossier public s'il n'existe pas
mkdir -p public

# Copier les fichiers nécessaires
cp index.html public/
cp script.js public/
cp styles.css public/
cp avatar.svg public/
cp favicon.ico public/ 2>/dev/null || true

echo "✅ Déploiement terminé !"
echo "Les fichiers ont été copiés dans public/"
