variable "aws_region" {
  default = "us-east-1"
}

variable "project_name" {
  default = "myapp"
}

variable "environment" {
  default = "prod"
}

variable "backend_ami_id" {
  description = "AMI ID for backend EC2 instances (e.g. Amazon Linux 2023 or a custom baked AMI)"
  type        = string
}

variable "db_username" {
  type      = string
  sensitive = true
}

variable "db_password" {
  type      = string
  sensitive = true
}
