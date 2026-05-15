/**
 * CUSTOMIZE: Update these projects with your own work.
 * Each project has: title, description, tags, github, demo, featured, category
 */
export const projects = [
  {
    id: 1,
    title: "Serverless Web Application",
    description:
      "Full-stack serverless app built with AWS Lambda, API Gateway, and DynamoDB. Features user authentication via Cognito, real-time data processing, and auto-scaling with zero server management.",
    tags: ["AWS Lambda", "API Gateway", "DynamoDB", "Cognito", "S3", "CloudFront"],
    github: "https://github.com/yourusername/serverless-web-app", // CUSTOMIZE
    demo: "https://demo.yourproject.com", // CUSTOMIZE
    featured: true,
    category: "Serverless",
    gradient: "from-blue-500 to-cyan-500",
    icon: "⚡",
  },
  {
    id: 2,
    title: "CI/CD Pipeline with GitHub Actions",
    description:
      "Automated CI/CD pipeline integrating GitHub Actions with AWS CodeDeploy. Includes automated testing, Docker image builds, ECR pushes, and blue/green deployments to ECS.",
    tags: ["GitHub Actions", "AWS CodeDeploy", "Docker", "ECR", "ECS", "Terraform"],
    github: "https://github.com/yourusername/cicd-pipeline", // CUSTOMIZE
    demo: null,
    featured: true,
    category: "DevOps",
    gradient: "from-purple-500 to-pink-500",
    icon: "🔄",
  },
  {
    id: 3,
    title: "Terraform Infrastructure Automation",
    description:
      "Modular Terraform codebase for provisioning complete AWS environments. Includes VPC, subnets, security groups, EC2, RDS, S3, IAM roles, and CloudWatch monitoring — all as code.",
    tags: ["Terraform", "AWS", "VPC", "EC2", "RDS", "IAM", "CloudWatch"],
    github: "https://github.com/yourusername/terraform-aws-infra", // CUSTOMIZE
    demo: null,
    featured: true,
    category: "IaC",
    gradient: "from-orange-500 to-amber-500",
    icon: "🏗️",
  },
  {
    id: 4,
    title: "Kubernetes Deployment on EKS",
    description:
      "Production-grade Kubernetes cluster on Amazon EKS with Helm charts, Horizontal Pod Autoscaling, Cluster Autoscaler, Ingress with ALB, and full observability via Prometheus + Grafana.",
    tags: ["Kubernetes", "EKS", "Helm", "Prometheus", "Grafana", "ALB"],
    github: "https://github.com/yourusername/eks-deployment", // CUSTOMIZE
    demo: null,
    featured: false,
    category: "Kubernetes",
    gradient: "from-cyan-500 to-teal-500",
    icon: "☸️",
  },
  {
    id: 5,
    title: "Secure Multi-Tier VPC Architecture",
    description:
      "Enterprise-grade VPC design with public/private/isolated subnets across multiple AZs. Includes NAT Gateways, VPC Flow Logs, Security Groups, NACLs, and AWS WAF integration.",
    tags: ["VPC", "AWS", "Security Groups", "WAF", "Route53", "ACM"],
    github: "https://github.com/yourusername/secure-vpc-architecture", // CUSTOMIZE
    demo: null,
    featured: false,
    category: "Networking",
    gradient: "from-green-500 to-emerald-500",
    icon: "🔒",
  },
  {
    id: 6,
    title: "Static Site Hosting: S3 + CloudFront",
    description:
      "Globally distributed static website hosting using S3 + CloudFront CDN with custom domain, SSL/TLS via ACM, Origin Access Identity, and automated cache invalidation on deploy.",
    tags: ["S3", "CloudFront", "Route53", "ACM", "Lambda@Edge", "GitHub Actions"],
    github: "https://github.com/yourusername/s3-cloudfront-hosting", // CUSTOMIZE
    demo: "https://yourstaticsite.com", // CUSTOMIZE
    featured: false,
    category: "Serverless",
    gradient: "from-sky-500 to-indigo-500",
    icon: "🌐",
  },
];

export const categories = ["All", "Serverless", "DevOps", "IaC", "Kubernetes", "Networking"];
