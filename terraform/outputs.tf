output "cloudfront_domain" {
  value = aws_cloudfront_distribution.frontend.domain_name
}

output "alb_dns_name" {
  value = aws_lb.backend.dns_name
}

output "db_endpoint" {
  value     = aws_db_instance.main.endpoint
  sensitive = true
}
