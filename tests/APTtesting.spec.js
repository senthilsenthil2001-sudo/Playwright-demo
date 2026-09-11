import { test, expect } from '@playwright/test';
import { title } from 'process';

//GET
test('GET Posts', async ({ request }) => {

    const response = await request.get('https://jsonplaceholder.typicode.com/posts');

    expect(response.status()).toBe(200);

    const body = await response.json();

    console.log(body);

    expect(body.length).toBeGreaterThan(0);

    expect(body[0].id).toBe(1);

});

//POST
test('Create Post', async ({ request }) => {

    const response = await request.post(
        'https://jsonplaceholder.typicode.com/posts',
        {
            data: {
                title: 'Midun',
                body: 'API Testing',
                userId: 1
            }
        }
    );

    expect(response.status()).toBe(201);

    const body = await response.json();
    console.log(body);

    expect(body.title).toBe('Midun');

    expect(body.userId).toBe(1);

});

// /// /// //PUT
test.only('Update Post', async ({ request }) => {

    const response = await request.put(
        'https://jsonplaceholder.typicode.com/posts/1',
        {
            data: {
                id: 1,
                title: 'Madav',
                body: 'Playwright Automation',
                userId: 1
            }
        }
    );

    expect(response.ok()).toBeTruthy();

    const body = await response.json();
    console.log(body)

    expect(body.title).toBe('Madav');

});
// ///PATCH
test('Patch Post', async ({ request }) => {

    const response = await request.patch(
        'https://jsonplaceholder.typicode.com/posts/1',
        {
            data: {
                title: 'Patched Title'
            }
        }
    );

    expect(response.ok()).toBeTruthy();

    const body = await response.json();
    console.log(body);

    expect(body.title).toBe('Patched Title');

});


// ///DELETE
test('Delete Post', async ({ request }) => {

    const response = await request.delete(
        'https://jsonplaceholder.typicode.com/posts/1'
    );

    expect(response.status()).toBe(200);

});

// API Testing
//     -> Application Programming Interface
//     -> Acts as a medium btw 2 applications

// 1. GET
//     -> It is used to retrieve data from server
//     -> It doesn't update, create or delete anything

// 2. POST
//     -> It creates new data

// 3. PUT
//     -> Updates the entire resource

// 4. PATCH
//     -> Updates only specific fields.

// 5. DELETE
//     -> Deletes existing resource

// Status Code

// 200 -> OK (Request successful)
// 201 -> Created (New resource created)
// 204 -> No content (Deleted successfully, no response body)

// 400 -> Bad request (Invalid request)
// 401 -> Unauthorized (Authentication required / invalid)
// 403 -> Forbidden (Authenticated, but not allowed)
// 404 -> Not Found (Resource doesn't exist)

// 500 -> Internal Server Error (Server side problem)