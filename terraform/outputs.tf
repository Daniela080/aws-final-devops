output "load_balancer_dns" {
  value = aws_lb.app_alb.dns_name
}

output "instance_1_public_ip" {
  value = aws_instance.app_server_1.public_ip
}

output "instance_2_public_ip" {
  value = aws_instance.app_server_2.public_ip
}