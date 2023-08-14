import { expect } from 'chai';
import { describe, it } from 'mocha';
import request from 'supertest';
import { app } from '../index'; // Assuming your Express app is exported as `app`

describe('Prime Median Controller', () => {
  it('should return medians for a valid positive number greater than 2', async () => {
    const response = await request(app).get('/api/primeMedian?n=10');
    expect(response.status).to.equal(200);
    expect(response.body.medians).to.deep.equal([3, 5]);
  });

  it('should return an error for negative input', async () => {
    const response = await request(app).get('/api/primeMedian?n=-5');
    expect(response.status).to.equal(400);
    expect(response.body.error).to.equal('Invalid input. Please Enter a positive number');
  });

  it('should return an error for input less than 3', async () => {
    const response = await request(app).get('/api/primeMedian?n=1');
    expect(response.status).to.equal(400);
    expect(response.body.error).to.equal('Invalid input. Please Enter a number greater than 2');
  });

  it('should return an error for non-numeric input', async () => {
    const response = await request(app).get('/api/primeMedian?n=abc');
    expect(response.status).to.equal(400);
    expect(response.body.error).to.equal('Invalid input. Please Enter a number');
  });
});