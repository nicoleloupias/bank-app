import { loadData } from './../../helpers/loadData';
describe('Pruebas en helper loadData', () => {
  test('debe devolver un objeto con balance y movements ', async () => {
    const tryingLoadData = await loadData('test-bank@testing.com');

    expect(tryingLoadData).toMatchObject({
      balance: expect.any(Number),
      movements: expect.any(Array),
    });
  });
});
