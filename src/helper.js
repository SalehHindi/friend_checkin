import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Client } from "pg";

const client = new Client({
  connectionString:"postgresql://neondb_owner:tmckCfbl3eH1@ep-icy-flower-a4nfr8qg.us-east-1.aws.neon.tech/neondb?sslmode=require"
})

async function insertData() {
    try {
      await client.connect(); // Ensure client connection is established
      const insertQuery =
        "INSERT INTO users (username, email, password) VALUES ('username1', 'user1@example.com', 'user1_password');";
      const res = await client.query(insertQuery);
      console.log("Insertion success:", res); // Output insertion result
    } catch (err) {
      console.error("Error during the insertion:", err);
    }
  }

async function getData() {
    await client.connect();
    const res = await client.query(`SELECT * FROM users`);
    console.log(res);
    return res;
}

async function updatePass(username, newPass) {
    await client.connect();
    const updateQuery = `UPDATE users SET password = $2 WHERE username = $1`;
    const values = [username, newPass];
    const res = await client.query(updateQuery, values);
    console.log(res);
    return res;
  }

async function deleteUser(username) {
    await client.connect();
    const deleteQuery = `DELETE FROM users WHERE username = $1`;
    const res = await client.query(deleteQuery, [username]);
    console.log(res);
    return res;
}
const get_groups = (email) => {

};

const get_posts = (group_name) => {

};

const create_groups = (group_name, list_of_emails) => {

};

const create_post = (user, groupName, photosList) => {

};

const add_audio = (postId, audioFile) => {

};
const exportedFunctions = { 
    get_groups, 
    get_posts, 
    create_groups, 
    create_post, 
    add_audio
  };
  
  export default exportedFunctions;