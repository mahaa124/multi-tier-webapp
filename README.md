# Multi-Tier Web Application with CI/CD

A 3-tier architecture reference project: Frontend (S3 + CloudFront), Backend
(EC2 / Docker), Database (RDS), deployed via GitHub Actions.

```
                    ┌─────────────┐
   Users ──────────▶│  CloudFront │ (CDN + HTTPS)
                    └──────┬──────┘
                           │
                    ┌──────▼──────┐
                    │   S3 Bucket │ (Static frontend)
                    └─────────────┘

                    ┌─────────────┐
   API calls ──────▶│     ALB     │
                    └──────┬──────┘
                           │
                 ┌─────────▼─────────┐
                 │  EC2 Auto Scaling │ (Backend API)
                 └─────────┬─────────┘
                           │
                    ┌──────▼──────┐
                    │   RDS / DB  │
                    └─────────────┘
```

## Folder structure

```
multi-tier-webapp/
├── frontend/                  # Static SPA (vanilla JS demo, swap for React/Vue/Angular)
│   ├── public/
│   ├── src/
│   └── package.json
├── backend/                   # Node/Express API
│   ├── src/
│   ├── Dockerfile
│   └── package.json
├── terraform/                 # Infra as code (S3, CloudFront, VPC, ALB, ASG, RDS)
│   └── main.tf
├── .github/workflows/         # CI/CD pipelines
│   ├── frontend-deploy.yml
│   └── backend-deploy.yml
└── README.md
```

## Getting started

### Frontend
```bash
cd frontend
npm install
npm run build      # outputs to frontend/dist
```

### Backend
```bash
cd backend
npm install
npm run dev         # local dev server on :4000
docker build -t myapp-backend .
```

### Infrastructure
```bash
cd terraform
terraform init
terraform plan
terraform apply
```

### CI/CD
The two workflows in `.github/workflows/` deploy the frontend to S3/CloudFront
and the backend to EC2 (via ECR + Auto Scaling instance refresh) on every push
to `main`. Before using them, set these GitHub repo secrets/variables:

| Name | Purpose |
|---|---|
| `AWS_DEPLOY_ROLE_ARN` | IAM role for OIDC-based GitHub Actions auth |
| `CF_DISTRIBUTION_ID` | CloudFront distribution to invalidate on deploy |
| `S3_BUCKET_NAME` | Frontend bucket name |
| `ECR_REPOSITORY` | Backend container repo |
| `ASG_NAME` | Backend Auto Scaling Group name |

See inline comments in each workflow file and `terraform/main.tf` for details.
