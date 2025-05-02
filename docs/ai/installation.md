---
title: "Installation"
slug: "installation"
description: "Learn how to install and set up Cognigy.AI platform."
hidden: false
sidebar_position: 2
---

# Installing Cognigy.AI

This guide will walk you through the process of installing Cognigy.AI in your environment.

## Prerequisites

Before installing Cognigy.AI, ensure you have the following:

- Node.js (version 14 or higher)
- npm (version 6 or higher)
- Docker and Docker Compose
- At least 4GB of RAM
- 20GB of free disk space

## Installation Steps

### 1. Download the Installation Package

Download the latest version of Cognigy.AI from the official website or repository.

```bash
wget https://downloads.cognigy.com/cognigy-ai-latest.tar.gz
```

### 2. Extract the Package

Extract the downloaded package to your desired installation directory:

```bash
tar -xzf cognigy-ai-latest.tar.gz
cd cognigy-ai
```

### 3. Configure Environment Variables

Create a `.env` file in the installation directory with the following variables:

```env
COGNIGY_API_KEY=your_api_key
COGNIGY_ENVIRONMENT=development
COGNIGY_DATABASE_URL=postgresql://user:password@localhost:5432/cognigy
```

### 4. Start the Services

Use Docker Compose to start all required services:

```bash
docker-compose up -d
```

### 5. Verify Installation

Check if all services are running properly:

```bash
docker-compose ps
```

You should see all services in the "Up" state.

## Post-Installation Configuration

### 1. Initialize the Database

Run the database migrations:

```bash
npm run migrate
```

### 2. Create Admin User

Create your first admin user:

```bash
npm run create-admin -- --email admin@example.com --password your_password
```

### 3. Access the Web Interface

Open your browser and navigate to:

```
http://localhost:3000
```

## Troubleshooting

If you encounter any issues during installation, check the following:

1. Verify all prerequisites are met
2. Check Docker and Docker Compose versions
3. Ensure ports 3000, 5432, and 6379 are available
4. Review the logs for any errors:

```bash
docker-compose logs
```

## Next Steps

- [Create your first agent](/docs/cognigy/guides/creating-first-agent)
- [Configure your environment](/docs/cognigy/guides/configuration)
- [Set up authentication](/docs/cognigy/guides/authentication) 