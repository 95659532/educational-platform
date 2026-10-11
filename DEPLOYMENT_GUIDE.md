# 🚀 Deployment Guide - Educational Platform

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Database Setup (Neon)](#database-setup)
3. [Environment Variables](#environment-variables)
4. [Vercel Deployment](#vercel-deployment)
5. [Post-Deployment Steps](#post-deployment-steps)
6. [Troubleshooting](#troubleshooting)

---

## Prerequisites

### Required Accounts
- [GitHub](https://github.com) account with this repo pushed
- [Neon](https://neon.tech) account (free tier available)
- [Vercel](https://vercel.com) account
- Node.js 18+ installed locally

### Local Setup (First Time)
```bash
# Clone repository
git clone https://github.com/YOUR_USERNAME/educational-platform.git
cd educational-platform

# Install dependencies
npm install

# Generate Prisma client
npx prisma generate
```

---

## Database Setup (Neon)

### Step 1: Create Neon Project
1. Go to [neon.tech](https://neon.tech)
2. Sign up/Login
3. Click "Create Project"
4. Fill in:
   - Project Name: `edunova-production`
   - Region: Choose closest to your users
   - PostgreSQL Version: 15+
5. Click "Create Project"

### Step 2: Get Database URL
1. After project creation, click on the project
2. Go to "Connection Details"
3. Copy the full connection string that looks like:
   ```
   postgresql://user:password@ep-xxxxx.us-east-1.aws.neon.tech/neondb?sslmode=require
   ```
4. Save this - you'll need it for Vercel

### Step 3: Test Connection Locally (Optional)
```bash
# Update .env.local with DATABASE_URL
echo 'DATABASE_URL="your_neon_url"' > .env.local

# Verify connection
npx prisma db push

# Open Prisma Studio to view database
npx prisma studio
```

---

## Environment Variables

### Generate Secure JWT Secret
```bash
# On macOS/Linux
openssl rand -base64 32

# On Windows (PowerShell)
[Convert]::ToBase64String((1..32 | ForEach-Object {Get-Random -Maximum 256})) -replace '==+$'
```

### Required Variables for Production
```env
# MUST HAVE
DATABASE_URL="postgresql://..."
JWT_SECRET="base64-encoded-32-char-minimum"
NEXT_PUBLIC_APP_URL="https://your-app.vercel.app"

# RECOMMENDED
NODE_ENV="production"
JWT_EXPIRES_IN="7d"
ADMIN_EMAIL="admin@yourdomain.com"
```

---

## Vercel Deployment

### Step 1: Push to GitHub
```bash
# Make sure you're on production/deployment-ready branch
git checkout production/deployment-ready
git add .
git commit -m "Production deployment ready"
git push origin production/deployment-ready
```

### Step 2: Create Vercel Project
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New" → "Project"
3. Select your GitHub repository
4. Click "Import"
5. Leave build settings as default (Vercel auto-detects Next.js)

### Step 3: Add Environment Variables
1. Go to "Settings" → "Environment Variables"
2. Add each variable:

| Key | Value | Environments |
|-----|-------|---------------|
| `DATABASE_URL` | Your Neon URL | Production |
| `JWT_SECRET` | Generated secret | Production |
| `NEXT_PUBLIC_APP_URL` | `https://your-vercel-url.vercel.app` | Production |
| `NODE_ENV` | `production` | Production |
| `JWT_EXPIRES_IN` | `7d` | Production |
| `ADMIN_EMAIL` | Your email | Production |

3. Click "Save"

### Step 4: Deploy
1. Click "Deploy"
2. Wait for build to complete (usually 2-5 minutes)
3. Once complete, you'll get a live URL
4. Copy the URL for next steps

### Step 5: Initialize Database
After first deployment:

```bash
# Option A: Local initialization (RECOMMENDED)
echo 'DATABASE_URL="your_neon_url"' > .env.local
npx prisma db push

# Option B: Via Vercel CLI
vercel env pull
npx prisma db push
```

---

## Post-Deployment Steps

### Step 1: Verify Deployment
- Visit your Vercel URL
- Check homepage loads correctly
- Test navigation

### Step 2: Default Accounts
Create admin account via signup or directly in database:
```bash
# Via Prisma Studio (local)
npx prisma studio

# Add user:
# Email: admin@edunova.com
# Password: Admin123!
# Role: ADMIN
```

### Step 3: SSL Certificate
- Vercel provides automatic SSL
- Check HTTPS works at your URL

### Step 4: Setup Domain (Optional)
1. Go to Vercel Project Settings
2. Click "Domains"
3. Add your custom domain
4. Update DNS settings at your domain provider

### Step 5: Setup CI/CD
```bash
# Enable automatic deployments
# In Vercel: Settings → Git → Production/Preview Branches
# Set Production to: production/deployment-ready
# Set Preview to: feature/**
```

---

## Database Migrations

### Making Schema Changes
```bash
# 1. Update schema.prisma locally
# 2. Test locally:
npm run dev

# 3. Create migration:
npx prisma migrate dev --name add_new_field

# 4. Push to GitHub
git add .
git commit -m "feat: add new field to schema"
git push

# 5. Vercel auto-deploys
# 6. Run in production:
npx prisma db push --skip-generate
```

---

## Monitoring & Maintenance

### Check Logs
```bash
# View deployment logs
vercel logs

# View function logs
vercel logs --follow
```

### Database Backups
- Neon auto-backs up daily
- Access backups in Neon dashboard
- Manual backup: Export via psql

### Performance Monitoring
1. Vercel Analytics → Go to project → Analytics
2. Monitor response times
3. Check database query performance

---

## Troubleshooting

### Build Fails with Prisma Error
```bash
# Solution: Ensure Prisma generation in build
# Vercel's build command should be:
npx prisma generate && npm run build
```

### Database Connection Error
```bash
# Check if DATABASE_URL is set
vercel env pull

# Verify Neon connection from local:
echo $DATABASE_URL
psql $DATABASE_URL -c "SELECT 1"
```

### Page Shows 404 After Deployment
```bash
# Rebuild and redeploy
vercel redeploy

# Or redeploy from GitHub:
git commit --allow-empty -m "rebuild"
git push
```

### Can't Connect to Database Locally
```bash
# Check Neon firewall
# Go to Neon dashboard → Project → Network Access
# Add your IP or use Password Auth

# Test connection:
npx prisma db push --skip-generate --verbose
```

### Slow Performance
1. Check database indexes in Prisma schema
2. Monitor Vercel Analytics
3. Optimize images with Next.js Image component
4. Enable caching in API routes

---

## Security Checklist

- [ ] JWT_SECRET is random and 32+ characters
- [ ] Database URL not in code (only in env vars)
- [ ] HTTPS enabled (automatic on Vercel)
- [ ] CORS configured if needed
- [ ] Rate limiting enabled
- [ ] Admin account has strong password
- [ ] Database backups configured
- [ ] Error logs don't expose sensitive data
- [ ] SQL injection protected (Prisma handles this)
- [ ] XSS protection headers set (in next.config.js)

---

## Quick Reference

### Useful Commands
```bash
# Local development
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Database operations
npm run db:push        # Push schema changes
npm run db:reset       # Reset database
npm run prisma:studio  # Open Prisma UI

# Deployment
vercel                 # Deploy now
vercel --prod          # Deploy to production
vercel logs --follow   # Watch logs
```

### URLs
- Neon Dashboard: https://console.neon.tech
- Vercel Dashboard: https://vercel.com/dashboard
- GitHub Repo: https://github.com/YOUR_USERNAME/educational-platform
- Your App: https://your-app.vercel.app

---

## Support

- **Vercel Issues**: https://vercel.com/support
- **Neon Help**: https://neon.tech/docs
- **Prisma Docs**: https://prisma.io/docs
- **Next.js Docs**: https://nextjs.org/docs

---

## License

This project is private and proprietary.

---

**Last Updated**: 2024-10-11
**Deployment Environment**: Production (Vercel + Neon)
**Next.js Version**: 14.2.15
**Node.js**: 18+
