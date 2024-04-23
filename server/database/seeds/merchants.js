/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('merchants').del()
  await knex('merchants').insert([
    {id: 1, name: 'Test1 Merchant', email: 'test1@domain.com', merchant_id: '0058e1c6-005f-4d81-ac82-c7147eba8201'},
    {id: 2, name: 'Test2 Merchant', email: 'test2@domain.com', merchant_id: '5b2a2a4f-ec0c-497b-9db0-ed7b05a6b914'},
    {id: 3, name: 'Test3 Merchant', email: 'test3@domain.com', merchant_id: '0343de82-8e64-40ad-815c-1757f94085fb'}
  ]);
};
