# Deploy Dentico Clinic to Vercel

## 🚀 Quick Deploy (No Credit Card Required!)

### Method 1: Deploy via Vercel Dashboard (Easiest)

1. **Go to Vercel**
   - Visit: https://vercel.com/
   - Click "Sign Up" (use GitHub account for easy integration)

2. **Import Your Project**
   - Click "Add New..." → "Project"
   - Click "Import Git Repository"
   - Select your GitHub repository: `Rupak1802/Dentico`
   - Click "Import"

3. **Configure Build Settings**
   
   Vercel should auto-detect settings, but verify:
   - **Framework Preset**: Other
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist/public`
   - **Install Command**: `npm install --legacy-peer-deps`

4. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Your app will be live at: `https://dentico-clinic.vercel.app`

---

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   
   Answer the prompts:
   - Set up and deploy: `Y`
   - Which scope: Select your account
   - Link to existing project: `N`
   - Project name: `dentico-clinic`
   - Directory: `./` (press Enter)
   - Override settings: `N`

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

---

## ✅ What's Configured

Your project includes:
- ✓ `vercel.json` - Vercel configuration
- ✓ `api/index.ts` - Serverless API handler
- ✓ Build commands in `package.json`
- ✓ Proper routing for SPA

## 🔄 Auto-Deploy Updates

Once connected to GitHub:
1. Make changes to your code
2. Commit and push:
   ```bash
   git add .
   git commit -m "Your changes"
   git push origin main
   ```
3. Vercel automatically deploys!

## 📊 Vercel Free Tier

- ✓ **100GB bandwidth/month**
- ✓ **Unlimited websites**
- ✓ **Automatic HTTPS**
- ✓ **Global CDN**
- ✓ **No credit card required**

## 🛠️ Useful Commands

**Check deployment status:**
```bash
vercel ls
```

**View logs:**
```bash
vercel logs
```

**Open your deployed app:**
```bash
vercel open
```

**Remove deployment:**
```bash
vercel remove dentico-clinic
```

## 🌐 Custom Domain (Optional)

1. Go to your project in Vercel Dashboard
2. Click "Settings" → "Domains"
3. Add your domain
4. Update DNS records as shown

## ⚠️ Important Notes

**Backend Limitations:**
- Vercel uses serverless functions for backend
- Each function has a 10-second timeout on free tier
- Sessions may not persist (use database for production)

**For Production:**
Consider adding a database:
- Vercel Postgres (free tier available)
- Supabase (free tier)
- PlanetScale (free tier)

## 🐛 Troubleshooting

**Build fails:**
- Check build logs in Vercel Dashboard
- Ensure all dependencies are in `package.json`

**API not working:**
- Check that routes start with `/api`
- View function logs in Vercel Dashboard

**App not loading:**
- Clear browser cache
- Check deployment logs

---

**Your app will be live at:** `https://dentico-clinic.vercel.app`

Need help? Check [Vercel Documentation](https://vercel.com/docs)
