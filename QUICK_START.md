# ⚡ Quick Start - 5 Minutes to Production

## 1. Copy Connection String from Neon
```
https://console.neon.tech → Your Project → Connection Details → Copy URL
```

## 2. Get JWT Secret
```bash
openssl rand -base64 32  # macOS/Linux
```

## 3. Go to Vercel
```
https://vercel.com → Add Project → Select GitHub repo
```

## 4. Fill Build Command
```
npx prisma generate && npm run build
```

## 5. Add Variables
| Variable | Value |
|----------|-------|
| DATABASE_URL | Neon connection string |
| JWT_SECRET | Generated secret |
| NEXT_PUBLIC_APP_URL | Leave blank for now |
| NODE_ENV | production |
| JWT_EXPIRES_IN | 7d |
| ADMIN_EMAIL | admin@yourdomain.com |

## 6. Deploy
Click "Deploy" → Wait 2-5 min → Copy URL

## 7. Update Variable
Update `NEXT_PUBLIC_APP_URL` with your Vercel URL → Redeploy

## 8. Initialize Database
```bash
vercel env pull
npx prisma db push
```

## 9. Visit App
```
https://your-app.vercel.app ✓
```

---

**Done! Your production platform is live. 🚀**
