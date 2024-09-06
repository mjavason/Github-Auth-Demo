import { Express } from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

export function setupSwagger(app: Express, url: string) {
  const SWAGGER_OPTIONS = {
    swaggerDefinition: {
      openapi: '3.0.0',
      info: {
        title: 'Typescript SFA',
        version: '1.0.0',
        description:
          'This is a single file typescript template app for faster idea testing and prototyping. It contains tests, one demo root API call, basic async error handling, one demo axios call and .env support.',
        contact: {
          name: 'Orji Michael',
          email: 'orjimichael4886@gmail.com',
        },
      },
      servers: [
        {
          url,
        },
      ],
      tags: [
        {
          name: 'Default',
          description: 'Default API Operations that come inbuilt',
        },
      ],
    },
    apis: ['**/*.ts'],
  };
  const swaggerSpec = swaggerJSDoc(SWAGGER_OPTIONS);

  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}
