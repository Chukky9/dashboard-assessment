'use client';

import { createServer, Response } from 'miragejs';
import { mockAssets, mockFlowNodes } from './data';
import type { Asset } from './data';

export function makeServer({ environment = 'development' } = {}) {
  const server = createServer({
    environment,

    routes() {
      this.namespace = 'api';

      // Assets endpoints
      this.get('/assets', (schema, request) => {
        const { pageSize = 10, page = 1, sort, order = 'asc' }: { pageSize?: number, page?: number, sort?: string, order?: string } = request.queryParams;
        
        const data = [...mockAssets];

        // Apply sorting
        if (sort) {
          data.sort((a: Asset, b: Asset) => {
            if (order === 'asc') {
              return a[sort as keyof Asset] > b[sort as keyof Asset] ? 1 : -1;
            }
            return a[sort as keyof Asset] < b[sort as keyof Asset] ? 1 : -1;
          });
        }

        // Apply pagination
        const start = (Number(page) - 1) * Number(pageSize);
        const paginatedData = data.slice(start, start + Number(pageSize));

        return {
          data: paginatedData,
          meta: {
            total: mockAssets.length,
            page: Number(page),
            pageSize: Number(pageSize),
          },
        };
      });

      this.get('/assets/:id', (schema, request) => {
        const asset = mockAssets.find(a => a.id === request.params.id);
        return asset 
          ? { data: asset }
          : new Response(404, {}, { error: 'Asset not found' });
      });

      // Flow nodes endpoints
      this.get('/flow-nodes', () => {
        return {
          data: mockFlowNodes,
          meta: {
            total: mockFlowNodes.length
          }
        };
      });

      // Risk summary endpoint
      this.get('/risk-summary', () => {
        const summary = {
          critical: mockAssets.filter(a => a.status === 'critical').length,
          high: mockAssets.filter(a => a.status === 'high').length,
          medium: mockAssets.filter(a => a.status === 'medium').length,
          low: mockAssets.filter(a => a.status === 'low').length,
        };

        return {
          data: summary,
        };
      });
    },
  });

  return server;
} 