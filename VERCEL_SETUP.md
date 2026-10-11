# Vercel Setup - Step by Step

## 1️⃣ GitHub Repository Preparation

```bash
# Ensure code is pushed to production/deployment-ready branch
git checkout production/deployment-ready
git status  # Should be clean
git push origin production/deployment-ready
```

---

## 2️⃣ Neon Database Setup

### Create Neon Account
1. Visit https://neon.tech/
2. Click "Sign Up" or "Get started"
3. Choose "Sign up with GitHub" (recommended)
4. Authorize Neon

### Create Database Project
1. Dashboard → "Create Project"
2. Settings:
   - **Project Name**: `edunova-production`
   - **Region**: Select closest to your users
   - **PostgreSQL Version**: 15 (or latest)
3. Click "Create Project"
4. Wait for initialization (30-60 seconds)

### Get Connection String
1. Project opens → You'll see "Connection Details"
2. Tab: "Connection string"
3. Select: "Node.js"
4. Copy full URL starting with `postgresql://`
5. Format: `postgresql://user:password@ep-xxxxx.region.aws.neon.tech/database?sslmode=require`
6. **Save this in a secure location**

---

## 3️⃣ Generate JWT Secret

### On macOS/Linux Terminal:
```bash
openssl rand -base64 32
```

### On Windows PowerShell:
```powershell
[Convert]::ToBase64String((1..32 | ForEach-Object {Get-Random -Maximum 256})) -replace '==+$'
```

### Result Example:
```
AbCdEfGhIjKlMnOpQrStUvWxYzAbCdEfGhIjKl=
```
**Copy this value**

---

## 4️⃣ Vercel Account Setup

### Create Account
1. Visit https://vercel.com/
2. Click "Sign Up"
3. Choose "GitHub" (recommended)
4. Authorize GitHub
5. Complete setup

---

## 5️⃣ Deploy Project to Vercel

### Import GitHub Repository
1. Vercel Dashboard → "Add New" → "Project"
2. Under "Import Git Repository"
3. Search: `educational-platform`
4. Click on your repo
5. Click "Import"

### Configure Build Settings
1. **Framework**: Select → `Next.js` (usually auto-detected)
2. **Build Command**: Clear default, enter:
   ```
   npx prisma generate && npm run build
   ```
3. **Install Command**: Keep default
   ```
   npm install
   ```
4. **Output Directory**: Keep default
   ```
   .next
   ```
5. **Environment Variables**: Leave empty for now (will add next)

### Add Environment Variables
1. Scroll to "Environment Variables"
2. Add each variable one by one:

#### Variable 1: DATABASE_URL
- **Name**: `DATABASE_URL`
- **Value**: `[Your Neon connection string from step 2]`
- **Environments**: Check ✓ `Production`
- Click "Save"

#### Variable 2: JWT_SECRET
- **Name**: `JWT_SECRET`
- **Value**: `[Generated secret from step 3]`
- **Environments**: Check ✓ `Production`
- Click "Save"

#### Variable 3: NEXT_PUBLIC_APP_URL
- **Name**: `NEXT_PUBLIC_APP_URL`
- **Value**: (leave empty for now, update after deployment)
- **Environments**: Check ✓ `Production`
- Click "Save"

#### Variable 4: NODE_ENV
- **Name**: `NODE_ENV`
- **Value**: `production`
- **Environments**: Check ✓ `Production`
- Click "Save"

#### Variable 5: JWT_EXPIRES_IN
- **Name**: `JWT_EXPIRES_IN`
- **Value**: `7d`
- **Environments**: Check ✓ `Production`
- Click "Save"

#### Variable 6: ADMIN_EMAIL
- **Name**: `ADMIN_EMAIL`
- **Value**: `admin@yourdomain.com`
- **Environments**: Check ✓ `Production`
- Click "Save"

### Deploy
1. Review all settings
2. Click "Deploy"
3. Wait for build completion (2-5 minutes)
4. You'll see: "Congratulations! Deployment successful"
5. Copy your deployment URL (looks like: `https://educational-platform-xxxxx.vercel.app`)

---

## 6️⃣ Update NEXT_PUBLIC_APP_URL

1. Go back to Vercel project
2. Settings → Environment Variables
3. Find `NEXT_PUBLIC_APP_URL`
4. Click edit (pencil icon)
5. Update value to your deployment URL
6. Click "Save"
7. Redeploy:
   - Click "Deployments"
   - Click on latest deployment
   - Click "Redeploy"

---

## 7️⃣ Initialize Database Schema

### Option A: Using Vercel CLI (Recommended)
```bash
# Install Vercel CLI if not already
npm i -g vercel

# Login
vercel login

# Pull environment variables
vercel env pull

# Push database schema
npx prisma db push
```

### Option B: Using Local Environment
```bash
# Create .env.local
echo 'DATABASE_URL="[Your Neon connection string]"' > .env.local

# Push schema
npx prisma db push
```

### Success Check
You should see:
```
✔ Introspected database schema
✔ Created migration if needed
✔ Applied migration
```

---

## 8️⃣ Test Deployment

### Visit Your App
1. Open your Vercel deployment URL
2. Homepage should load
3. Click through main pages
4. Test navigation

### Check Logs
```bash
# View deployment logs
vercel logs

# View function logs in real-time
vercel logs --follow
```

### Common Test Cases
- [ ] Homepage loads
- [ ] Navigation works
- [ ] Images load properly
- [ ] Responsive design works
- [ ] No console errors

---

## 9️⃣ Database Verification

### Via Neon Dashboard
1. Go to https://console.neon.tech
2. Select your project
3. Click "Tables"
4. You should see all tables created (Users, Courses, etc.)

### Via Prisma Studio
```bash
# Make sure DATABASE_URL is in .env.local
npx prisma studio
# Opens http://localhost:5555
# View and manage data
```

---

## 🔟 Setup Complete!

### Checklist
- [ ] GitHub repo pushed to production/deployment-ready
- [ ] Neon project created with database URL copied
- [ ] JWT secret generated and saved
- [ ] Vercel account created
- [ ] Project deployed to Vercel
- [ ] Environment variables added
- [ ] Database schema initialized
- [ ] App tested and working
- [ ] Deployment URL saved

### Your App is Live!
**Visit**: `https://your-vercel-url.vercel.app`

---

## Next Steps

### Domain Setup (Optional)
1. Vercel Settings → Domains
2. Add your custom domain
3. Update DNS at your registrar
4. Wait 24-48 hours for DNS propagation

### Monitoring
1. Enable Vercel Analytics
2. Setup error tracking (Sentry recommended)
3. Monitor database performance

### Backups
1. Neon auto-backups daily
2. Configure automatic backups
3. Test restore process

---

## Troubleshooting

### Build Fails
```bash
# Check logs in Vercel dashboard
# Common fix: Update build command
npx prisma generate && npm run build
```

### Database Connection Error
```bash
# Verify connection string
echo $DATABASE_URL

# Test connection locally
npx prisma db push --skip-generate --verbose
```

### Page Shows 404
```bash
# Redeploy
vercel redeploy
```

### Slow Performance
1. Check Vercel Analytics
2. Optimize images
3. Enable database query optimization
4. Check Neon dashboard for slow queries

---

## Support Resources

- **Vercel Docs**: https://vercel.com/docs
- **Neon Docs**: https://neon.tech/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Prisma Docs**: https://prisma.io/docs

---

**Your production platform is now live! 🎉**
