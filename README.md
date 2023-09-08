# Costs
 
## Stack
- Javascript
- React
- API (json-server)
- HTML
- CSS

## Objetivo
Desenvolver um sistema em React que gere projetos, os seus serviços e custos.

## Website
### Página Inicial

![HomePage](/assets/Homepage.png)


### Criar projeto

![HomePage](/assets/CreateProject.png)


### Projetos

![HomePage](/assets/Projects.png)


### Projeto

![HomePage](/assets/Project.png)


### Projeto - editar

![HomePage](/assets/EditProject.png)


### Projeto - criar servico

![HomePage](/assets/CreateServiceProject.png)


## API
### Response
```json
{
  {
  "projects": [
   {
      "name": "Urban Oasis Café Redesign",
      "budget": "50000",
      "category": {
        "id": "3",
        "name": "Design"
      },
      "cost": 15000,
      "services": [
        {
          "name": "Interior Design",
          "cost": "10000",
          "description": "Complete redesign of the café's interior space, incorporating modern aesthetics and functionality to create a comfortable and appealing environment for customers.",
          "id": "cfd6ac00-e29d-4e62-8ef7-b98e17f0924a"
        },
        {
          "name": "Branding and Logo Design",
          "cost": "5000",
          "description": "Refreshing the café's branding and logo to align with the new design theme and promote brand consistency across all platforms.",
          "id": "3ee24f62-a234-4b74-a497-6e6f90e2487b"
        }
      ],
      "id": 10
   }
],
"categories": [
    {
      "id": 1,
      "name": "Infra"
    },
    {
      "id": 2,
      "name": "Development"
    },
    {
      "id": 3,
      "name": "Design"
    },
    {
      "id": 4,
      "name": "Planning"
    }
  ]
}
```
