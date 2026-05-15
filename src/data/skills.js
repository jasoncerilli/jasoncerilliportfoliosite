/**
 * CUSTOMIZE: Update skill levels (0-100) to reflect your actual proficiency.
 */
export const skillCategories = [
  {
    category: "Cloud & AWS",
    color: "from-orange-500 to-amber-500",
    skills: [
      { name: "AWS EC2 / VPC", level: 95, icon: "☁️" },
      { name: "AWS Lambda", level: 90, icon: "⚡" },
      { name: "AWS EKS / ECS", level: 85, icon: "🐳" },
      { name: "AWS RDS / DynamoDB", level: 88, icon: "🗄️" },
      { name: "AWS S3 / CloudFront", level: 95, icon: "📦" },
      { name: "AWS IAM / Security", level: 92, icon: "🔐" },
    ],
  },
  {
    category: "DevOps & Automation",
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "Terraform", level: 90, icon: "🏗️" },
      { name: "Docker", level: 92, icon: "🐋" },
      { name: "Kubernetes", level: 85, icon: "☸️" },
      { name: "GitHub Actions", level: 90, icon: "🔄" },
      { name: "Ansible", level: 78, icon: "⚙️" },
      { name: "Jenkins", level: 80, icon: "🔧" },
    ],
  },
  {
    category: "Languages & Tools",
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Python", level: 85, icon: "🐍" },
      { name: "Bash / Shell", level: 88, icon: "💻" },
      { name: "Linux", level: 90, icon: "🐧" },
      { name: "Git", level: 92, icon: "📝" },
      { name: "YAML / JSON", level: 95, icon: "📄" },
      { name: "Networking / DNS", level: 82, icon: "🌐" },
    ],
  },
];

export const techStack = [
  { name: "AWS", color: "text-orange-400", bg: "bg-orange-400/10 border-orange-400/20" },
  { name: "Docker", color: "text-blue-400", bg: "bg-blue-400/10 border-blue-400/20" },
  { name: "Kubernetes", color: "text-cyan-400", bg: "bg-cyan-400/10 border-cyan-400/20" },
  { name: "Terraform", color: "text-purple-400", bg: "bg-purple-400/10 border-purple-400/20" },
  { name: "Linux", color: "text-yellow-400", bg: "bg-yellow-400/10 border-yellow-400/20" },
  { name: "GitHub Actions", color: "text-green-400", bg: "bg-green-400/10 border-green-400/20" },
  { name: "Python", color: "text-sky-400", bg: "bg-sky-400/10 border-sky-400/20" },
  { name: "Networking", color: "text-pink-400", bg: "bg-pink-400/10 border-pink-400/20" },
];

export const stats = [
  { value: "3+", label: "Years Experience", icon: "📅" },
  { value: "20+", label: "AWS Services", icon: "☁️" },
  { value: "15+", label: "Projects Delivered", icon: "🚀" },
  { value: "99.9%", label: "Uptime Achieved", icon: "⚡" },
];
