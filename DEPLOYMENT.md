 # Dentico Clinic - Render Deployment Guide

## 🚀 Quick Deploy to Render

Your app is ready to deploy! Follow these steps:

### Step 1: Push to GitHub

1. Initialize git (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. Create a new repository on GitHub

3. Push your code:
   ```bash
   git remote add origin <your-github-repo-url>
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy on Render

1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click **"New +"** → **"Blueprint"**
3. Connect your GitHub repository
4. Render will automatically detect `render.yaml` and configure everything
5. Click **"Apply"** to start deployment

**OR** use the manual method:

1. Click **"New +"** → **"Web Service"**
2. Connect your GitHub repository
3. Configure:
   - **Name**: `dentico-clinic` (or your preferred subdomain)
   - **Runtime**: Node
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Plan**: Free
4. Click **"Create Web Service"**

### Step 3: Access Your App

Once deployed, your app will be available at:
```
https://dentico-clinic.onrender.com
```
(Replace `dentico-clinic` with your chosen subdomain)

## 📝 Important Notes

### Current Setup
- ✅ **Frontend**: React + Vite + TailwindCSS
- ✅ **Backend**: Express.js API
- ⚠️ **Storage**: In-memory (data will reset on restart)

### Data Persistence Warning

**Your app currently uses in-memory storage**, which means:
- All appointments will be lost when the server restarts
- Render's free tier restarts after 15 minutes of inactivity
- Not suitable for production use

### Recommended: Add PostgreSQL Database

To persist data, you should connect to the PostgreSQL database:

1. In Render Dashboard, create a PostgreSQL database:
   - Click **"New +"** → **"PostgreSQL"**
   - Name: `dentico-db`
   - Plan: Free

2. Add environment variable to your web service:
   - Go to your web service settings
   - Add: `DATABASE_URL` = (copy from PostgreSQL connection string)

3. Update `server/storage.ts` to use the database instead of in-memory storage

## 🔧 Environment Variables

Currently configured:
- `NODE_ENV=production` (auto-set)
- `PORT` (auto-set by Render)

Optional (if you add database):
- `DATABASE_URL` - PostgreSQL connection string

## 🌐 Custom Domain (Optional)

To use your own domain:
1. Go to your web service settings
2. Click **"Custom Domain"**
3. Follow Render's instructions to configure DNS

## 📊 Monitoring

- View logs in Render Dashboard
- Free tier includes:
  - 750 hours/month
  - Automatic SSL
  - Auto-deploy on git push

## 🛠️ Troubleshooting

### Build fails
- Check that all dependencies are in `package.json`
- Verify Node version compatibility

### App crashes
- Check logs in Render Dashboard
- Ensure `PORT` environment variable is used (already configured)

### Data not persisting
- This is expected with in-memory storage
- Follow "Add PostgreSQL Database" section above

## 🔄 Updates

To deploy updates:
```bash
git add .
git commit -m "Your update message"
git push
```

Render will automatically rebuild and redeploy!

---

**Need help?** Check [Render Documentation](https://render.com/docs) or open an issue.
