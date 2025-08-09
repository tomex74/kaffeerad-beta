# 🐳 KaffeeRad Berlin - Docker Deployment Guide

Complete Docker containerization for the KaffeeRad Berlin Next.js application with production-ready configurations.

## 📋 Overview

This project includes:
- **Multi-stage Dockerfile** for optimized production builds
- **Docker Compose** configurations for development and production  
- **Health checks** and security optimizations
- **SSL/TLS support** with Traefik reverse proxy
- **Environment configuration** for different deployment scenarios

## 🚀 Quick Start

### Production Deployment
```bash
# Build and run with Docker Compose
docker-compose up -d

# Or build and run manually
npm run docker:build
npm run docker:run
```

### Development Environment
```bash
# Run development environment with hot-reload
npm run docker:up-dev

# Or start development container manually
npm run docker:build-dev
npm run docker:run-dev
```

## 📁 Docker Files Structure

```
├── Dockerfile              # Multi-stage production build
├── Dockerfile.dev          # Development environment
├── docker-compose.yml      # Production configuration
├── docker-compose.dev.yml  # Development configuration
├── .dockerignore           # Build context optimization
└── DOCKER.md               # This documentation
```

## 🔧 Configuration

### Environment Variables

Create a `.env.production` file for production deployment:

```env
NODE_ENV=production
SITE_URL=https://kaffeerad.berlin
PORT=3000

# Form Integration
N8N_WEBHOOK_URL=https://ct012n8n.grapco.eu/webhook/
N8N_WEBHOOK_SECRET=your-webhook-secret

# Email Configuration
EMAIL_FROM=noreply@kaffeerad.berlin
EMAIL_REPLY_TO=info@kaffeerad.berlin

# Analytics (Optional)
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=kaffeerad.berlin
NEXT_PUBLIC_PLAUSIBLE_API_HOST=https://plausible.io

# Error Monitoring (Optional)
SENTRY_DSN=your-sentry-dsn
SENTRY_ORG=your-sentry-org
SENTRY_PROJECT=kaffeerad-berlin
```

### Docker Compose Configuration

The `docker-compose.yml` includes:
- **Production-optimized** Next.js container
- **Health checks** for monitoring
- **Traefik integration** for SSL termination
- **Network isolation** for security
- **Volume management** for persistent data

## 🏗️ Build Process

### Multi-Stage Build

The Dockerfile uses a 3-stage build process:

1. **Dependencies Stage**: Installs production dependencies
2. **Builder Stage**: Builds the Next.js application
3. **Runner Stage**: Creates minimal runtime image

### Build Optimization

- **Alpine Linux** for minimal image size
- **Non-root user** for security
- **Standalone output** for Docker optimization
- **Layer caching** for faster rebuilds

## 📊 Docker Scripts

| Command | Description |
|---------|-------------|
| `npm run docker:build` | Build production image |
| `npm run docker:build-dev` | Build development image |
| `npm run docker:run` | Run production container |
| `npm run docker:run-dev` | Run development container |
| `npm run docker:up` | Start with Docker Compose |
| `npm run docker:up-dev` | Start development environment |
| `npm run docker:down` | Stop all containers |
| `npm run docker:logs` | View container logs |
| `npm run docker:shell` | Access container shell |
| `npm run docker:clean` | Clean up Docker resources |

## 🌐 Production Deployment

### Basic Deployment
```bash
# Clone and build
git clone https://github.com/tomex74/kaffeerad-beta.git
cd kaffeerad-beta
cp .env.example .env.production
# Edit .env.production with your values

# Deploy
docker-compose up -d
```

### With SSL/TLS (Traefik)
```bash
# Deploy with reverse proxy
docker-compose --profile proxy up -d

# Traefik dashboard available at :8080
# SSL certificates managed automatically
```

### Cloud Deployment

#### AWS ECS
```bash
# Build for ARM64 if using Graviton
docker buildx build --platform linux/arm64 -t kaffeerad-berlin:arm64 .
```

#### Google Cloud Run
```bash
# Build and deploy
gcloud run deploy kaffeerad-berlin \
  --image gcr.io/PROJECT-ID/kaffeerad-berlin \
  --platform managed \
  --port 3000
```

#### DigitalOcean App Platform
```bash
# Use docker-compose.yml directly
# Configure environment variables in dashboard
```

## 🔍 Monitoring & Health Checks

### Health Check Endpoint
```
GET /api/health
```

Response:
```json
{
  "uptime": 3600.25,
  "message": "OK",
  "timestamp": 1691234567890,
  "service": "KaffeeRad Berlin",
  "version": "1.0.0",
  "environment": "production"
}
```

### Docker Health Check
- **Interval**: 30 seconds
- **Timeout**: 3 seconds  
- **Retries**: 3 times
- **Start Period**: 40 seconds

### Monitoring Integration
```bash
# View logs
docker-compose logs -f kaffeerad-berlin

# Check container health
docker-compose ps
```

## 🔒 Security

### Container Security
- **Non-root user** (nodejs:nodejs)
- **Read-only filesystem** where possible
- **Minimal base image** (Alpine Linux)
- **Security headers** configured
- **No sensitive data** in image layers

### Network Security
- **Custom Docker network** isolation
- **SSL/TLS termination** with Traefik
- **Health check endpoints** protected
- **Environment variable** injection

## ⚡ Performance Optimization

### Image Size
- **Multi-stage build** reduces final image size
- **Alpine Linux** base (~5MB)
- **Standalone Next.js output** for efficiency
- **Layer caching** for fast rebuilds

### Runtime Performance
- **Node.js 20 Alpine** for optimal performance
- **Production builds** with optimizations
- **Static asset serving** optimized
- **Health checks** for load balancing

## 🛠️ Troubleshooting

### Common Issues

#### Build Fails
```bash
# Clear Docker cache
npm run docker:clean
docker system df  # Check disk usage

# Rebuild without cache
docker build --no-cache -t kaffeerad-berlin:latest .
```

#### Container Won't Start
```bash
# Check logs
docker logs kaffeerad-berlin

# Verify environment variables
docker exec kaffeerad-berlin env
```

#### Health Check Fails
```bash
# Test health endpoint manually
docker exec kaffeerad-berlin wget -q --spider http://localhost:3000/api/health
```

### Development Issues

#### Hot Reload Not Working
```bash
# Ensure volumes are mounted correctly
# Check CHOKIDAR_USEPOLLING=true in dev environment
```

## 📚 Additional Resources

### Docker Best Practices
- [Docker security scanning](https://docs.docker.com/engine/scan/)
- [Multi-stage builds](https://docs.docker.com/develop/dev-best-practices/)
- [Docker Compose networking](https://docs.docker.com/compose/networking/)

### Next.js Docker
- [Next.js Docker examples](https://github.com/vercel/next.js/tree/canary/examples/with-docker)
- [Standalone output](https://nextjs.org/docs/advanced-features/output-file-tracing)

### Deployment Platforms
- [AWS ECS deployment](https://aws.amazon.com/ecs/)
- [Google Cloud Run](https://cloud.google.com/run)
- [DigitalOcean Apps](https://www.digitalocean.com/products/app-platform)

---

**Ready for Production** 🚀 

The KaffeeRad Berlin application is fully containerized and ready for deployment to any Docker-compatible platform!