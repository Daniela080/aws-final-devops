output "load_balancer_dns" {
  value = aws_lb.app_alb.dns_name
}

output "instance_1_public_ip" {
  value = aws_instance.app_server_1.public_ip
}

output "instance_2_public_ip" {
  value = aws_instance.app_server_2.public_ip
}

output "alb_url" {
  description = "URL de la aplicación"
  value       = "http://${aws_lb.app_alb.dns_name}"
}

output "db_endpoint" {
  description = "Endpoint de la base de datos"
  value       = aws_db_instance.main.address
  sensitive   = true
}

output "db_replica_endpoint" {
  description = "Endpoint de la réplica"
  value       = aws_db_instance.replica.address
  sensitive   = true
}