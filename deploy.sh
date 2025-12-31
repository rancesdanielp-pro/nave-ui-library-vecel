#!/bin/bash
# 🚀 Quick Deploy Script for Nave Component Library

echo "🔨 Building UI Library..."
npm run build:lib

echo "📦 Building Next.js App..."
npm run build

echo "✅ Build completed successfully!"
echo ""
echo "📤 Ready to deploy. Choose your platform:"
echo ""
echo "  Vercel:  vercel --prod"
echo "  Netlify: netlify deploy --prod"
echo ""
echo "Or commit and push to trigger automatic deployment:"
echo "  git add ."
echo "  git commit -m 'chore: production build'"
echo "  git push"
