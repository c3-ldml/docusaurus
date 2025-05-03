---
sidebar_position: 2
---
import CollapsibleSection from '@site/src/components/CollapsibleSection';


# Installing Voice Gateway

This guide provides step-by-step instructions for installing Voice Gateway in your environment.

## System Requirements

Before proceeding with the installation, ensure your system meets these requirements:

- Operating System: Ubuntu 20.04 LTS or CentOS 8
- CPU: 4 cores or more
- RAM: 8GB minimum
- Storage: 50GB free space
- Network: Stable internet connection
- Ports: 8080, 8443, 9000-9100 (for voice processing)

## Installation Methods

Voice Gateway can be installed using one of the following methods:

### Method 1: Docker Installation (Recommended)

1. Install Docker and Docker Compose:

```bash
# For Ubuntu
sudo apt-get update
sudo apt-get install docker.io docker-compose

# For CentOS
sudo yum install docker docker-compose
```

2. Download the Voice Gateway Docker Compose file:

```bash
wget https://downloads.voicegateway.com/docker-compose.yml
```

3. Start the services:

```bash
docker-compose up -d
```

### Method 2: Manual Installation

1. Download the Voice Gateway package:

```bash
wget https://downloads.voicegateway.com/voice-gateway-latest.tar.gz
```

2. Extract the package:

```bash
tar -xzf voice-gateway-latest.tar.gz
cd voice-gateway
```

3. Install dependencies:

```bash
./install-dependencies.sh
```

4. Configure the system:

```bash
./configure.sh
```

5. Start the services:

```bash
./start.sh
```

## Configuration

### Basic Configuration

Create a configuration file at `/etc/voice-gateway/config.yaml`:

```yaml
server:
  port: 8080
  ssl:
    enabled: true
    port: 8443
    certificate: /path/to/cert.pem
    key: /path/to/key.pem

voice:
  engine: "default"
  sample_rate: 16000
  channels: 1

logging:
  level: "info"
  path: "/var/log/voice-gateway"
```

### Environment Variables

Set the following environment variables:

```bash
export VOICE_GATEWAY_API_KEY=your_api_key
export VOICE_GATEWAY_ENVIRONMENT=production
export VOICE_GATEWAY_LOG_LEVEL=info
```

## Verification

To verify your installation:

1. Check service status:

```bash
systemctl status voice-gateway
```

2. Test the API:

```bash
curl -X GET http://localhost:8080/health
```

3. Verify voice processing:

```bash
curl -X POST http://localhost:8080/api/v1/voice/recognize \
  -H "Content-Type: audio/wav" \
  --data-binary @test.wav
```

## Troubleshooting

Common issues and solutions:

1. **Port Conflicts**
   - Check if required ports are available
   - Update configuration if needed

2. **Permission Issues**
   - Ensure proper permissions for log directory
   - Check user permissions for voice processing

3. **Service Not Starting**
   - Check system logs: `journalctl -u voice-gateway`
   - Verify configuration file syntax

## Next Steps

- [Configure Voice Processing](/docs/voice/setup/configuration)
- [Set Up Authentication](/docs/voice/setup/authentication)
- [Integrate with Your Systems](/docs/voice/setup/integration) 