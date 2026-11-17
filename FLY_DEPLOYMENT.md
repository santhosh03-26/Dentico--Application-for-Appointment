# Deploy Dentico Clinic to Fly.io

## Prerequisites

1. **Install Fly.io CLI**
   
   **Windows (PowerShell):**
   ```powershell
   iwr https://fly.io/install.ps1 -useb | iex
   ```
   
   **Mac/Linux:**
   ```bash
   curl -L https://fly.io/install.sh | sh
   ```

2. **Create a Fly.io account** (if you don't have one)
   - Go to https://fly.io/app/sign-up
   - Sign up for free (no credit card required for free tier)

## Deployment Steps

### Step 1: Login to Fly.io

```bash
fly auth login
```

This will open your browser to authenticate.

### Step 2: Launch Your App

```bash
fly launch
```

When prompted:
- **App name**: Press Enter to use "dentico-clinic" or choose your own
- **Region**: Choose the closest region to you (or press Enter for default)
- **PostgreSQL database**: Type `n` (we're using in-memory storage for now)
- **Redis**: Type `n`
- **Deploy now**: Type `y`

That's it! Fly.io will:
- Detect the Dockerfile
- Build your application
- Deploy it to their servers
- Give you a URL like: `https://dentico-clinic.fly.dev`

### Step 3: Check Your Deployment

```bash
fly status
```

View your app:
```bash
fly open
```

## Useful Commands

**View logs:**
```bash
fly logs
```

**Deploy updates:**
```bash
git add .
git commit -m "Your changes"
fly deploy
```

**Check app status:**
```bash
fly status
```

**SSH into your app:**
```bash
fly ssh console
```

**Scale your app:**
```bash
fly scale count 1
```

## Configuration

Your app is configured in `fly.toml`:
- **Port**: 5000 (automatically detected)
- **Region**: iad (US East - change if needed)
- **Memory**: 256MB (free tier)
- **Auto-stop**: Enabled (saves resources when idle)

## Free Tier Limits

- Up to 3 shared-cpu-1x VMs with 256MB RAM each
- 160GB outbound data transfer
- Auto-stop when idle (restarts on request)

## Troubleshooting

**Build fails:**
```bash
fly logs
```

**App not starting:**
```bash
fly status
fly logs
```

**Need to restart:**
```bash
fly apps restart dentico-clinic
```

## Custom Domain (Optional)

1. Add your domain:
   ```bash
   fly certs add yourdomain.com
   ```

2. Add the DNS records shown in the output

3. Verify:
   ```bash
   fly certs show yourdomain.com
   ```

## Environment Variables (If Needed)

```bash
fly secrets set DATABASE_URL="your-database-url"
```

---

**That's it!** Your Dentico Clinic app will be live at `https://dentico-clinic.fly.dev`
