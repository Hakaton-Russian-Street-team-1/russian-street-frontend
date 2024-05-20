import { title } from "process";

const baseUrl = 'https://streetsrussia.sytes.net/api/v1'

export async function getEvents () {
    let res = await fetch(`${baseUrl}/events`, {
        method: 'GET'
    });
    let data = await res.json();
    return data;
}

export async function createEvent () {
    let res = await fetch(`${baseUrl}/events`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({
            title: "Test project",
            description: "Description",
            date: "2024-05-20",
            discipline_of_event: 0,
            type_of_area: "OPEN",
            plan_of_event: "string",
            city: 0,
            address: "string",
            organizers_contact: {}
        })
        }
    )

    return res;
}